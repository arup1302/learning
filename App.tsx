import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import AppNavigator from './src/auth/AppNavigator';
import {MyContext} from './src/context/MyContext';

const App = () => {
  const [user, setUser] = useState(null);
  const [password, setPassword] = useState(null);
  return (
    <SafeAreaView style={{flex: 1}}>
      <MyContext.Provider value={{user, setUser, password, setPassword}}>
        <AppNavigator />
      </MyContext.Provider>
    </SafeAreaView>
  );
};

export default App;
