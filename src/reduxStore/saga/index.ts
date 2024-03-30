import {all} from 'redux-saga/effects';
import getReelsSaga from './reelSaga';

const rootSaga = function* rootSaga() {
  yield all([getReelsSaga()]);
};
export default rootSaga;
