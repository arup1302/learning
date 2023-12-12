import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, { useContext } from 'react';
import { MyContext } from '../context/MyContext';

const Login = ({navigation, route}) => {
//   const {email, password} = route.params;
const { userData } = useContext(MyContext);
console.log(userData,'userdata...........')
  const onLogin = () => {
    navigation.navigate('Register');
  };
  return (
    
    <View style={styles.container}>
     <Text>Email: {userData?.email}</Text>
      <Text>Password: {userData?.password}</Text>
      <View style={styles.loginBtn}>
      <TouchableOpacity onPress={onLogin}>
        <Text style={styles.textStyle}>Register</Text>
      </TouchableOpacity>
    </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'yellow',
  },
  loginBtn: {
    alignSelf: 'center',
    
    backgroundColor: 'black',
    padding: '4%',
    width: '50%',
    // marginTop: '5%',
    borderRadius: 10,
  },
  textStyle: {
    
    alignSelf: 'center',
    color: 'white',

  
  },
});