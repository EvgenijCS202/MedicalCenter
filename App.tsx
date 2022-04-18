import React, {useState} from 'react';
import BottomTabNavigator from './src/navigators/BottomTabNavigator';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import ProfileContext from './src/contexts/ProfileContext';

const App = () => {
  const [context, setContext] = useState({
    image: require('./assets/img/avatars/avatar.png'),
    name: 'Егор Низов',
    mail: 'example@mail.ru',
    phoneNumber: '89112223344',
  });
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <ProfileContext.Provider value={[context, setContext]}>
        <BottomTabNavigator />
      </ProfileContext.Provider>
    </GestureHandlerRootView>
  );
};

export default App;
