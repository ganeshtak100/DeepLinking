import {call, takeLatest} from 'redux-saga/effects';
import {fetchReelsSlice} from '../ReelsSlice';
import {getReels} from '../../services/reelsdata';

function* getReelsSaga(action: any): any {
  try {
    const data = yield call(getReels);
    action.payload?.successCallback(data);
  } catch (error: any) {
    action.payload?.failureCallback(error);
  }
}

const root = function* root() {
  yield takeLatest(fetchReelsSlice.type, getReelsSaga);
};

export default root;
