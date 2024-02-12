import React, {useEffect, useState} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import {getWidth, width} from '../utils/utilities';
import {useDispatch} from 'react-redux';
import {useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {fetchContent} from '../redux/actions/countAction';
const DefaulPegination = ({data}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const dispatch = useDispatch();
  const navigation = useNavigation();

  useEffect(() => {
    dispatch(fetchContent());
  }, [dispatch]);
  const productValue = useSelector(state => state.counterReducer.entities);
  const productList = productValue.map(item => {
    return {
      id: item?._id,
      image: item?.catImage,
      text: item?.catName,
    };
  });
  const renderItem = ({item}) => {
    console.log(item, 'item......');
    return (
      <View style={styles.carouselItem}>
        <Image
          source={{uri: item.image}}
          style={styles.image}
          resizeMode="cover"
        />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Carousel
        // layout="tinder"
        layoutCardOffset={18}
        data={productList}
        renderItem={renderItem}
        sliderWidth={300}
        itemWidth={getWidth(width)}
        onSnapToItem={index => setActiveIndex(index)}
      />
      <Pagination
        dotsLength={data?.length}
        activeDotIndex={activeIndex}
        containerStyle={styles.paginationContainer}
        dotStyle={styles.dot}
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  carouselItem: {
    flexDirection: 'row',

    width: '100%',

    alignSelf: 'center',
    justifyContent: 'space-around',
    overflow: 'hidden',
    alignItems: 'center',
    marginTop: '2%',
    marginLeft: '30%',
  },
  image: {
    width: '130%',
    height: 200,
    paddingHorizontal: '7%',
  },
  text: {
    paddingHorizontal: '2%',
    width: 'auto',
    width: '100%',
    borderLeftWidth: 1,
    textAlign: 'center',
    color: 'black',
  },
  text1: {
    // alignSelf: 'center',

    textAlign: 'center',
    color: 'black',
  },
  paginationContainer: {
    paddingVertical: 8,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 8,
    backgroundColor: '#000',
  },
});

export default DefaulPegination;
