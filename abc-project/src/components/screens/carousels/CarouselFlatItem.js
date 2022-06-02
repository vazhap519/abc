import * as React from 'react';
import { View, SafeAreaView,StyleSheet,FlatList,Image ,TouchableOpacity,Text} from 'react-native';
import {Dimensions} from 'react-native';
import FlatlistData from '../../data/Data';
const {width,height}=Dimensions.get('window');
const FlatCarouselItem=({item})=>{
    return(
      <View style={FlatlisCardStyle.CardItem}>
          <Image  source={{uri:item.urL}}  style={FlatlisCardStyle.CardItemImg}/>
          <Text>{item.title}</Text>
          <TouchableOpacity>
              <Text>{item.BtnText}</Text>
          </TouchableOpacity>
      </View>
    )
}
const FlatlisCardStyle=StyleSheet.create({
    CardItem:{
        height:150,
        width:width-20,
        flex:1,
        borderWidth:2,
        marginHorizontal:10,
        marginVertical:10,
        position:'relative'
    },
    CardItemImg:{
        position:'absolute',
        width:width,
        height:150,
        borderWidth:4,
        borderColor:'red',

        resizeMode:'contain',
            }
})
export default FlatCarouselItem