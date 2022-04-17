import React, {useState} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {globalStyles} from '../../constants/globalStyles';
import SearchInput from '../../components/baseComponents/input/SearchInput';
import {ScrollView} from 'react-native-gesture-handler';
import {white} from '../../constants/colors';
import AsyncStorage from '@react-native-async-storage/async-storage';
import HomeFooter from '../../components/screensComponents/homeScreen/HomeFooter';

export default function HomeScreen({navigation}: any) {
  const nickname = 'Евгений';
  const clearStorage = async () => {
    try {
      await AsyncStorage.clear();
      console.log('Storage successfully cleared!');
    } catch (e) {
      console.log('Failed to clear the async storage.');
    }
  };
  const [text, setText] = useState('');
  // clearStorage()
  return (
    <ScrollView style={{backgroundColor: white}}>
      <Image
        source={require('../../../assets/img/avatars/avatar.png')}
        style={[globalStyles.avatarStyle, {margin: 16}]}
      />
      <Text style={[globalStyles.H1, styles.welcomeText]}>Добрый день,</Text>
      <Text style={[globalStyles.H1B, styles.nameText]}>{nickname} 👋</Text>
      <SearchInput
        style={styles.search}
        text="Поиск по услугам и докторам"
        onChange={setText}
      />
      <View>{HomeFooter({navigation, text: text})}</View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  welcomeText: {
    marginHorizontal: 17,
    marginTop: 18,
  },
  nameText: {
    marginHorizontal: 17,
    marginTop: 4,
  },
  search: {
    marginHorizontal: 16,
    marginTop: 24,
  },
  Links: {
    marginHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  serviceAreas: {
    paddingHorizontal: 17,
    marginVertical: 24,
    paddingBottom: 10,
  },
  doctors: {
    marginLeft: 17,
    marginRight: 15,
    marginTop: 24,
  },
});
