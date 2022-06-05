import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import AppTabNavigator from './AppTabNavigation';
import { NavigationContainer } from '@react-navigation/native';
import LandingNavigator from './LandingNavigation';
import Apparel from '../src/components/screens/Apparel';
import Shoes from '../src/components/screens/Shoes';
import Beauty from '../src/components/screens/Beauty';
import SeeAll from '../src/components/screens/SeeAll';
import LatestScreen from '../src/components/screens/Latest';
LatestScreen
const AppStackNavigation = createStackNavigator();

 export const AppStackNavigator = () => (
    <AppStackNavigation.Navigator screenOptions={{headerShown: false}}>
        <AppStackNavigation.Screen name='LatestScreen' component={LatestScreen}  />
        <AppStackNavigation.Screen name='Shoes' component={Shoes}/>
        <AppStackNavigation.Screen name='Beauty' component={Beauty}/>
        <AppStackNavigation.Screen name='SeeAll' component={SeeAll}/>
        <AppStackNavigation.Screen name='Apparel' component={Apparel}/>
    </AppStackNavigation.Navigator>
);


const AppNavigation = () => {
    return (
        <NavigationContainer>
            {2 > 1?
             <LandingNavigator/> :
             <>
             <AppStackNavigator/>
             </>
              }
        </NavigationContainer>
    )
};


export default AppNavigation;