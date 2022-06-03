import * as React from 'react';
import { View, Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import SearchScreen from '../screens/SearchScreen';
import CartScreen from '../screens/CartScreen';
import ProfileScreen   from '../screens/ProfileScreen';
import MoreScreen   from '../screens/MoreScreen';
const bottom = createBottomTabNavigator();

const  BottomNav=()=> {
  return (
    <bottom.Navigator>
      <bottom.Screen name="Home" component={HomeScreen} />
      <bottom.Screen name="search" component={SearchScreen} />
      <bottom.Screen name="Cart" component={CartScreen} />
      <bottom.Screen name="Profile" component={ProfileScreen} />
      <bottom.Screen name="More" component={MoreScreen} />
    </bottom.Navigator>
  );
}
export default BottomNav