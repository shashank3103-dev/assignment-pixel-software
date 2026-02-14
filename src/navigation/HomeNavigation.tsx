import React from 'react';
import HomeScreen from '../screens/home/HomeScreen';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ProductDetailScreen from '../screens/home/ProductDetailScreen';
const HomeStack = createNativeStackNavigator();
const HomeNavigation = () => {
  return (
    <HomeStack.Navigator screenOptions={{headerShown: false}}>
      <HomeStack.Screen name="HomeScreen" component={HomeScreen} />
      <HomeStack.Screen name="ProductDetail" component={ProductDetailScreen} />
    </HomeStack.Navigator>
  );
};

export default HomeNavigation;
