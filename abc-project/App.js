// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import StackNav from './src/components/menus/StackNav';


function App() {
  return (
  <NavigationContainer>
      <StackNav />
  </NavigationContainer>
    

  );
}

export default App;