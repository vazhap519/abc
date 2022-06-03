import * as React from 'react';
import { View, SafeAreaView,StyleSheet,FlatList,Image ,TouchableOpacity,Text} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
const {width,height}=Dimensions.get('window');
 const NewProductCarouselItems=(item)=> {
    console.log(item)
  return (
    <ScrollView>
      <Image  source={{uri:item.url}}  style={FlatlisCardStyle.CardItemImg}/>
     <Text>{item.title}</Text>
     <Text>test</Text>
    </ScrollView>
  )
}
export default  NewProductCarouselItems
const styles = StyleSheet.create({})