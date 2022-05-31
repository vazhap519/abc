import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet,  View,Image,Text} from 'react-native';
import { Input } from '@rneui/base';
import { Ionicons } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useState } from 'react';

function HomeScreen({navigation}) {
  const [User,setUser]=useState('admin@admin.com')
  const [Pass,setPass]=useState('admin123')

    return (
      <SafeAreaView style={{ flex: 1, alignItems: 'center' }}>
          <View style={HomeScreenStyle.LogoStyle}>
            <Image source={require('../images/logo_fashion.jpg')} style={HomeScreenStyle.LogoStyleImg} />
          </View>
          <View style={HomeScreenStyle.FormArea}>
            <Input 
            label="USERNAME / EMAIL"
            leftIcon={<Ionicons name="person" size={20} />}
            onChangeText={(User) => setUser(User)}
            />
              <Input 
            label="PASSWORD"
            secureTextEntry={true}
            leftIcon={<SimpleLineIcons name="lock-open" size={20} color="black" />}
            onChangeText={(value) => setPass(Pass)}
            />
          </View>
          <TouchableOpacity style={HomeScreenStyle.LoginBtn} onPress={()=>{
         
              navigation.navigate('Latest')
          
           
          }}>
            <Text style={{paddingLeft:50, fontSize:25, color:"#fff"}}>Log In</Text>
            <MaterialCommunityIcons name="arrow-right-bold-circle" size={35} color="#fff" style={{
              marginLeft:200,
             
               backgroundColor:"#FF6969",
               borderRadius:5
               }}/>
          </TouchableOpacity>
      </SafeAreaView>
    );
  }
export default HomeScreen
const HomeScreenStyle = StyleSheet.create({
  LogoStyle: {
   flexDirection:'row'
    },
  LogoStyleImg:{
    width:300,
    height:60,
    marginVertical:50,
    

  },
  FormArea:{
marginVertical:25,
marginHorizontal:20,
backgroundColor:'#FFF',

    borderRadius:25,
    elevation:10,
paddingHorizontal:45,
paddingVertical:15
  },
  LoginBtn:{
    backgroundColor:"#FF6969",
    paddingVertical:25,
    borderRadius:25,
    flexDirection:"row",
    color:"#fff",
    textAlignVertical:'middle'
  }
});
