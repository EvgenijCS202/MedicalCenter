import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import SearchInput from '../components/baseComponents/input/SearchInput'
import AreaSearchTitle from '../components/screensComponents/areaScreen/AreaSearchTitle'
import { globalStyles } from '../constants/globalStyles'
import ServiceCards from '../components/baseComponents/buttons/ServiceCards'
import { white } from '../constants/colors'
import { height } from '../constants'
interface IAreaScreen {
    route: {
      params: {
        services: {
          name: string,
          description: String,
          imgSource: string,
          time: string,
          age: string,
          price: number,
          conclusionTime: string,
      }[],
      title: string
      }
    },
    navigation: any
}
const AreaScreen = ({route, navigation}: IAreaScreen ) => {
  return (
    <View style={{backgroundColor: white,height: height-160}}>
      <SearchInput style={styles.search} text={'Поиск по '+AreaSearchTitle(route.params.title)}/>
      <Text style={[globalStyles.H1,{marginHorizontal: 17}]}>Услуги</Text>
      {ServiceCards({items: route.params.services, navigation})}
    </View>
  )
}

export default AreaScreen

const styles = StyleSheet.create({
  search: {
    marginHorizontal: 16,
    marginVertical: 24
  },
})