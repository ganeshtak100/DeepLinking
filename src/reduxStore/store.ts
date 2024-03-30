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
  // reducer: {reels: reelsSlice},
  reducer: RootReducer,
  // middleware: middleware,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      thunk: true,
      immutableCheck: false,
      serializableCheck: false,
    }).concat(sagaMiddleware),
});
sagaMiddleware.run(rootSaga);
export default store;

// import {configureStore, combineReducers} from '@reduxjs/toolkit';
// import {createLogger} from 'redux-logger';
// import {persistStore, persistReducer} from 'redux-persist';
// import createSagaMiddleware from 'redux-saga';
// import reelsSlice from './ReelsSlice';

// import sagas from './saga/index';

// const RootReducer = combineReducers({
//   reelsSlice,
// });

// const config = {
//   key: 'root',
//   debug: true, // to get useful logging
// };

// const middleware = [];

// const sagaMiddleware = createSagaMiddleware();

// middleware.push(sagaMiddleware);

// if (__DEV__) {
//   middleware.push(
//     createLogger({
//       collapsed: true,
//       duration: true,
//       timestamp: true,
//       colors: {
//         title: () => '#F2789F',
//         prevState: () => '#de6f0d',
//         action: () => '#CAB8FF',
//         nextState: () => '#1a9134',
//       },
//     }),
//   );
// }

// const persistedReducer = persistReducer(config, RootReducer);

// const enhancers = [...middleware];

// const persistConfig = {...enhancers};

// const store = configureStore({
//   reducer: persistedReducer,
//   middleware: enhancers,
// });

// const persistor = persistStore(store, persistConfig, () => {
//   //   console.log('Test', store.getState());
// });

// sagaMiddleware.run(sagas);

// console.log('Redux Store: ', store?.getState());

// export {store, persistor};
