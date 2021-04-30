import React from 'react';
import {View, Text} from 'react-native';

function HelloWordScreen() {
  return (
    <View style={{flex: 1, justifyContent: 'center'}}>
      <Text
        style={{
          fontSize: 45,
          textAlign: 'center',
        }}>
        Hola mundo!
      </Text>
    </View>
  );
}

export default HelloWordScreen;
