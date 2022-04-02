import React from 'react';
import BottomTabNavigator from './src/navigators/BottomTabNavigator';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

const App = () => {
  return (
    <GestureHandlerRootView style={{flex:1}}>
      <BottomTabNavigator/>
    </GestureHandlerRootView>
  );
};

export default App;
