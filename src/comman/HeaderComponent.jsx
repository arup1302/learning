import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {
  BellIcon,
  BagIcon,
  HeartIcon,
  DowmnIcon,
  SearchIcon,
  BackIcon,
} from '../themes/icons';
import {
  moderateVerticalScale,
  scale,
  verticalScale,
} from 'react-native-size-matters';

const HeaderComponent = ({
  onLogoPress,
  onBellPress,
  onHeartPress,
  searchIcon,
  onBagPress,
  title,
  logoColor,
}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onLogoPress} style={styles.logoContainer}>
        <BackIcon color={'black'} />
        <Text style={styles.iconlogo}> {title}</Text>
      </TouchableOpacity>

      <View style={styles.iconsContainer}>
        <TouchableOpacity onPress={onHeartPress} style={styles.iconButton}>
          <HeartIcon color={'black'} />
        </TouchableOpacity>
        <TouchableOpacity onPress={onBagPress} style={styles.iconButton}>
          <BagIcon color={'black'} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HeaderComponent;

const styles = StyleSheet.create({
  container: {
    marginTop: verticalScale(10),
    paddingHorizontal: '3%',
    paddingVertical: '2%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 0.2,
  },
  logoContainer: {
    flexDirection: 'row',
  },
  logo: {
    height: scale(40),
    width: scale(40),
  },
  iconsContainer: {
    flexDirection: 'row',
    gap: scale(20),
  },
  iconButton: {},
  iconlogo: {
    fontSize: 16,
    fontWeight: '900',
    color: 'black',
  },
});
