import { StyleSheet, Text, View, Pressable, Button } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/MaterialIcons'

const ServiceHeader = ({data, dateReg, dateOpen, navigation}:any) => {
  return (
    <View style={{flex:1}}>
        <Text style={styles.titleSt}>
            Информация:
        </Text>
        <Text style={styles.infoSt}>
            {data.info}
        </Text>
        <View style={styles.dateSt}>
            <Text style={styles.dateText}>
                Дата: {dateReg}
            </Text>
            <Pressable onPress={dateOpen}>
                <Icon name={'event'} size={40} color={'gold'} />
            </Pressable>
        </View>
        <View style={styles.buttonSt}>
            <Button color={'#00ff55'} title='Записаться' onPress={
                () => navigation.navigate(
                    "Home"
                )
            }/>
        </View>
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