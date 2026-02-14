import React, {useEffect} from 'react';
import 'react-native-gesture-handler';
import {Linking, LogBox, StyleSheet} from 'react-native';
import RootNavigation from './src/navigation/RootNavigation';
import {NavigationContainer} from '@react-navigation/native';

const linking = {
  prefixes: ['https://io.pixelsoftwares.com', 'http://io.pixelsoftwares.com'],
  config: {
    screens: {
      Home: '',
      ProductDetail: 'product/:id',
      DeepLinkTest: 'test.txt',
    },
  },
};

function App(): React.JSX.Element {
  LogBox.ignoreAllLogs();

  useEffect(() => {
    // Handle initial URL (app was closed)
    Linking.getInitialURL().then(url => {
      if (url) {
        console.log('App opened with URL:', url);
      }
    });

    // Handle URL events (app was in background)
    const subscription = Linking.addEventListener('url', ({url}) => {
      console.log('Deep link received:', url);
    });

    return () => subscription.remove();
  }, []);

  return (
    <NavigationContainer linking={linking} fallback={null}>
      <RootNavigation />
    </NavigationContainer>
  );
}

export default App;

const styles = StyleSheet.create({});
