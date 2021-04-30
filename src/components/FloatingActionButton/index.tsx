import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableNativeFeedback,
  View,
  Platform,
  TouchableOpacity,
} from 'react-native';

interface IFloatingActionButton {
  position?: 'bottomLeft' | 'bottomRight';
  title: string;
  onPress: () => void;
}

const FloatingActionButton = ({
  onPress,
  title,
  position = 'bottomRight',
}: IFloatingActionButton) => {
  const android = (
    <View style={[styles.buttonLocation, styles[position]]}>
      <TouchableNativeFeedback
        onPress={onPress}
        background={TouchableNativeFeedback.Ripple('black', false, 30)}>
        <View style={styles.fab}>
          <Text style={styles.fabText}>{title}</Text>
        </View>
      </TouchableNativeFeedback>
    </View>
  );

  const ios = (
    <TouchableOpacity
      activeOpacity={0.8}
      style={[styles.buttonLocation, styles[position]]}
      onPress={onPress}>
      <View style={styles.fab}>
        <Text style={styles.fabText}>{title}</Text>
      </View>
    </TouchableOpacity>
  );

  return Platform.OS === 'android' ? android : ios;
};

const styles = StyleSheet.create({
  buttonLocation: {
    position: 'absolute',
    bottom: 24,
    borderRadius: 100,
  },
  bottomRight: {
    right: 24,
  },
  bottomLeft: {
    left: 24,
  },
  fab: {
    backgroundColor: '#5856D6',
    width: 60,
    height: 60,
    borderRadius: 100,
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,

    elevation: 8,
  },
  fabText: {
    color: 'white',
    fontSize: 25,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
});

export default FloatingActionButton;
