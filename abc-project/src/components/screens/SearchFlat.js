import { StyleSheet, Text, View ,FlatList,ScrollView} from 'react-native'
import React from 'react'
import Data3 from '../data/Data3'

export default function SearchFlat() {
  return (
  <ScrollView>
<FlatList data={Data3}
horizontal
keyExtractor={(itemF,indexId)=>indexId}
renderItem={({itemF})=>(
  <View>

  {/* <Image source={{uri: itemF.url}}  /> */}
  <Text>
    {itemF.title}
  </Text>
  <Text>
   
    {itemF.Price}
  </Text>
  </View>
 
)}
/>
</ScrollView>
  )
}

const styles = StyleSheet.create({})