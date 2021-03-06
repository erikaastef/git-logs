import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ThemeProvider } from 'styled-components/native'
import theme from './styles/theme'

import useCachedResources from './hooks/useCachedResources';
import Navigation from './navigation';


import store from './redux/store'
import { Provider } from 'react-redux'

export default function App() {
  const isLoadingComplete = useCachedResources();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <Provider store={store}>
        <SafeAreaProvider>
          <ThemeProvider theme={theme}>
            <Navigation />
            <StatusBar />
          </ThemeProvider>
        </SafeAreaProvider>
      </Provider>
    );
  }
}
