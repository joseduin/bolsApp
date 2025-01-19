import React, {ReactElement} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import HomeScreen from '../screen/home/home.screen';
import DetailScreen from '../screen/detail/detail.screen';
import Hiscoticalcreen from '../screen/historical/hiscotical.screen';

const Stack = createNativeStackNavigator();
const MainNavigation = (): ReactElement => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{headerShown: false, headerTransparent: true}}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Detail" component={DetailScreen} />
        <Stack.Screen name="Historical" component={Hiscoticalcreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigation;
