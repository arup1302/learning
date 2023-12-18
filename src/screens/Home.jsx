// screens/Home.js
import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ActivityIndicator,
  FlatList,
} from 'react-native';
import {useSelector} from 'react-redux';

// import {fetchContent} from '../redux/slice/counterSlice';
// import {
//   decrementAsync,
//   incrementAsync,
//   resetAsync,
// } from '../redux/actions/countAction';
import {useDispatch} from 'react-redux';
import {fetchContent} from '../redux/actions/countAction';
export default function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContent());
  }, [dispatch]);

  const countValue = useSelector(state => state.counterReducer.entities);

  const loading = useSelector(state => state.counterReducer.loading);
  console.log(loading, 'loding........');
  const error = useSelector(state => state.counterReducer.error);
  const renderItem = ({item}) => (
    <>
      <View style={styles.container1} key={item.id}>
        <Text style={styles.btn_text}> {item.id}.</Text>
        <Text> {item.name}</Text>
      </View>
      <View>
        <Text style={styles.city}> CityName: {item.address.city}</Text>
        <Text style={styles.city}> Phone: {item.phone}</Text>
      </View>
    </>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title_text}>Thunk App</Text>

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

      {!loading && !error && (
        <FlatList
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          data={countValue}
          renderItem={renderItem}
          keyExtractor={item => item.id.toString()}
        />
        // <>
        //   {countValue.map(content => (
        //     <>
        //       <View style={styles.container1} key={content.id}>
        //         <Text style={styles.btn_text}> {content.id}.</Text>
        //         <Text> {content.name}</Text>
        //       </View>
        //       <View>
        //         <Text style={styles.city}>
        //           {' '}
        //           CityName: {content.address.city}
        //         </Text>
        //       </View>
        //     </>
        //   ))}
        // </>
      )}
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
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
});
