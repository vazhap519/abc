import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import BottomTabsNav from './BottomTabsNav';
import TopTabs from './TopTabNav';
import 'react-native-gesture-handler';



const RootStack = createStackNavigator(
    {
        Bottom: BottomTabsNav,
      Top: TopTabs
    }
)
export default function Navs() {
  return (
    <View>
    <RootStack/>
    </View>
  )
}

