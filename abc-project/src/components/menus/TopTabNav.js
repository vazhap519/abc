import * as React from 'react';
import { View ,StyleSheet,Text, SafeAreaView} from 'react-native-web';
import Apparel from '../screens/Apparel'
import Shoes from '../screens/Shoes';
import Beauty from '../screens/Beauty';
import SeeAll from '../screens/SeeAll';
import LatestScreen from '../screens/Latest';
import { createStackNavigator } from '@react-navigation/stack';

const Tops=createStackNavigator()

const TopsNav=()=>{
  <Tops.Navigator>
     <Tops.Screen name='apparel' component={Apparel}/>
  <Tops.Screen name='Beauty' component={Beauty}/>
  <Tops.Screen name='Shoes' component={Shoes}/>
  <Tops.Screen name='seeAll' component={SeeAll}/>
  </Tops.Navigator>
 
}

export default TopsNav




