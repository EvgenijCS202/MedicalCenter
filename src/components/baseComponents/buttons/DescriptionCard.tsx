import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { gray, white } from '../../../constants/colors'
import { globalStyles } from '../../../constants/globalStyles'
interface IDescriptionCard {
    title: string,
    text: string,
    size?: {width: number, height: number},
}
const DescriptionCard = ({title, text, size}: IDescriptionCard) => {
  return (
    <View style={[styles.container, {width: size?.width, height: size?.height}]}>
        <Text style={[globalStyles.H5,{color: white}]}>{title}</Text>
        <Text style={[globalStyles.H3,{color: white, marginBottom: 6}]}>{text}</Text>
    </View>
  )
}

export default DescriptionCard

const styles = StyleSheet.create({
    container: {
        backgroundColor: gray,
        borderRadius: 10,
        padding: 10,
        justifyContent: 'space-between'
    }
})