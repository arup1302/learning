import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React from 'react';

const NewChips = ({iconSource, index, onPress, selected}) => {
  console.log(selected, index);

  return (
    <TouchableOpacity onPress={onPress} style={{width: '100%'}}>
      <View
        style={[
          styles.chipContainer,
          {backgroundColor: index === selected ? '#000' : '#fff'},
        ]}>
        <Image
          source={require('../assets/images/splash.jpeg')}
          style={styles.icon}
          resizeMode="contain"
        />
        <Text
          style={[
            styles.text,
            index === selected ? styles.selectedText : null,
          ]}>
          Hello
        </Text>
        {/* <Text style={[styles.text, selected ? styles.selectedText : null]}>
          {text}
        </Text> */}
      </View>
    </TouchableOpacity>
  );
};

export default NewChips;

const styles = StyleSheet.create({
  Container: {flexDirection: 'row', backgroundColor: 'green'},
  chipContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    padding: 8,
    borderRadius: 16,
    margin: 4,
    // width: '100%',
    borderWidth: 0.7,
  },
  icon: {
    width: 24,
    height: 24,
    marginRight: 8,
  },
  text: {
    fontSize: 16,
    color: 'black',
  },
  selectedChip: {
    backgroundColor: 'black',
  },
  selectedText: {
    color: 'white',
  },
});
