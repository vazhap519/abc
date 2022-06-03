import * as React from 'react';
import { View, SafeAreaView,StyleSheet ,ScrollView,Image} from 'react-native';
import { Feather } from '@expo/vector-icons';
import { Badge,Text } from '@rneui/base';
import CarouselF from './carousels/CarouselFlat';
import FlatlistData from '../data/Data';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import BottomNav from '../menus/BottomNav';
import Apparel from './Apparel';

import Data2 from '../data/data2';


import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

 
    
   

const  LatestScreen=({navigation})=>{
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



            <ScrollView 
            horizontal
            style={LatestStyle.TopCats}
            >

          
           <TouchableOpacity style={LatestStyle.Apparel}
           onPress={() => {
            navigation.navigate('Apparel');
          }}
           >
           <FontAwesome5 name="tshirt" size={30} color="grey"  style={LatestStyle.ApparelIco} />
           <Text style={LatestStyle.TexTops}> Apparel</Text>
           </TouchableOpacity>




           <TouchableOpacity style={LatestStyle.Beauty}>
           <MaterialCommunityIcons name="lipstick" size={30} color="grey" style={LatestStyle.BeautyIco} />
           <Text style={LatestStyle.TexTops}> Beauty</Text>
           </TouchableOpacity>

           <TouchableOpacity style={LatestStyle.Shoes}>
           <MaterialCommunityIcons name="shoe-heel" size={30} color="grey" style={LatestStyle.ShoesIco}/>
           <Text style={LatestStyle.TexTops}> shoes</Text>
           </TouchableOpacity>

           <TouchableOpacity style={LatestStyle.SeeAll}>
           <MaterialIcons name="keyboard-arrow-right" size={30} color="#FF6969" style={LatestStyle.SeeAllIco} />
           <Text style={LatestStyle.TexTops}> See all</Text>
           </TouchableOpacity>
           </ScrollView>
                 </View>

{/* LatestProducts */}
<View style={LatestStyle.HeaderLatest}>
    <Text style={LatestStyle.HeaderLatestText}>Latest</Text>
</View>
<ScrollView>
    <CarouselF  data={FlatlistData}/>
</ScrollView>



 {Data2.map((myData)=>{
     return(
        <ScrollView>
            <View>
            <Image key={myData.id.toString()} source={myData.url}/>
   <Text  key={myData.id.toString()}>{myData.title}</Text>
            </View>
     
</ScrollView>
      
         
     )
 })}



<View>

</View>

<BottomNav />
    </SafeAreaView>
   
)

}
export default LatestScreen
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
    },


    TopCats:{
         flex:1,
        alignContent:'space-between',
    },


    Apparel:{
        width:60,
        height:90   ,
        marginHorizontal:10,
        marginVertical:10

    },
    ApparelIco:{
        backgroundColor:'orange',
        paddingHorizontal:15,
        paddingVertical:15,
        borderRadius:50
    },

    Beauty:{
        width:60,
        height:90,
        marginHorizontal:10,
        marginVertical:10
    },
    BeautyIco:{
        backgroundColor:'skyblue',
        paddingHorizontal:15,
        paddingVertical:15,
        borderRadius:50
    },

    Shoes:{
        width:60,
        height:90,
        marginHorizontal:10,
        marginVertical:10
    },
    ShoesIco:{
        backgroundColor:'green',
        paddingHorizontal:15,
        paddingVertical:15,
        borderRadius:50
    },
    SeeAll:{
        width:60,
        height:90 ,
        marginHorizontal:10,
        marginVertical:10
    },

    SeeAllIco:{
        backgroundColor:'white',
        paddingHorizontal:15,
        paddingVertical:15,
        borderRadius:50
    },
    TexTops:{
      
        
        fontSize:16,
        textAlign:'center',
        textTransform:'Capitalize'
    }

})
