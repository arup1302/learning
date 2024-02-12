import React, {useEffect} from 'react';
import {View, FlatList, Image, Text, StyleSheet} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {fetchContent} from '../redux/actions/countAction';

const HorizontalFlatList = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContent());
  }, [dispatch]);

  const productValue = useSelector(state => state.counterReducer.entities);
  console.log(productValue, '..productValue...');
  const loading = useSelector(state => state.counterReducer.loading);
  console.log(loading, 'loding........');
  const error = useSelector(state => state.counterReducer.error);
  const productList = productValue.map(item => {
    return {
      id: item?._id,
      image: item?.catImage,
      text: item?.catName,
    };
  });

  const renderItem = ({item}) => (
    <View style={styles.itemContainer}>
      <Image source={{uri: item.image}} style={styles.image} />

      <View style={styles.textContainer}>
        <Text style={styles.title}>{item.text}</Text>
        <Text style={styles.title1}>{item.text}</Text>
      </View>
    </View>
  );

  return (
    <FlatList
      data={productList}
      keyExtractor={item => item.id}
      renderItem={renderItem}
      horizontal
      showsHorizontalScrollIndicator={false}
    />
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    marginHorizontal: 5,
  },
  image: {
    width: 120,
    height: 80,
    resizeMode: 'cover',
    borderRadius: 1,
  },
  textContainer: {
    flex: 1,
    // marginTop: 1,
    width: '100%',
    borderTopWidth: 0.5,
    borderColor: 'black',
  },
  title: {
    fontWeight: 'bold',

    width: '100%',
    textAlign: 'center',
  },
  title1: {
    fontWeight: 'bold',
    width: '100%',
    textAlign: 'center',
  },
});

export default HorizontalFlatList;
