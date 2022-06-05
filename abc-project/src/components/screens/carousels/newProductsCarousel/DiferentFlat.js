import { StyleSheet, Text, View,FlatList,Image, ScrollView } from 'react-native'
import React from 'react'
import Data2 from '../../../data/data2'
export default function DiferentFlat() {
  return(


<ScrollView style={DiferebtStyle.scrollDiferent}>


<FlatList data={Data2}
horizontal
keyExtractor={(item,index)=>index.toString()}
renderItem={({item})=>(
  <View   style={DiferebtStyle.scrollDiferentItems}>

  <Image source={{uri: item.url}} style={DiferebtStyle.scrollDiferentImg} />
  <Text style={DiferebtStyle.scrollDiferentTitle}>
    {item.title}
  </Text>
  <Text style={DiferebtStyle.scrollDiferentPrice}>
    {item.Price}
  </Text>
  </View>
 
)}
/>
</ScrollView>
)

}

const DiferebtStyle = StyleSheet.create({

  scrollDiferent:{
width:"100%",
height:'auto'
  },
  scrollDiferentItems:{
    height:'auto',
    marginHorizontal:15,
    marginVertical:15,
    backgroundColor:'#fff',
  borderRadius:15
  },

  scrollDiferentImg:{
    width:50,
    height:50,
    marginHorizontal:'auto',
    marginVertical:25

  },
  scrollDiferentTitle:{
    fontSize:16,
    color:'#ccc',
    paddingHorizontal:15,
    paddingVertical:5
  },
  scrollDiferentPrice:{
    paddingHorizontal:15,
    paddingVertical:5,
    color:'#ccc',
  }

})