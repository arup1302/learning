import React from 'react';
import {View, FlatList, Image, StyleSheet, Text} from 'react-native';
import {DowmnIcon} from '../themes/icons';

const ImageBox = ({item}) => (
  <View style={styles.imageBox}>
    <Image source={{uri: item.image}} style={styles.image} />
    <View style={styles.overlay}>
      <Text style={styles.overlayText}>{`Price: ${item?.price}`}</Text>
      <DowmnIcon size={28} color={'blue'}></DowmnIcon>
    </View>
  </View>
);

const CategoryList = ({data}) => {
  return (
    <FlatList
      data={data}
      keyExtractor={item => item.id.toString()}
      renderItem={({item}) => <ImageBox item={item} />}
      numColumns={3}
    />
  );
};

const styles = StyleSheet.create({
  imageBox: {
    flex: 1,
    margin: 5,
    aspectRatio: 1, // Maintain aspect ratio for the image
    borderRadius: 8,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'start',
    // alignItems: 'center',
    flexDirection: 'row',
  },
  overlayText: {
    color: 'black',
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  overlayIcon: {
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    padding: 8,
    borderRadius: 20,
  },
});

export default CategoryList;
