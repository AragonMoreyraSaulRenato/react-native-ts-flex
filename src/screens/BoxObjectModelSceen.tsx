import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

const BoxObjectModelScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Box Objext Model</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
  },
  title: {
    fontSize: 20,
    padding: 50,
    borderWidth: 10,
    marginHorizontal: 20,
    marginVertical: 60,
  },
});

export default BoxObjectModelScreen;
