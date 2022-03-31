import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import HomeAreasList from '../homeScreen/HomeAreasList'
import ServiceAreaCard from '../../baseComponents/buttons/ServiceAreaCard'

const AllServicesScrollCards = (navigation: any) => {
    const arr=HomeAreasList(navigation)
    let twoCards = []
    for(let i=0;i<arr.length-1;i+=2)
        twoCards.push(
            <View style={styles.row} key={i/2}>
                {ServiceAreaCard(arr[i])}
                {ServiceAreaCard(arr[i+1])}
            </View>
            )
    if(arr.length%2==1)
    twoCards.push(
        <View style={styles.row} key={arr.length/2+1}>
            {ServiceAreaCard(arr[arr.length-1])}
            {ServiceAreaCard({
                name: '',
                color: '',
                iconName: '',
                services: [],
                link: () => (navigation.goBack()),
                key: arr.length+1
            })}
        </View>
    )
    return twoCards
}

export default AllServicesScrollCards

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 22
    }
})