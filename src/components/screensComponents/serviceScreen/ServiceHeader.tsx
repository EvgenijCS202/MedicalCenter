import { StyleSheet, Text, View, Pressable, Button } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/MaterialIcons'
interface IServiceHeader {
    navigation: any,
    data: {
        name: string,
        description: String,
        imgSource: any,
        time: string,
        age: string,
        price: number,
        conclusionTime: string,
    },

}
const ServiceHeader = ({data, dateReg, dateOpen, navigation}:any) => {
  return (
    <View>
    </View>
  )
}

export default ServiceHeader

const styles = StyleSheet.create({
    buttonSt: {
        position: 'absolute',
        top: '90%',
        width: '80%',
        alignSelf: 'center'
    },
    titleSt:{
        marginTop: 10,
        textAlign: 'center',
        fontSize: 18,
        color: 'black'
    },
    infoSt: {
        height: '30%',
        fontSize: 16,
        color: 'black',
        marginHorizontal: 10
    },
    dateSt: {
        flexDirection: 'row',
        marginHorizontal: 10,
    },
    dateText: {
        width: '90%',
        fontSize: 18,
        textAlignVertical: 'center',
        color: 'black'
    },
})