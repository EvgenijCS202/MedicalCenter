import React from 'react';
import Navigator from './src/navigators/MainStackNavigator';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

const App = () => {
  return (
    <GestureHandlerRootView style={{flex:1}}>
      <Navigator/>
    </GestureHandlerRootView>
  );
};

export default App;
