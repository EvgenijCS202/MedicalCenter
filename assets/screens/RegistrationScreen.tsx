import React, {useState, useRef} from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Button, Dimensions } from 'react-native';
import Icon from "react-native-vector-icons/MaterialIcons"
import { Modalize } from 'react-native-modalize';
import DateScreen from './dateScreen';

export default function Registration({navigation, route}: any) {
    const {width,height} = Dimensions.get('screen');

    const [dateReg, setDateReg] = useState('00:00 01.01.2022');

    const modalizeRef = useRef<Modalize>(null);

    const dateOpen = () => {
        modalizeRef.current?.open();
    };
    const dateClose = (date:Date) => {
        modalizeRef.current?.close();
    };
    return (
        <View style={styles.page}>
            <Text style={styles.titleSt}>
                Информация:
            </Text>
            <Text style={styles.infoSt}>
                {route.params.data.info}
            </Text>
            <View style={styles.dateSt}>
                <Text style={styles.dateText}>
                    Дата: {dateReg}
                </Text>
                <TouchableOpacity onPress={dateOpen}>
                    <Icon name={'event'} size={40} color={'gold'} />
                </TouchableOpacity>
            </View>
            <View style={styles.buttonSt}>
                <Button color={'#00ff55'} title='Записаться' onPress={
                    () => navigation.navigate(
                        "Home"
                    )
                }/>
            </View>
            <Modalize 
            ref={modalizeRef}
            modalHeight={height/1.7}
            snapPoint={height/1.7}
            scrollViewProps={{ contentContainerStyle: { height: '100%'} }}
            HeaderComponent={
            <View>
                <Text style={styles.titleDate}>
                    Выберите дату
                </Text>
            </View>}
            >
                <DateScreen dateClose={dateClose} setDateReg={setDateReg}/>
            </Modalize>
        </View>
    );
};

const styles = StyleSheet.create({
    page: {
        height: "100%",
    },
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
    titleDate: {
        marginTop: 10,
        textAlign: 'center',
        fontSize: 24,
        color: 'black'
    }
});