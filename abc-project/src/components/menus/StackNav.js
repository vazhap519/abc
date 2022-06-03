// In App.js in a new project

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import BottomTabsNav from './BottomTabsNav';
import TopTabs from './TopTabNav';
import HomeScreen from '../screens/HomeScreen';
import Latest from '../screens/Latest';

const Stack = createNativeStackNavigator();

function StackNav() {
  return (

      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Latest" component={Latest} />
          <Stack.Screen name="BottomTabsNav" component={BottomTabsNav}/>
          <Stack.Screen name="TopTabs" component={TopTabs} />
      </Stack.Navigator>
 
  );
}


export default StackNav;