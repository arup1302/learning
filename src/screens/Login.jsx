import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useContext} from 'react';
import {MyContext} from '../context/MyContext';
// import {MyContext} from '../../App';

const Login = ({navigation, route}) => {
  const onLogin = () => {
    navigation.navigate('Register');
  };
  //   const {user} = useContext(MyContext);

  return (
    <MyContext.Consumer>
      {value => (
        <>
          <Text style={{fontSize: 24, backgroundColor: 'green', color: '#FFF'}}>
            {value.user}
          </Text>
          <Text style={{fontSize: 24, backgroundColor: 'green', color: '#FFF'}}>
            {value.password}
          </Text>
        </>
      )}
    </MyContext.Consumer>
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
