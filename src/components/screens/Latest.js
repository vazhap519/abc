import * as React from 'react';
import { View, SafeAreaView,StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { Badge,Text } from '@rneui/base';
import TopTabs from '../menus/TopTabNav';
function Latest(){
return(
    <SafeAreaView style={LatestStyle.LatestStyleContainer}>
       <View style={LatestStyle.TopBar}>
           <View style={{marginRight:10}}>
           <Feather name="message-circle" size={24} color="black" style={{transform:'rotate(280deg)'}}/>
           <Badge
    status="error" value={3}
    containerStyle={{ position: 'absolute', top: 6, right: 12 }}
  />
           </View>
           <View style={{marginRight:10}}>
       <Feather name="bell" size={24} color="black" />
       <Badge
    status="error" value={3}
    containerStyle={{ position: 'absolute', top: 6, right: 12 }}
  />
       </View>
       </View>
       <View >
           <Text style={{
               fontSize:35,
               fontWeight:'bold',
               color:'#ccc',
               textTransform:'capitalize',
               marginHorizontal:15,
               marginVertical:15

           }}>Categories</Text>
           <TopTabs />
       </View>
    </SafeAreaView>
)
}

const LatestStyle = StyleSheet.create({
    LatestStyleContainer:{
    elevation:15,
        height:60,
        backgroundColor:"#fff"
    },
    TopBar:{
flexDirection:'row',
justifyContent:'flex-end',
marginHorizontal:25,
marginVertical:15

    }
})
export default Latest