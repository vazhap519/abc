import * as React from 'react';
import { View, Text, SafeAreaView ,StyleSheet, FlatList, ScrollView} from 'react-native';
import { Input } from '@rneui/base';
import { EvilIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import SearchFilter from './searchFilter';

import SearchFlat from './SearchFlat';
function SearchScreen() {
  return (
        <SafeAreaView style={SearchStyle.SearchContainer}>
            <View style={SearchStyle.SearchBar}>
              <View style={SearchStyle.SearchBarArea}>
              <EvilIcons name="search" size={24} color="black" style={SearchStyle.SearchBarIco}/>
                <Input style={SearchStyle.SearchBarInput}></Input>
                <AntDesign name="filter" size={24} color="black" style={{left:300,marginVertical:8,position:'absolute'}}/>
              
              </View>
            </View>
            <ScrollView style={SearchStyle.SearchFilterView}>
            <SearchFilter />
         </ScrollView>
<View>
<SearchFlat />
</View>
        </SafeAreaView>
  );
}

const SearchStyle=StyleSheet.create({
  SearchContainer:{
    backgroundColor:"#fff",
    height:150,
    width:"100%",
  },
  SearchBar:{

    paddingHorizontal:5,
    paddingVertical:5,
   
   marginHorizontal:60,
   marginVertical:15,
   width:"100%",
   position:'relative'
    
  },
  SearchBarArea:{
flexDirection:'row',
justifyContent:'space-between',
width:300
  },
  SearchBarIco:{
position:'absolute',

    left:15,
    top:5
  },

  SearchBarInput:{
    borderColor:'ccc',
    borderWidth:1,
    borderRadius:15,
    elevation:30,
width:150
  },
  SearchFilterView:{
    
   width:'100%',
   height:50,
   marginLeft:15
  },
  FilteredItems:{
    borderColor:'greeen',
    borderWidth:2,
    height:100,
    width:'100%',
    marginHorizontal:20,
    marginVertical:20
  }

}

)

export default SearchScreen;