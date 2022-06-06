import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../src/components/screens/HomeScreen';
import AppTabNavigator from './AppTabNavigation';
import AppStackNavigator from './AppTabNavigation'
const LandingStack = createStackNavigator();

const LandingNavigator = () => (
    <LandingStack.Navigator screenOptions={{headerShown: false}}>
        <LandingStack.Screen name='home' component={HomeScreen}/>
        <LandingStack.Screen name="LatestScreen" component={AppTabNavigator} />
        <LandingStack.Screen name="ap" component={AppStackNavigator} />
   
    </LandingStack.Navigator>
);

export default LandingNavigator;

