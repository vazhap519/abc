import * as React from 'react';
import { View, SafeAreaView,StyleSheet,FlatList,Image ,TouchableOpacity,Text} from 'react-native';
import {Dimensions} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
const {width,height}=Dimensions.get('window');
import Data2 from '../../../data/data2';
import { ScrollView } from 'react-native-web';
const NewProductCarousel=(data) =>{
  return(
<ScrollView>
  <View>
    <Image source={{}}></Image>
  </View>
</ScrollView>
  )
}
export default  NewProductCarousel
const styles = StyleSheet.create({})