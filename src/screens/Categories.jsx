import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import HeaderComponent from '../comman/HeaderComponent';
import CategoryList from '../comman/CategoryList';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {findContent} from '../redux/actions/countAction';

const Categories = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(findContent());
  }, [dispatch]);
  const categoryValues = useSelector(state => state.productReducer.entities);
  const categoryList = categoryValues?.map(item => {
    return {
      id: item?._id,
      name: item?.prodName,
      image: item?.prodImage1,
      price: item?.prodPrice,
      text: item?.prodDescription,
    };
  });
  console.log(categoryList, 'categoryList.........');
  return (
    <View>
      <HeaderComponent
        onPress={() => navigation.goBack()}
        title={'Categories'}
      />
      <CategoryList data={categoryList} />
    </View>
  );
};

export default Categories;

const styles = StyleSheet.create({});
