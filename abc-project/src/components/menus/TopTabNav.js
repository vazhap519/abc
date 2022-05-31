import * as React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Apparel from '../screens/Apparel'
import Shoes from '../screens/Shoes';
import Beauty from '../screens/Beauty';
import SeeAll from '../screens/SeeAll';
const Tab = createMaterialTopTabNavigator();
function TopTabs() {
  return (
    <Tab.Navigator >
      <Tab.Screen name="Apparel" component={Apparel} />
      <Tab.Screen name="Shoes" component={Shoes} />
      <Tab.Screen name="Beauty" component={Beauty} />
      <Tab.Screen name="SeeAll" component={SeeAll} />
    </Tab.Navigator>
  );
}
export default TopTabs