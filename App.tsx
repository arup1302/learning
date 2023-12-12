import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import AppNavigator from './src/auth/AppNavigator';
import {UserProvider} from './src/context/MyContext';

const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <UserProvider>
        <AppNavigator />
      </UserProvider>
    </SafeAreaView>
  );
};

export default App;
