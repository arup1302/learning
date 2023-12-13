// screens/Home.js
import React, {useState} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {increment, decrement, reset} from '../redux/actions/countAction';

export default function Home() {
  // const [counter, setCounter] = useState(0);

  // const handleIncreament = () => {
  //   setCounter(counter + 1);
  // };

  // const handleDecreament = () => {
  //   if (counter > 0) setCounter(counter - 1);
  // };
  // const handleReset = () => {
  //   setCounter(0);
  // };
  const dispatch = useDispatch();

  const countValue = useSelector(store => store.counterReducer.count);

  const handleIncreament = () => {
    dispatch(increment());
  };

  const handleDecreament = () => {
    dispatch(decrement());
  };
  const handleReset = () => {
    dispatch(reset());
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title_text}>Counter App</Text>
      <Text style={styles.counter_text}> Count:{countValue}</Text>
      <View style={styles.btnView}>
        <TouchableOpacity onPress={handleIncreament} style={styles.btn}>
          <Text style={styles.btn_text}> Increment </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={handleDecreament}
          style={{...styles.btn, backgroundColor: '#6e3b3b'}}>
          <Text style={styles.btn_text}> Decrement </Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        onPress={handleReset}
        style={{...styles.btn, backgroundColor: 'blue'}}>
        <Text style={styles.btn_text}> Reset </Text>
      </TouchableOpacity>
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
  title_text: {
    fontSize: 40,
    fontWeight: '900',
    marginBottom: 45,
  },
  counter_text: {
    fontSize: 25,
    fontWeight: '900',
    margin: 35,
  },
  btnView: {
    flexDirection: 'row',
  },
  btn: {
    backgroundColor: '#086972',
    padding: 10,
    margin: 10,
    borderRadius: 10,
  },
  btn_text: {
    fontSize: 23,
    color: '#fff',
  },
});
