import React, {createContext, useContext, useState} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {MyContext} from '../context/MyContext';
// import { MyContext } from '../context/MyContext';

const Home = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const onLinkClick = () => {
    navigation.navigate('Login');
  };
  // const {setUser} = useContext(MyContext);

  return (
    <MyContext.Consumer>
      {cons => (
        <View style={styles.container}>
          <View>
            <Text style={styles.label}>Email:</Text>
            <View>
              <TextInput
                style={styles.input}
                placeholder="Email"
                onChangeText={val => {
                  setEmail(val.toLowerCase());
                  cons.setUser(val);
                }}
                // onBlur={validateEmail}
                value={email}
              />
            </View>
          </View>

          <View>
            <Text style={styles.label}>Password:</Text>
            <View style={styles.passwordInputContainer}>
              <TextInput
                style={styles.passwordInput}
                placeholder="Password"
                secureTextEntry={!isPasswordVisible}
                onChangeText={val => {
                  setPassword(val);
                  cons.setPassword(val);
                }}
                value={password}
              />

              <TouchableOpacity
                onPress={togglePasswordVisibility}
                style={styles.eyeIcon}>
                <Icon
                  name={isPasswordVisible ? 'eye' : 'eye-slash'}
                  size={20}
                  color="black"
                />
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.loginBtn}>
            <TouchableOpacity onPress={onLinkClick}>
              <Text style={styles.textStyle}>Login</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </MyContext.Consumer>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    paddingHorizontal: '3%',
    backgroundColor: 'yellow',
    justifyContent: 'center',
  },
  input: {
    height: 55,
    marginTop: 0,
    width: '90%',
    borderWidth: 1,
    padding: '2%',
    marginHorizontal: '3%',
  },
  passwordInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '90%',
    borderWidth: 1,
    height: 55,
    marginTop: 0,
    padding: '1%',
    marginHorizontal: '3%',
  },
  passwordInput: {
    flex: 1,
  },
  eyeIcon: {
    padding: 5,
  },
  loginBtn: {
    alignSelf: 'center',
    justifyContent: 'center',
    alignContent: 'center',
    backgroundColor: 'blue',
    padding: '4%',
    width: '50%',
    marginTop: '5%',
    borderRadius: 10,
  },
  textStyle: {
    alignSelf: 'center',
    color: 'white',
  },
  errorText: {
    marginTop: '1%',
    color: 'red',
    marginHorizontal: '3%',
  },
  label: {
    fontSize: 16,
    marginTop: '5%',
    marginHorizontal: '3%',
  },
});
