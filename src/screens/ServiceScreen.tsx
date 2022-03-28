import React, {useState, useRef, createContext} from 'react';
import { View, Text, Pressable} from 'react-native';
import { Modalize } from 'react-native-modalize';
import DateScreen from './DateScreen';
import ServiceHeader from '../components/screensComponents/serviceScreen/ServiceHeader';
import { globalStyles } from '../constants/globalStyles';
import { height, stringDate } from '../constants';
import ContextTimeSlot from '../ContextTimeSlot';
import DateGetDates from '../components/screensComponents/dateScreen/DateGetDates'

export default function ServiceScreen({navigation, route}: any) {
    const dateSlots = DateGetDates()
    const [timeSel, setTimeSel] = useState(dateSlots[0])
    const [dateReg, setDateReg] = useState(stringDate(dateSlots[0]));

    const modalizeRef = useRef<Modalize>(null);
    const dateOpen = () => { modalizeRef.current?.open(); };
    const dateClose = () => { modalizeRef.current?.close(); };
    return (
        <ContextTimeSlot.Provider value={{dateSlots,timeSel, setTimeSel}}>
            <View style={{height: "100%"}}>
                <ServiceHeader
                data={route.params.data}
                dateReg={dateReg}
                dateOpen={dateOpen}
                navigation={navigation}
                />
                <Modalize 
                ref={modalizeRef}
                modalHeight={height/1.7}
                snapPoint={height/1.7}
                scrollViewProps={{ contentContainerStyle: { height: '100%'} }}
                HeaderComponent={
                <View>
                    <Text style={[globalStyles.title, {marginTop: 10}]}>
                        Выберите дату
                    </Text>
                </View>}
                FooterComponent={
                    <Pressable style={ globalStyles.buttonSt} onPress={() => {dateClose(); setDateReg(stringDate(timeSel))}}>
                        <Text style={globalStyles.buttonText}>
                            Выбрать
                        </Text>
                    </Pressable>
                }
                >
                    <DateScreen />
                </Modalize>
            </View>
        </ContextTimeSlot.Provider>
    );
};