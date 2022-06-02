import { useState,useEfect } from 'react';
import * as React from 'react';
import { View, SafeAreaView,StyleSheet,FlatList,Animated,Image ,TouchableOpacity, Dimensions} from 'react-native';
import FlatlistData from '../../data/Data';
import FlatCarouselItem from './CarouselFlatItem';
import { ScrollView } from 'react-native-web';
import { TabItem } from '@rneui/base/dist/Tab/Tab.Item';


const CarouselF=({data})=>{
console.log(data.url)
    return(
    
            <FlatList data={data}
            keyExtractor={(item,index)=>'key' + index}
            horizontal={true}
        
            renderItem={({item})=>{
                return(
                    <FlatCarouselItem item={item}/>
                )
            }
        }
            ></FlatList>
    
    )

}
export default CarouselF