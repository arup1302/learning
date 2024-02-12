import React, {useState} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import {getWidth, width} from '../utils/utilities';

const Mycrausel = ({data}) => {
  console.log(data, '...mydat');
  const [activeIndex, setActiveIndex] = useState(0);

  const renderItem = ({item}) => {
    return (
      <View style={styles.carouselItem}>
        <Image
          source={{uri: item.image}}
          style={styles.image}
          resizeMode="cover"
        />

        <Text style={styles.text}>Hello</Text>
        <Text style={styles.text1}>Hello</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Carousel
        // layout="tinder"
        layoutCardOffset={18}
        data={data}
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
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 5,
    alignItems: 'center',
  },
  carouselItem: {
    flexDirection: 'row',
    borderRadius: 8,
    width: '50%',

    // justifyContent: 'space-between',
    overflow: 'hidden',
    alignItems: 'center',

    width: width,
  },
  image: {
    width: '30%',
    height: 40,
    paddingHorizontal: '7%',
  },
  text: {
    paddingHorizontal: '2%',
    width: 'auto',
    // alignSelf: 'center',
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

export default Mycrausel;
