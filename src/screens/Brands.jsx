import {
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useEffect} from 'react';
import Header from '../comman/Header';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import NewChips from '../comman/NewChips';
import {useNavigation} from '@react-navigation/native';
import {fetchContent} from '../redux/actions/countAction';
import {useDispatch} from 'react-redux';
import {useSelector} from 'react-redux';
import DefaulPegination from '../comman/DefaulPegination';
import HorizontalFlatList from '../comman/Crausal';
import CategoryList from '../comman/CategoryList';
const Brands = () => {
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
        title="Myntra"
        Icon={[
          {comp: <Ionicons name="search" size={20} color={'#000'} />},
          {comp: <AntDesign name="hearto" size={20} color={'#000'} />},
          {comp: <SimpleLineIcons name="bag" size={20} color={'#000'} />},
        ]}
        onIconPress={() => console.log('Icon pressed')}
        containerStyle={{backgroundColor: 'lightgray'}}
        titleStyle={{color: 'green'}}
      />

      <Text style={styles.titleStyle}>Brands:</Text>
      <ScrollView showsVerticalScrollIndicator={false}>
        <DefaulPegination data={productList} />
        <HorizontalFlatList />
        <CategoryList></CategoryList>
      </ScrollView>
    </View>
  );
};

export default Brands;

const styles = StyleSheet.create({
  titleStyle: {color: 'blue', fontSize: 18},
});
