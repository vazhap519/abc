import * as React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import Apparel from '../screens/Apparel'
import Shoes from '../screens/Shoes';
import Beauty from '../screens/Beauty';
import SeeAll from '../screens/SeeAll';
import { View ,StyleSheet,Text} from 'react-native-web';
const Tab = createMaterialTopTabNavigator();
function TopTabs() {
  return (
    <Tab.Navigator screenOptions={{
      tabBarActiveTintColor: '#ccc',
      tabBarLabelStyle: { fontSize: 20,marginTop:25,marginLeft:25 },
      tabBarStyle: { backgroundColor: '#fff' },
    }} >
      <Tab.Screen name="apparel" component={Apparel} options={{
     tabBarLabel:'apparel',
     labelStyle: {
      fontSize: 50,
      color:'red',
      
    },
        tabBarIcon:()=>{
          return(
            <View
            style={{
              width:50,
              height:50,
                 backgroundColor:'orange',
                 borderRadius:50,
               alignItems:'center',
           paddingTop:10,
           paddingBottom:10,

           
               }}

            >
              <FontAwesome5 name="tshirt" size={25} color="grey"  />
              </View>
          )
          
        }
      }} />
        <Tab.Screen name="Beauty" component={Beauty} 
      options={{
        tabBarIcon:()=>{
          return(
            <View 
            
            style={{
              width:50,
              height:50,
                 backgroundColor:'skyblue',
                 borderRadius:50,
               alignItems:'center',
           paddingTop:10,
           paddingBottom:10,

           
               }}

            
            >
              <MaterialCommunityIcons name="lipstick" size={25} color="grey" />
              </View>
          )
          
        }
      }}
      />
      <Tab.Screen name="Shoes" component={Shoes} 
      options={{
        tabBarIcon:()=>{
          return(
            <View   style={{
              width:50,
              height:50,
                 backgroundColor:'green',
                 borderRadius:50,
               alignItems:'center',
           paddingTop:10,
           paddingBottom:10,
           
               }}
>
              <MaterialCommunityIcons name="shoe-heel" size={30} color="grey" />
              </View>
          )
          
        }
      }}
      />
    
      <Tab.Screen name="SeeAll" component={SeeAll} 
      options={{
        tabBarIcon:()=>{
          return(
            <View style={{
              width:50,
              height:50,
                 backgroundColor:'white',
                 borderRadius:50,
               alignItems:'center',
           paddingTop:10,
           paddingBottom:10,
              
              
            }}> 
              <MaterialIcons name="keyboard-arrow-right" size={25} color="#FF6969" />
            </View>
          )
          
        }
      }}
      
      />
    </Tab.Navigator>
  );
}
export default TopTabs