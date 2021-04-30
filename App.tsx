import React from 'react';
import {SafeAreaView} from 'react-native';
import TareaScreen from './src/screens/TareaScreen';
// import FlexScreen from './src/screens/FlexScreen';
// import PositionScreen from './src/screens/PositionScreen';
// import BoxObjectModelScreen from './src/screens/BoxObjectModelSceen';
// import CounterScreen from './src/screens/CounterScreen';
// import HelloWordScreen from './src/screens/HelloWordScreen';
// import DimencionesScreen from './src/screens/DimencionesScreen';

const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      {/* <CounterScreen />; */}
      {/* <HelloWordScreen />; */}
      {/* <BoxObjectModelScreen /> */}
      {/* <DimencionesScreen /> */}
      {/* <PositionScreen /> */}
      {/* <FlexScreen /> */}
      <TareaScreen />
    </SafeAreaView>
  );
};

export default App;
