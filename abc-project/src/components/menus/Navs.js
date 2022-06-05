import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import BottomTabsNav from './BottomNav';
import TopTabs from './TopTabNav';
import 'react-native-gesture-handler';
import HomeScreen from '../screens/HomeScreen';
import TopsNav from './TopTabNav';
import BottomNav from './BottomNav';
const StackRoute = createStackNavigator();


const RouteNav = () => {
    return (
        <StackRoute initialRouteName='HomeScreen'>
            <StackRoute.Screen name='TopTabs' component={TopTabs} />
            <StackRoute.Screen name='BottomTabsNav' component={BottomNav} />
        </StackRoute>
    )

}
export default RouteNav