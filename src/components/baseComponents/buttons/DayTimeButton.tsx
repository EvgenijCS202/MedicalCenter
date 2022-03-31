import { StyleSheet, Text, Pressable} from 'react-native'
import React from 'react'
import { width } from '../../../constants'
import Icon from '../../../../assets/img/icons/icons';
import { lightBlue, white } from '../../../constants/colors';
interface IDayTimeButton {
    dayTime: number,
    dayTimeState: number,
    setDayTime: () => void,
    iconName: string,
    text: string
}
const DayTimeButton = ({dayTime, dayTimeState, setDayTime , iconName, text}: IDayTimeButton) => {
  return (
    <Pressable style={[styles.buttonSt,
        {backgroundColor: dayTime==dayTimeState?lightBlue:white}]} onPress={setDayTime}>
        <Icon name={iconName} size={30} style={{color: dayTime==dayTimeState?white:'black',marginVertical:10}}/>
        <Text style={[styles.text,{color: dayTime==dayTimeState?white:'black'}]}>
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
        fontSize: 16,
    },
})