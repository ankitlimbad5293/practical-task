import React from 'react';
import { Provider } from 'react-redux';
import { SafeAreaView } from 'react-native';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from './src/reduxStore/store';
import UserList from './src/screens/UserList';

const App = () => (
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <SafeAreaView style={{ flex: 1 }}>
        <UserList />
      </SafeAreaView>
    </PersistGate>
  </Provider>
);

export default App;
