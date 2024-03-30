import {combineReducers, configureStore} from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import reelsSlice from './ReelsSlice';
import rootSaga from './saga';
const middleware: any = [];
const sagaMiddleware = createSagaMiddleware();
middleware.push(sagaMiddleware);

const RootReducer = combineReducers({
  reelsSlice,
});
const store = configureStore({
  reducer: RootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      thunk: true,
      immutableCheck: false,
      serializableCheck: false,
    }).concat(sagaMiddleware),
});
sagaMiddleware.run(rootSaga);
export default store;
