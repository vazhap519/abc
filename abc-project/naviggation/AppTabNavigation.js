import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SearchScreen from '../src/components/screens/SearchScreen';
import CartScreen from '../src/components/screens/CartScreen';
import ProfileScreen from '../src/components/screens/ProfileScreen';
import MoreScreen from '../src/components/screens/MoreScreen';
import LatestScreen from '../src/components/screens/Latest';
import { AppStackNavigator } from './Navigation';

const TabNavigation = createBottomTabNavigator();


const AppTabNavigator = () => (
    <TabNavigation.Navigator screenOptions={{headerShown: false}}>
        <TabNavigation.Screen name='HomeTab' component={AppStackNavigator}  />
        <TabNavigation.Screen name='search' component={SearchScreen} />
        <TabNavigation.Screen name='cart' component={CartScreen} />
        <TabNavigation.Screen name='Profile' component={ProfileScreen}  />
        <TabNavigation.Screen  name='more' component={MoreScreen}/>
    </TabNavigation.Navigator>
);

export default AppTabNavigator;