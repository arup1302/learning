import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {
  BellIcon,
  BagIcon,
  HeartIcon,
  DowmnIcon,
  SearchIcon,
} from '../themes/icons';
import {
  moderateVerticalScale,
  scale,
  verticalScale,
} from 'react-native-size-matters';

const Header = ({
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
        <Text style={styles.iconlogo}> {title}</Text>
        <DowmnIcon color={'#EA5455'}></DowmnIcon>
      </TouchableOpacity>

      <View style={styles.iconsContainer}>
        <TouchableOpacity onPress={onBellPress} style={styles.iconButton}>
          {!searchIcon ? (
            <BellIcon color={'black'} />
          ) : (
            <SearchIcon color={'black'} />
          )}
        </TouchableOpacity>
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

export default Header;

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
