import React, {useState} from 'react';
import {CameraOutlineIcon, MicIcon, SearchIcon} from '../themes/icons';
import {StyleSheet, TextInput, View} from 'react-native';
import {colors} from '../themes/colors';
import {scale} from 'react-native-size-matters';
colors;

const InputSearch = () => {
  const [inputData, setInputData] = useState('');
  const handleApiRequest = async () => {
    try {
      const response = await axios.get('', {data: inputData});

      console.log(response.data);
      Alert.alert('Success', `Received data: ${response.data}`);
    } catch (error) {
      console.error('Error:', error);
      Alert.alert('Error', 'An error occurred while making the API request.');
    }
  };
  return (
    <View style={styles.searchContainer}>
      <SearchIcon size={scale(20)} />
      <TextInput
        value={inputData}
        onChangeText={text => {
          setInputData(text);
          handleApiRequest(text);
        }}
        placeholder="Search for brands and products"
        style={StyleSheet.searchInput}
        placeholderTextColor={colors.GREY}
      />
      <View style={styles.iconContainer}>
        <CameraOutlineIcon color={colors.BLACK} size={scale(20)} />
        <MicIcon color={colors.BLACK} size={scale(20)} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  searchContainer: {
    flexDirection: 'row',
    alignSelf: 'center',
    alignItems: 'center',
    backgroundColor: colors.WHITE, // Customize background color
    marginVertical: '3%',
    // height: '8%',
    borderWidth: 0.7,
    borderRadius: 50,
    width: '95%',
    marginLeft: '15%',
    marginRight: '15%',
    paddingLeft: '5%',
    elevation: 15,
  },
  searchInput: {
    flex: 1,
    fontSize: scale(16),
    color: colors.BLACK,
  },
  iconContainer: {
    width: '20%',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
});

export default InputSearch;
