import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Icon from '../../../../assets/img/icons/icons'
import { white } from '../../../constants/colors'
import { globalStyles } from '../../../constants/globalStyles'
interface IServiceAreaCard {
    name: string,
    color: string,
    iconName: string,
    services: {
        name: string,
        description: String,
        imgSource: string,
        time: string,
        age: string,
        conclusionTime: string,
    }[],
    key: number
}
const ServiceAreaCard = (item: IServiceAreaCard) => {
    if(item.name=='')
     return (<View style={styles.container} key={item.key}></View>)
    return (
        <View style={[styles.container,{backgroundColor: item.color}]} key={item.key}>
            <View style={styles.iconContainer} >
                <Icon name={item.iconName} size={40} style={{color: item.color}} />
            </View>
            <Text style={[globalStyles.H4,styles.nameStyle]}>{item.name}</Text>
            <Text style={[globalStyles.H4,{color: '#DEDEDE', marginHorizontal: 14}]}>{item.services.length} услуг</Text>
        </View>
    )
}

export default ServiceAreaCard

const styles = StyleSheet.create({
    container: {
        width: 160,
        height: 180,
        borderRadius: 12,
        marginRight: 10
    },
    iconContainer: {
        backgroundColor: white,
        width: 60,
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 14,
        borderRadius: 8
    },
    nameStyle: {
        marginHorizontal: 14,
        marginTop: 28,
        color: white
    },
})