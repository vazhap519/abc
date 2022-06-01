import { ListItem } from '@rneui/base';
import * as React from 'react';
import { View, SafeAreaView,StyleSheet,FlatList,Image ,TouchableOpacity, Dimensions} from 'react-native';
import data from '../data/Data'
import FlatCarouselItem from './CarouselFlatItem';
const {width,height}=Dimensions.get('window');

const CarouselF=({data})=>{
    if(data && data.length){
        return(
            <View>
                <FlatList data={data}
                keyExtractor={(item,index)=>'key' + index}
                horizontal
                scrollEnabled
                renderItem={({item})=>{
                    return <FlatCarouselItem item={item}/>
                }}
                />
            </View>
        )
    }
}
export default CarouselF