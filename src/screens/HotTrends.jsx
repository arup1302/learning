import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Carousal from '../comman/Crausal';
import Entypo from 'react-native-vector-icons/Entypo';
import Header from '../comman/Header';
import InputSearch from '../comman/InputSearch';
import {colors} from '../themes/colors';
import Mycarousel from '../comman/Mycrausel';
import {data} from '../utils/utilities';
import HorizontalFlatList from '../comman/HorizontalFlatList';
const HotTrends = ({textColor, backgroundColor}) => {
  return (
    <View style={styles.container}>
      <Header
        searchIcon
        title="Myntra"
        logoColor="#EA5455"
        onLogoPress={() => console.log('Logo Pressed')}
      />
      <View style={styles.searchContainer}>
        <View onPress={() => {}} style={styles.logoContainer1}>
          <TouchableOpacity>
            <Text style={styles.text1}> Women</Text>
          </TouchableOpacity>
        </View>

        <View onPress={() => {}} style={styles.logoContainer2}>
          <TouchableOpacity>
            <Text style={{color: colors.WHITE}}> Men</Text>
          </TouchableOpacity>
        </View>
      </View>
      <Carousal textColor="red"></Carousal>
      <Mycarousel data={data} />

      <HorizontalFlatList />
    </View>
  );
};

export default HotTrends;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  searchContainer: {
    flexDirection: 'row',
    alignSelf: 'center',
    alignItems: 'center',
    backgroundColor: colors.WHITE, // Customize background color
    marginVertical: '3%',
    height: '8%',
    borderWidth: 0.7,
    borderRadius: 50,
    width: '95%',
    marginLeft: '15%',
    marginRight: '15%',
    paddingLeft: '5%',
    elevation: 15,
  },
  logoContainer1: {
    backgroundColor: colors.WHITE,
    color: colors.BLACK,
    alignItems: 'center',
    width: '45%',
    borderRadius: 50,
  },
  logoContainer2: {
    backgroundColor: colors.BLACK,
    color: colors.WHITE,
    alignItems: 'center',
    width: '55%',
    height: '100%',
    justifyContent: 'center',
    borderRadius: 50,
    borderBottomRightRadius: 50,
  },
});
