import { StyleSheet, Text, Pressable} from 'react-native'
import React from 'react'
import { width } from '../../../constants'
import Icon from 'react-native-vector-icons/Fontisto';
const DayTimeButton = ({dayTime, dayTimeState, setDayTime , iconName, text}:any) => {
  return (
    <Pressable style={[styles.buttonSt,
        {backgroundColor: dayTime==dayTimeState?'gold':'white'}]} onPress={setDayTime}>
        <Icon name={iconName} size={30} style={{marginVertical:10}}/>
        <Text style={styles.text}>
            {text}
        </Text>
    </Pressable>
  )
}

export default DayTimeButton

const styles = StyleSheet.create({
    buttonSt: {
        width: width*0.9/3.5,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        borderRadius: 20,
    },
    text: {
        textAlignVertical: 'center',
        color: 'black',
        fontSize: 16,
    }
})