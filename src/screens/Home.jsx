import React, {useContext, useState} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { MyContext } from '../context/MyContext';


const Home = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  
  const { setUserData } = useContext(MyContext);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };
//   const validateEmail = () => {
//     // Basic email validation
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     setEmailError(emailRegex.test(email) ? '' : 'Invalid email address');
//     // setEmailError(email.length >= 9 ? '' : 'Invalid email address');
//     return emailError;
//   };

//   const validatePassword = () => {
//     // Password must be at least 6 characters and contain at least one uppercase letter, one lowercase letter, one digit, and one special character
//     const passRegex =
//       /^(?=.*[A-Z])(?=.*[!@#$%^&*(),.?":{}|<>0-9])(?=.*[0-9]).{8,}$/;

//     setPasswordError(
//       passRegex.test(password)
//         ? ''
//         : 'Password must be at least 6 characters and include at least one uppercase letter, one lowercase letter, one digit, and one special character',
//     );
//   };
  const onLinkClick = () => {
console.log(email,'emias')
    // const userData = { email, password }; //
    setUserData( {email, password });
    navigation.navigate('Login');

    // validateEmail();
    // validatePassword();
    // if (!emailError && !passwordError) {
    //   navigation.navigate('Login', {email, password});
    //   setEmail('');
    //   setPassword('');
    //   setEmailError('');
    //   setPasswordError('');
    // }
  };

  return (



    <View style={styles.container}>
      <View >
        <Text style={styles.label}>Email:</Text>
        <View>
          <TextInput
            style={styles.input}
            placeholder="Email"
            onChangeText={val => {
              setEmail(val.toLowerCase());
              setEmailError('');
            }}
            // onBlur={validateEmail}
            value={email}
          />
        </View>
      </View>
      {/* {emailError ? (<Text style={styles.errorText}>{emailError}</Text> ): null} */}
      <View >
        <Text style={styles.label}>Password:</Text>
        <View style={styles.passwordInputContainer}>
          <TextInput
            style={styles.passwordInput}
            placeholder="Password"
            secureTextEntry={!isPasswordVisible}
            onChangeText={val => {
              setPassword(val);
              setPasswordError('');
            }}
            // onBlur={validatePassword}
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

      {/* {passwordError ? (
        <Text style={styles.errorText}>{passwordError}</Text>
      ) : null} */}
      <View style={styles.loginBtn}>
        <TouchableOpacity onPress={onLinkClick}>
          <Text style={styles.textStyle}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>

  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    paddingHorizontal: '3%',
    backgroundColor: 'yellow',
    justifyContent:"center",
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
    marginTop: "1%",
    color: 'red',
    marginHorizontal: '3%',
  },
  label: {
    fontSize: 16,
    marginTop: '5%',
    marginHorizontal: '3%',
  },
});
