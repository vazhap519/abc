import * as React from 'react';
import { View, SafeAreaView,StyleSheet,FlatList,Image ,TouchableOpacity,Text} from 'react-native';
import {Dimensions} from 'react-native';
import FlatlistData from '../../data/Data';
import { MaterialIcons } from '@expo/vector-icons';
const {width,height}=Dimensions.get('window');
const FlatCarouselItem=({item})=>{
    console.log(item.url)
    return(
      <View style={FlatlisCardStyle.CardItem}>
          <Image  source={{uri:item.url}}  style={FlatlisCardStyle.CardItemImg}/>
          
          <Text style={FlatlisCardStyle.CardItemTitle}>{item.title}</Text>

          <TouchableOpacity style={FlatlisCardStyle.CardItemTouCh} >
              <Text style={FlatlisCardStyle.CardItemTouChText}>{item.BtnText}</Text>
              <MaterialIcons name="keyboard-arrow-right" size={25} color="#FF6969" style={FlatlisCardStyle.CardItemTouChIco} />
          </TouchableOpacity>
      </View>
    )
}
const FlatlisCardStyle=StyleSheet.create({
    CardItem:{
        height:150,
        width:width-20,
        flex:1,
      
        marginHorizontal:10,
        marginVertical:10,
        position:'relative'
    },
    CardItemImg:{
        position:'absolute',
        width:width-20,
        height:150,
       borderRadius:15,
        resizeMode:'cover',
        zIndex:0
            },
            CardItemTitle:{
                position:'absolute',
                zIndex:10,
                color:'#ccc',
                fontSize:16,
                left:25,
                top:5,
                width:120,
                textTransform:'capitalize'
            },
            CardItemTouCh:{
                position:'relative',
                zIndex:2,
                width:200,
                height:'auto',
                borderRadius:15,
               marginLeft:25,
                backgroundColor:'#fff',
                top:90,
        justifyContent:'space-between',
        flexDirection:'row'
                          },
                          CardItemTouChText:{
                            
                              width:150,
                              fontSize:18,
                              paddingVertical:10,
                              textTransform:'uppercase',
                              paddingHorizontal:10
                          },
                          CardItemTouChIco:{
                              marginTop:10
                          }


})
export default FlatCarouselItem