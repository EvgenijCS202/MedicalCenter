import React from 'react';
import { View, Text, StyleSheet, Image, Pressable} from 'react-native';
import { globalStyles } from '../constants/globalStyles';
import SearchInput from '../components/baseComponents/input/SearchInput';
import HomeAreasList from '../components/screensComponents/homeScreen/HomeAreasList';
import { ScrollView } from 'react-native-gesture-handler';
import ServiceAreaCard from '../components/baseComponents/buttons/ServiceAreaCard';
import { width } from '../constants';

export default function HomeScreen( {navigation}:any ) {
    // const [List, setList] = useState([
    //     {
    //         title: 'Массаж',
    //         info: 'Одна из мануальных техник, совокупность приёмов механического и рефлекторного воздействия на ткани и органы в виде растирания, давления, вибрации, проводимых непосредственно на поверхности тела человека как руками, так и специальными аппаратами через воздушную, водную или иную среду с целью достижения лечебного или иного эффекта.',
    //         key: 1,
    //     },
    //     {
    //         title: 'Name2',
    //         info: 'Info2',
    //         key: 2
    //     },
    // ]);
    const nickname = 'Евгений'

    const areasList = HomeAreasList(false)
    return (
      <View>
        <Image source={require('../../assets/img/avatars/avatar.png')} 
        style={[globalStyles.avatarStyle,{margin: 16}]}/>
        <Text style={[globalStyles.H1,styles.welcomeText]}>Добрый день,</Text>
        <Text style={[globalStyles.H1B,styles.nameText]}>{nickname} 👋</Text>
        <SearchInput style={styles.search} text='Поиск по услугам и докторам'/>
        <View style={styles.serviceLinks}>
          <Text style={globalStyles.H3}>Самые популярные</Text>
          <Pressable onPress={() => navigation.navigate("AllServices")}>
            <Text style={[globalStyles.Links]}>Все услуги</Text>
          </Pressable>
        </View>
        <ScrollView showsHorizontalScrollIndicator={false} horizontal contentContainerStyle={styles.serviceAreas}>
          {areasList.map(ServiceAreaCard)}
        </ScrollView>
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
        // itemStyle: {
        //     margin:10,
        //     borderWidth: 1,
        //     borderRadius: 5,
        //     height: 40,
        // },
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
        serviceLinks: {
          marginHorizontal: 16,
          marginTop: 36,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between'
        },
        serviceAreas: {
          paddingHorizontal: 17,
          marginVertical: 24,
        }
    });