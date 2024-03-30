/* eslint-disable no-param-reassign */
import {createSlice} from '@reduxjs/toolkit';

interface IReelSliceProps {
  data: any;
}

const initialState: IReelSliceProps = {
  data: {},
};

export const reelsSlice = createSlice({
  name: 'reels',
  initialState,
  reducers: {
    fetchReelsSlice: {
      reducer: state => state,
      prepare: (successCallback: any, failureCallback: any) => ({
        payload: {
          successCallback,
          failureCallback,
        },
      }),
    },
  },
});

export const {fetchReelsSlice} = reelsSlice.actions;
export default reelsSlice.reducer;
