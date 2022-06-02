import * as React from 'react';
import { View, SafeAreaView,StyleSheet ,ScrollView} from 'react-native';

import { Feather } from '@expo/vector-icons';
import { Badge,Text } from '@rneui/base';
import TopTabs from '../menus/TopTabNav';
import CarouselF from './carousels/CarouselFlat';
import FlatlistData from '../data/Data';
function Latest(){
return(
    <SafeAreaView style={LatestStyle.LatestStyleContainer}>
        {/* topBarStye */}
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
{/* CategoryTyle */}
       <View >
           <Text style={{
               fontSize:35,
               fontWeight:'bold',
               color:'#ccc',
               textTransform:'capitalize',
               marginHorizontal:15,
               marginVertical:15

           }}>Categories</Text>
           <TopTabs style={LatestStyle.TabIco} />
       </View>

{/* LatestProducts */}
<View style={LatestStyle.HeaderLatest}>
    <Text style={LatestStyle.HeaderLatestText}>Latest</Text>
</View>

<ScrollView>
    <CarouselF  data={FlatlistData}/>
</ScrollView>

    </SafeAreaView>
)
}

const LatestStyle = StyleSheet.create({
    LatestStyleContainer:{
    elevation:15,
        height:'auto',
        backgroundColor:'#f1f1f1'
        
    },
    TopBar:{
flexDirection:'row',
justifyContent:'flex-end',
marginHorizontal:15,
marginVertical:15

    },

    TabIco:{
        backgroundColor:'yellow'
    },


    HeaderLatest:{
color:'#ccc',
fontSize:35,
paddingHorizontal:15,
paddingVertical:15,
marginTop:20
    },
    HeaderLatestText:{
        color:'#ccc',
fontSize:35,
fontWeight:'bold'
    }


})
export default Latest