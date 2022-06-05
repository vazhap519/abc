import  React from 'react';
import { View, SafeAreaView,StyleSheet ,ScrollView,Image} from 'react-native';
const TopCategory = ({navigation}) =>{
    return(
<View >
<Text style={{
    fontSize:35,
    fontWeight:'bold',
    color:'#ccc',
    textTransform:'capitalize',
    marginHorizontal:15,
    marginVertical:15

}}>Categories</Text>



 <ScrollView 
 horizontal
 style={LatestStyle.TopCats}
 >


<TouchableOpacity style={LatestStyle.Apparel}
onPress={() => {
 navigation.navigate('Apparel');
}}
>
<FontAwesome5 name="tshirt" size={30} color="grey"  style={LatestStyle.ApparelIco} />
<Text style={LatestStyle.TexTops}> Apparel</Text>
</TouchableOpacity>




<TouchableOpacity style={LatestStyle.Beauty}>
<MaterialCommunityIcons name="lipstick" size={30} color="grey" style={LatestStyle.BeautyIco} />
<Text style={LatestStyle.TexTops}> Beauty</Text>
</TouchableOpacity>

<TouchableOpacity style={LatestStyle.Shoes}>
<MaterialCommunityIcons name="shoe-heel" size={30} color="grey" style={LatestStyle.ShoesIco}/>
<Text style={LatestStyle.TexTops}> shoes</Text>
</TouchableOpacity>

<TouchableOpacity style={LatestStyle.SeeAll}>
<MaterialIcons name="keyboard-arrow-right" size={30} color="#FF6969" style={LatestStyle.SeeAllIco} />
<Text style={LatestStyle.TexTops}> See all</Text>
</TouchableOpacity>
</ScrollView>
      </View>
    )
}

export default TopCategory