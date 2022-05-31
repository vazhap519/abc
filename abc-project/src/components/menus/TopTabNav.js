import * as React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Apparel from '../screens/Apparel'
import Shoes from '../screens/Shoes';
import Beauty from '../screens/Beauty';
import SeeAll from '../screens/SeeAll';
import { View } from 'react-native-web';
const Tab = createMaterialTopTabNavigator();
function TopTabs() {
  return (
    <Tab.Navigator >
      <Tab.Screen name="Apparel" component={Apparel} options={{
        tabBarIcon:()=>{
          return(
            <View><FontAwesome5 name="tshirt" size={24} color="black" /></View>
          )
          
        }
      }} />
      <Tab.Screen name="Shoes" component={Shoes} 
      options={{
        tabBarIcon:()=>{
          return(
            <View><MaterialCommunityIcons name="shoe-heel" size={24} color="black" /></View>
          )
          
        }
      }}
      />
      <Tab.Screen name="Beauty" component={Beauty} 
      options={{
        tabBarIcon:()=>{
          return(
            <View><FontAwesome5 name="tshirt" size={24} color="black" /></View>
          )
          
        }
      }}
      />
      <Tab.Screen name="SeeAll" component={SeeAll} 
      options={{
        tabBarIcon:()=>{
          return(
            <View><FontAwesome5 name="tshirt" size={24} color="black" /></View>
          )
          
        }
      }}
      
      />
    </Tab.Navigator>
  );
}
export default TopTabs