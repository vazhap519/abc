import { StyleSheet, Text, View,TouchableOpacity} from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ScrollView } from 'react-native-gesture-handler'

export default function SearchFilter() {
  return (
    <ScrollView style={SearchFilterStyle.SearchFilterArea} 
    horizontal
    >
   <TouchableOpacity style={SearchFilterStyle.Touch} onPress={()=>{
       
   }}>
       <Text style={SearchFilterStyle.TouchText}>Best match</Text>
   </TouchableOpacity>

   <TouchableOpacity style={SearchFilterStyle.Touch}>
       <Text style={SearchFilterStyle.TouchText}>Top Reated</Text>
   </TouchableOpacity>

   <TouchableOpacity style={SearchFilterStyle.Touch}>
       <Text style={SearchFilterStyle.TouchText}>Price low-to-hight</Text>
   </TouchableOpacity>
   <TouchableOpacity style={SearchFilterStyle.Touch}>
       <Text style={SearchFilterStyle.TouchText}>Price </Text>
   </TouchableOpacity>
    </ScrollView>
   
  )
}


const SearchFilterStyle = StyleSheet.create({
    SearchFilterArea:{
        width:'100%',
    },
    Touch:{
        marginVertical:15,
    },
    TouchText:{
        color:'#FF6969',
        fontSize:16,
        paddingHorizontal:5,
        textTransform:'uppercase'
    }
})