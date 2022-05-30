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
            
            />
              <Input 
            label="PASSWORD"
            secureTextEntry={true}
            leftIcon={<SimpleLineIcons name="lock-open" size={20} color="black" />}
            />
          </View>
          <TouchableOpacity style={HomeScreenStyle.LoginBtn} onPress={(check)=>{
            if(setUser(User=='admin@admin.com' && setPass(Pass=='admin123') )){
              navigation.navigate('Latest')
            }else{
              <Text>Error</Text>
            }
           
          }}>
            <Text style={{paddingLeft:50, fontSize:35, color:"#fff"}}>Log In</Text>
            <MaterialCommunityIcons name="arrow-right-bold-circle" size={35} color="#fff" style={{
              marginLeft:200
              ,marginTop:10,
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
    marginVertical:50,
    },
  LogoStyleImg:{
    
    marginVertical:50,
    

  },
  FormArea:{
width:500,
marginHorizontal:50,
backgroundColor:'#FFF',
    marginVertical:25,
    borderRadius:25,
    elevation:10,
paddingHorizontal:45,
paddingVertical:15
  },
  LoginBtn:{
    backgroundColor:"#FF6969",
    paddingHorizontal:100,
    paddingVertical:25,
    borderRadius:25,
    alignContent:'space-between',
    flexDirection:"row",
    color:"#fff",
    textAlignVertical:'middle'
  }
});
