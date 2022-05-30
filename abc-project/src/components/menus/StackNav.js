// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import Latest from '../screens/Latest';

const Stack = createNativeStackNavigator();

function StackNav() {
  return (

      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Latest" component={Latest} />
      </Stack.Navigator>
 
  );
}


export default StackNav;