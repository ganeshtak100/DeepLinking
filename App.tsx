import * as React from 'react';
import {Provider} from 'react-redux';
import Navigator from './src/navigation';
import store from './src/reduxStore/store';
function App() {
  return (
    <Provider store={store}>
      <Navigator />
    </Provider>
  );
}

export default App;
