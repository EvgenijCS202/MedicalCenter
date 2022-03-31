import React from 'react';
import { View, Image, Text, StyleSheet, Pressable} from 'react-native';
import { Modalize } from 'react-native-modalize';
import DateScreen from './DateScreen';
import ServiceHeader from '../components/screensComponents/serviceScreen/ServiceHeader';
import { globalStyles } from '../constants/globalStyles';
import { height, stringDate, width } from '../constants';
import TimeSlotContext from '../contexts/TimeSlotContext';
import DateGetDates from '../components/screensComponents/dateScreen/DateGetDates'
import { white } from '../constants/colors';
import DescriptionCard from '../components/baseComponents/buttons/DescriptionCard';
import SubmitButton from '../components/baseComponents/buttons/SubmitButton';
interface IServiceScreen {
    navigation: any,
    route: {
        params: {
            data: {
                name: string,
                description: String,
                imgSource: any,
                time: string,
                age: string,
                price: number,
                conclusionTime: string,
            }
        }
    }
}
export default function ServiceScreen({navigation, route}: IServiceScreen) {
    // const dateSlots = DateGetDates()
    // const [timeSel, setTimeSel] = useState(dateSlots[0])
    // const [dateReg, setDateReg] = useState(stringDate(dateSlots[0]));

    // const modalizeRef = useRef<Modalize>(null);
    // const dateOpen = () => { modalizeRef.current?.open(); };
    // const dateClose = () => { modalizeRef.current?.close(); };
    return (
        // <TimeSlotContext.Provider value={{dateSlots,timeSel, setTimeSel}}>
            <View style={{backgroundColor: white, height: height-160}}>
                <View style={{flex: 1}}>
                    <View style={{flexDirection: 'row', marginVertical: 24}}>
                        <Image style={{width: 60, height: 60, marginHorizontal: 16}} source={route.params.data.imgSource}/>
                        <Text style={[globalStyles.H2,{textAlignVertical: 'center', marginHorizontal: 10}]}>{route.params.data.name}</Text>
                    </View>
                    <Text style={[globalStyles.text,styles.description]}>{route.params.data.description}</Text>
                    <View style={styles.descCards}>
                        <DescriptionCard title='Длительность обследования' text={route.params.data.time} size={{width: (width-48)/3, height: (width-48)/3}}/>
                        <DescriptionCard title='Подготовка заключения' text={route.params.data.conclusionTime} size={{width: (width-48)/3, height: (width-48)/3}}/>
                        <DescriptionCard title='Возраст' text={route.params.data.age} size={{width: (width-48)/3, height: (width-48)/3}} />
                    </View>
                </View>
                <SubmitButton text='Записаться на услугу' style={styles.button} onPress={()=>navigation.navigate('Date', {data: route.params.data})}/>
                {/* <ServiceHeader
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
                </Modalize> */}
            </View>
        // </TimeSlotContext.Provider>
    );
};

const styles = StyleSheet.create({
    description: {
        color: '#7B8088',
        marginHorizontal: 16,
        textAlign: 'justify',
        lineHeight: 22
    }, 
    descCards: {
        marginTop: 28,
        flexDirection: 'row',
        marginHorizontal: 16,
        justifyContent: 'space-between'
    },
    button: {
        marginHorizontal: 16,
        marginBottom: 38
    }
})