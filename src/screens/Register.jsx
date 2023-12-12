import {Alert, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

const Register = ({navigation}) => {
  const onGoback = () => {
    navigation.goBack();
  };
  const onLinkClick = () => {
    Alert.alert('you clicked on register');
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onLinkClick}>
        <Text style={styles.textStyle}>register</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={onGoback}>
        <Text style={styles.textStyle}>goBack</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Register;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'yellow',
  },
  textStyle: {
    backgroundColor: 'black',
    marginTop: '2%',
    padding: '2%',
    color: 'white',
  },
});
