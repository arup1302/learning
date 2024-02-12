import {StyleSheet} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../screens/Home';
import Register from '../screens/Register';
import Login from '../screens/Login';
import SplashScreen from '../screens/SplashScreen';
import BottamTabNavigator from './BottamTabNavigator';
import Categories from '../screens/Categories';

const Stack = createStackNavigator();
const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{
            headerBackTitleVisible: false,
            headerShown: false,
          }}
          name="SplashScreen"
          component={SplashScreen}
        />
        <Stack.Screen
          options={{
            headerBackTitleVisible: false,
            headerShown: false,
          }}
          name="BottamTabNavigator"
          component={BottamTabNavigator}
        />
        <Stack.Screen
          options={{
            headerBackTitleVisible: false,
            headerShown: false,
          }}
          name="Categories"
          component={Categories}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;

const styles = StyleSheet.create({
  conatainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
