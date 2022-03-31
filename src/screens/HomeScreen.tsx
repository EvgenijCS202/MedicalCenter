import React from 'react';
import { View, Text, StyleSheet, Image, Pressable} from 'react-native';
import { globalStyles } from '../constants/globalStyles';
import SearchInput from '../components/baseComponents/input/SearchInput';
import HomeAreasList from '../components/screensComponents/homeScreen/HomeAreasList';
import { ScrollView } from 'react-native-gesture-handler';
import ServiceAreaCard from '../components/baseComponents/buttons/ServiceAreaCard';

export default function HomeScreen( {navigation}:any ) {
    const nickname = 'Евгений'
    return (
      <View>
        <Image source={require('../../assets/img/avatars/avatar.png')} 
        style={[globalStyles.avatarStyle,{margin: 16}]}/>
        <Text style={[globalStyles.H1,styles.welcomeText]}>Добрый день,</Text>
        <Text style={[globalStyles.H1B,styles.nameText]}>{nickname} 👋</Text>
        <SearchInput style={styles.search} text='Поиск по услугам и докторам'/>
        <View style={[styles.Links,{marginTop: 36}]}>
          <Text style={globalStyles.H3}>Самые популярные</Text>
          <Pressable onPress={() => navigation.navigate("AllAreas")}>
            <Text style={[globalStyles.Links]}>Все услуги</Text>
          </Pressable>
        </View>
        <ScrollView showsHorizontalScrollIndicator={false} horizontal contentContainerStyle={styles.serviceAreas}>
          {HomeAreasList(navigation).map(ServiceAreaCard)}
        </ScrollView>
        <View style={[styles.Links]}>
          <Text style={globalStyles.H3}>Топ докторов</Text>
          <Pressable>
            <Text style={[globalStyles.Links]}>Все доктора</Text>
          </Pressable>
        </View>
          {/* <View style={{height: '100%'}}>
            <FlatList data={List} renderItem={({item}) => (
              <Pressable onPress={() => {
                navigation.navigate(
                  "Service", {data: item}
              )}}>
                <Text style={[globalStyles.subTitle, styles.itemStyle, {textAlignVertical: 'center'}]}>
                  {item.title}
                </Text>
              </Pressable>
            ) }/>
          </View> */}
      </View>
    );
  };

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
          justifyContent: 'space-between'
        },
        serviceAreas: {
          paddingHorizontal: 17,
          marginVertical: 24,
          paddingBottom: 10,
        }
    });