import * as React from 'react';
import { View, SafeAreaView,StyleSheet,FlatList,Image ,TouchableOpacity,Text} from 'react-native';
import {Dimensions} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
const {width,height}=Dimensions.get('window');
import Data2 from '../../../data/data2';
const NewProductCarousel=(data2) =>{
  
  return (

<FlatList data={data2}
keyExtractor={(item,index)=>'key' + index}
horizontal={true}
>
 
</FlatList>
  )
}
export default  NewProductCarousel
const styles = StyleSheet.create({})