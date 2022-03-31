import { StyleSheet, Text, Pressable} from 'react-native'
import React from 'react'
import { lightBlue, white } from '../../../constants/colors'
import { globalStyles } from '../../../constants/globalStyles'
interface ISubmitButton {
    text: string,
    style?: any,
    textStyle?: any,
    onPress: () => void
}
const SubmitButton = ({text,style,textStyle,onPress}: ISubmitButton) => {
  return (
    <Pressable style={[styles.container,style]} onPress={onPress}>
      <Text style={[globalStyles.H4,styles.text,textStyle]}>{text}</Text>
    </Pressable>
  )
}

export default SubmitButton

const styles = StyleSheet.create({
    container: {
        backgroundColor: lightBlue,
        height: 56,
        borderRadius: 12
    },
    text: {
        flex: 1,
        textAlign: 'center',
        textAlignVertical: 'center',
        color: white
    },
})