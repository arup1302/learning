import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import {colors} from '../themes/colors';
import {fonts} from '../themes/fonts';
import {verticalScale} from 'react-native-size-matters';

const ButtonComp = ({title, onPress}) => {
  return (
    <TouchableOpacity style={styles.signupContainer} onPress={onPress}>
      <Text style={styles.buttonText}> LOG IN</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  signupContainer: {
    backgroundColor: 'pink', // Change the background color as needed
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    width: '50%',
    alignSelf: 'center',
  },
  buttonText: {
    textAlign: 'center',
    color: colors.WHITE,
    fontFamily: fonts.POPPINS_BOLD,
    marginTop: verticalScale(6),
  },
});

{
}

export default ButtonComp;
