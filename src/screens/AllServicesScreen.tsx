import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import SearchInput from '../components/baseComponents/input/SearchInput'
import { globalStyles } from '../constants/globalStyles'
const AllServicesScreen = () => {
  return (
    <View>
      <SearchInput style={{marginHorizontal: 16, marginVertical: 24}} text={'Поиск по направлениям'}/>
      <Text style={[globalStyles.H1,{marginHorizontal: 17}]}>Все направления</Text>
    </View>
  )
}

export default AllServicesScreen

const styles = StyleSheet.create({})