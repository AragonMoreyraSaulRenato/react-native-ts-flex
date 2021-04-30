import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import FloatingActionButton from '../components/FloatingActionButton';

function CounterScreen() {
  const [contador, setContador] = useState(10);
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Contador: {contador}</Text>
      <FloatingActionButton
        position="bottomRight"
        title="+1"
        onPress={() => setContador(contador + 1)}
      />
      <FloatingActionButton
        position="bottomLeft"
        title="-1"
        onPress={() => setContador(contador - 1)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  text: {
    textAlign: 'center',
    fontSize: 40,
    top: -20,
  },
});

export default CounterScreen;
