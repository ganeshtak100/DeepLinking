import * as React from 'react';
import {Provider} from 'react-redux';
import Navigator from './src/navigation';
import store from './src/reduxStore/store';
// import {PersistGate} from 'redux-persist/lib/integration/react';
function App() {
  return (
    <Provider store={store}>
      {/* <PersistGate loading={null} persistor={persistor}> */}
      <Navigator />
      {/* </PersistGate> */}
    </Provider>
  );
}

export default App;
