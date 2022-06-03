import * as React from 'react';
import { View, Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import SearchScreen from '../screens/SearchScreen';
import CartScreen from '../screens/CartScreen';
import ProfileScreen   from '../screens/ProfileScreen';
import MoreScreen   from '../screens/MoreScreen';
import { AntDesign } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
const bottom = createBottomTabNavigator();

const  BottomNav=()=> {
  return (
    <bottom.Navigator>
      <bottom.Screen name="Home" component={HomeScreen} 
         options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="home" color={color} size={size} />
          ),
        }}
      />
      <bottom.Screen name="search" component={SearchScreen}
       options={{
        tabBarLabel: 'Search',
        tabBarIcon: ({ color, size }) => (
          <FontAwesome name="search" size={size} color={color} />
        ),
      }}
      />
      <bottom.Screen name="Cart" component={CartScreen}
       options={{
        tabBarLabel: 'Cart',
        tabBarIcon: ({ color, size }) => (
          <AntDesign name="shoppingcart" size={size} color={color} />
        ),
      }}
      />
      <bottom.Screen name="Profile" component={ProfileScreen}
        options={{
          tabBarLabel: 'Cart',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person" size={size} color={color} />
          ),
        }}
      
      />
      <bottom.Screen name="More" component={MoreScreen} 
        options={{
          tabBarLabel: 'Cart',
          tabBarIcon: ({ color, size }) => (
            <Entypo name="unread" size={color} color={size} />
          ),
        }}
      
      />
    </bottom.Navigator>
  );
}
export default BottomNav