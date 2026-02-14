import React, { useEffect, useState } from 'react';
import {
  createStackNavigator,
  TransitionPresets,
} from '@react-navigation/stack';
import SplashScreen from '../screens/splash/SplashScreen';
import { getDataFromEncryptedStorage } from '../resources/Utilities';
import { storageKeys } from '../resources/Constants';

import BottomTab from './BottomTab';
import DeepLinkTestScreen from '../screens/deeplinking/DeepLinkTestScreen';


const RootStack = createStackNavigator();
const RootNavigation = () => {
  const [token, setToken] = useState(false);
  useEffect(() => {
    fetchToken();
  }, []);

  const fetchToken = async () => {
    getDataFromEncryptedStorage(storageKeys.kACCESS_TOKEN).then(res => {
      if (res) {
        setToken(token);
      }
    });
  };
  const TransitionScreenOptions = {
    ...TransitionPresets.SlideFromRightIOS, // This is where the transition happens
    headerShown: false,
  };
  return (
    <RootStack.Navigator
      initialRouteName="SplashScreen"
      screenOptions={TransitionScreenOptions}>
      <RootStack.Screen
        name="SplashScreen"
        component={SplashScreen}
        options={{headerShown: false}}
      />
      <RootStack.Screen name="HomeTabs" component={BottomTab} />
      <RootStack.Screen name="DeepLinkTest" component={DeepLinkTestScreen} />
    </RootStack.Navigator>
  );
};

export default RootNavigation;
