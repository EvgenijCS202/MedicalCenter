import { StyleSheet, Text, Pressable} from 'react-native'
import React from 'react'
import { width } from '../../../constants'
import Icon from '../../../../assets/img/icons/icons';
import { lightBlue, white } from '../../../constants/colors';
import { globalStyles } from '../../../constants/globalStyles';
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
        <Icon name={iconName} size={40} style={{color: dayTime==dayTimeState?white:'#8F8F8F', alignSelf: 'center'}}/>
        <Text style={[globalStyles.H5,styles.text,{color: dayTime==dayTimeState?white:'#8F8F8F'}]}>
            {text}
        </Text>
    </Pressable>
  )
}

export default DayTimeButton

const styles = StyleSheet.create({
    buttonSt: {
        width: (width-74)/3,
        height: 40,
        flexDirection: 'row',
        borderRadius: 9,
        paddingHorizontal: 20,
        justifyContent: 'space-between'
    },
    text: {
        textAlignVertical: 'center',
        fontWeight: '700'
    },
})