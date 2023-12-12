import {StyleSheet} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../screens/Home';
import Register from '../screens/Register';
import Login from '../screens/Login';

const Stack = createStackNavigator();
const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{
            headerBackTitleVisible: false,
            headerStyle: {
              backgroundColor: 'yellow',
            },

            headerTitleStyle: {color: 'black'},
          }}
          name="Home"
          component={Home}
        />
        <Stack.Screen
          // options={{title: 'loginScreen'}}
          name="Login"
          component={Login}
          options={{
            headerBackTitleVisible: false,
            title: 'loginScreen',
            headerStyle: {
              backgroundColor: 'yellow',
            },
            headerTintColor: 'black',
          }}
        />
        <Stack.Screen
          name="Register"
          component={Register}
          options={{headerShown: false}}
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
