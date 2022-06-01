import * as React from 'react';
import { View, SafeAreaView,StyleSheet,FlatList,Image ,TouchableOpacity} from 'react-native';


const FlatCarouselItem=({item})=>{
    return(
        <View>
                <Image source={{uri:item.uri}}/>
                <Text>{item.title}</Text>
                <TouchableOpacity>
                <Text>
                    {item.BtnText}
                    </Text>
                    </TouchableOpacity>
        </View>
    )
}
export default FlatCarouselItem