import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import NewChips from '../comman/NewChips';
import Header from '../comman/Header';
import DefaulPegination from '../comman/DefaulPegination';
import {data} from '../utils/utilities';
import {useNavigation} from '@react-navigation/native';
import {fetchContent} from '../redux/actions/countAction';
import {useDispatch} from 'react-redux';
import {useSelector} from 'react-redux';
import Categories from './Categories';
import CategoryList from '../comman/CategoryList';
const New = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  useEffect(() => {
    dispatch(fetchContent());
  }, [dispatch]);
  const productValues = useSelector(state => state.counterReducer.entities);
  const productList = productValues.map(item => {
    return {
      id: item?._id,
      image: item?.catImage,
      text: item?.catName,
    };
  });
  return (
    <View>
      <Header
        searchIcon
        title="Myntra"
        logoColor="#EA5455"
        onLogoPress={() => console.log('Logo Pressed')}
      />

      <DefaulPegination data={productList} />
      <CategoryList></CategoryList>
    </View>
  );
};

export default New;

const styles = StyleSheet.create({});
