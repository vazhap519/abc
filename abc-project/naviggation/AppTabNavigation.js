import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SearchScreen from '../src/components/screens/SearchScreen';
import CartScreen from '../src/components/screens/CartScreen';
import ProfileScreen from '../src/components/screens/ProfileScreen';
import MoreScreen from '../src/components/screens/MoreScreen';
import LatestScreen from '../src/components/screens/Latest';
import { AppStackNavigator } from './Navigation';
import { AntDesign } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
const TabNavigation = createBottomTabNavigator();


const AppTabNavigator = () => (
    <TabNavigation.Navigator screenOptions={{headerShown: false}}>
        <TabNavigation.Screen name='HomeTab' component={AppStackNavigator} 
            options={{
                tabBarLabel: 'Home',
                tabBarIcon: ({ color, size }) => (
                  <AntDesign name="home" color={color} size={size} />
                ),
              }}
        
        
        
        />
        <TabNavigation.Screen name='search' component={SearchScreen} 
          options={{
            tabBarLabel: 'Search',
            tabBarIcon: ({ color, size }) => (
              <FontAwesome name="search" size={size} color={color} />
            ),
          }}
        
        />
        <TabNavigation.Screen name='cart' component={CartScreen}
         options={{
            tabBarLabel: 'Cart',
            tabBarIcon: ({ color, size }) => (
              <AntDesign name="shoppingcart" size={size} color={color} />
            ),
          }}
        />
        <TabNavigation.Screen name='Profile' component={ProfileScreen}
           options={{
            tabBarLabel: 'Cart',
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="person" size={size} color={color} />
            ),
          }}
        />
        <TabNavigation.Screen  name='more' component={MoreScreen}
        
        options={{
            tabBarLabel: 'Cart',
            tabBarIcon: ({ color, size }) => (
              <Entypo name="unread" size={color} color={size} />
            ),
          }}
        />
    </TabNavigation.Navigator>
);

export default AppTabNavigator;