import React from 'react';
import {StatusBar} from 'react-native';
import Toast from 'react-native-toast-message';
import {QueryClient} from '@tanstack/react-query';
import {NavigationContainer} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import RootStackNavigator from './src/navigators/RootStackNavigator';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import {PersistQueryClientProvider} from '@tanstack/react-query-persist-client';
import {createAsyncStoragePersister} from '@tanstack/query-async-storage-persister';

GoogleSignin.configure({
  webClientId:
    '382590440309-0sdt1e7vvl9937mg6d53uur7sspjun4h.apps.googleusercontent.com',
});

// Create a client
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      cacheTime: 1000 * 60 * 60 * 24, // 24 hours
    },
  },
});

const asyncStoragePersister = createAsyncStoragePersister({
  storage: AsyncStorage,
});

const App = () => {
  return (
    <PersistQueryClientProvider
      client={queryClient}
      persistOptions={{persister: asyncStoragePersister}}>
      <NavigationContainer>
        <StatusBar barStyle={'dark-content'} />
        <RootStackNavigator />
      </NavigationContainer>

      <Toast />
    </PersistQueryClientProvider>
  );
};

export default App;
