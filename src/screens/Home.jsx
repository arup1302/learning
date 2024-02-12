// screens/Home.js
import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ActivityIndicator,
  FlatList,
  Dimensions,
  Image,
  ScrollView,
} from 'react-native';
import {useSelector} from 'react-redux';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useDispatch} from 'react-redux';
import {fetchContent} from '../redux/actions/countAction';

import Header from '../comman/Header';
import InputSearch from '../comman/InputSearch';
import NewChips from '../comman/NewChips';
import Carousal from '../comman/Crausal';
import Mycarousel from '../comman/Mycrausel';
import {data} from '../utils/utilities';
import HorizontalFlatList from '../comman/HorizontalFlatList';
import {useNavigation} from '@react-navigation/native';
import Categories from './Categories';
const {width, height} = Dimensions.get('window');
export default function Home() {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [selectedChip, setSelectedChip] = useState(0);
  useEffect(() => {
    dispatch(fetchContent());
  }, [dispatch]);

  // const handleChipClick = index => {
  //   setSelectedChip(index);
  // };
  const onIconPressMenu = () => {
    navigation.navigate('Categories');
  };
  const countValue = useSelector(state => state.counterReducer.entities);

  const loading = useSelector(state => state.counterReducer.loading);
  console.log(loading, 'loding........');
  const error = useSelector(state => state.counterReducer.error);
  // const renderItem = ({item}) => (
  //   <>
  //     <View style={styles.container1} key={item.id}>
  //       <Text style={styles.btn_text}> {item.id}.</Text>
  //       <Text> {item.name}</Text>
  //     </View>
  //     <View>
  //       <Text style={styles.city}> CityName: {item.address.city}</Text>
  //       <Text style={styles.city}> Phone: {item.phone}</Text>
  //     </View>
  //   </>
  // );
  const chipArray = [1, 2, 3];
  return (
    <View style={styles.container}>
      <Header
        title="Myntra"
        logoColor="#EA5455"
        onLogoPress={() => console.log('Logo Pressed')}
      />

      <InputSearch />

      <ScrollView
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        nestedScrollEnabled={true}>
        <View style={styles.chipView}>
          {chipArray.map((item, index) => (
            <View key={index}>
              <NewChips
                index={index}
                onPress={() => setSelectedChip(index)}
                selected={selectedChip}
              />
            </View>
          ))}
          <TouchableOpacity style={styles.chipMenu} onPress={onIconPressMenu}>
            <Image
              source={require('../assets/images/menu.png')}
              style={styles.image}
              resizeMode="contain"
            />
          </TouchableOpacity>
        </View>
        <Carousal />
        <View style={styles.staticImage}>
          <Image
            source={require('../assets/images/myntra.jpeg')}
            style={styles.imagestatic}
            resizeMode="contain"
          />
        </View>
        <Mycarousel data={data} />
        <HorizontalFlatList />

        {loading && (
          <>
            <ActivityIndicator size="large" color="red" />
            <Text style={styles.errorText}>loding........</Text>
          </>
        )}
        {error && (
          <>
            <ActivityIndicator size="large" color="red" />
            <Text style={styles.errorText}>{error}</Text>
          </>
        )}

        {/* {!loading && !error && (
        <FlatList
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          data={countValue}
          renderItem={renderItem}
          keyExtractor={item => item.id.toString()}
        />
      )} */}
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',

    width: width,
    // flexDirection: 'column',
    // padding: 50,
  },
  container1: {
    flex: 1,
    width: '100%',
    height: 'auto',

    // justifyContent: 'center',

    alignItems: 'center',
    flexDirection: 'row',
    // padding: 50,
    marginVertical: 2,
  },
  title_text: {
    fontSize: 40,
    // fontWeight: '90',
    // marginBottom: 15,
  },
  counter_text: {
    fontSize: 25,
    fontWeight: '900',
    margin: 35,
  },

  btn_text: {
    fontSize: 20,
    marginBottom: 5,
  },
  errorText: {
    color: 'red',
  },
  city: {
    fontSize: 15,
    fontWeight: '600',
    // backgroundColor: 'green',
  },
  // inputSearch: {
  //   width: '90%',
  //   marginVertical: '5%',
  //   paddingHorizontal: '5%',
  //   height: '10%',
  // },
  chipView: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  chipcontainr: {
    width: '80%',

    flexDirection: 'row',
  },
  chipMenu: {
    width: 50,
    height: 50,
    borderRadius: 25,
    alignSelf: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'black',
    backgroundColor: 'white',
  },
  image: {
    width: '50%',
    height: '50%',
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '25%',
  },
  staticImage: {
    width: '100%',
    height: 210,
  },
  imagestatic: {
    width: '100%',
    height: 210,
  },
});
