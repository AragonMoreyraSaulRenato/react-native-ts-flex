import React from 'react';
import {Text, View, StyleSheet, useWindowDimensions} from 'react-native';

// const {width, height} = Dimensions.get('window');

const DimencionesScreen = () => {
  const {width, height} = useWindowDimensions();
  return (
    <View>
      <View style={styles.container}>
        <View style={styles.cajaMorada} />
        <View style={styles.cajaNaranja} />
      </View>
      <Text style={styles.title}>
        W: {width}, H: {height}
      </Text>
    </View>
  );
};

export default DimencionesScreen;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 300,
    backgroundColor: 'red',
  },
  cajaMorada: {
    backgroundColor: '#5856D6',
    height: '50%',
  },
  cajaNaranja: {
    backgroundColor: '#F0A23B',
    height: '40%',
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
  },
});
