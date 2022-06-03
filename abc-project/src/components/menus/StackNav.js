// In App.js in a new project

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import BottomTabsNav from './BottomNav';
import TopTabs from './TopTabNav';
import HomeScreen from '../screens/HomeScreen';
import Latest from '../screens/Latest';

const Stack = createNativeStackNavigator();

function StackNav({navigation}) {
  return (

      <Stack.Navigator>
        <Stack.Group>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Latest" component={Latest} />

    
        </Stack.Group>
     
      </Stack.Navigator>
 
  );
}


export default StackNav;