import React, {useEffect} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import firestore from '@react-native-firebase/firestore';

export default function HomeScreen(props) {
  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const data = await firestore().collection('testing').add({
        name: 'Usama',
        age: 20,
      });
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    height: 48,
    borderRadius: 5,
    overflow: 'hidden',
    backgroundColor: 'white',
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 30,
    marginRight: 30,
    paddingLeft: 16,
  },
});
