// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import StackNav from './src/components/menus/StackNav';
const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <StackNav />

    </NavigationContainer>
  );
}

export default App;