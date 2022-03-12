import { addHours, startOfDay } from 'date-fns';
import React, {useState, useMemo} from 'react';
import { View, Text, StyleSheet, Dimensions, FlatList, TouchableOpacity, ScrollView} from 'react-native';
import generateDates from '../generateDates/generateDates';
import Icon from 'react-native-vector-icons/Fontisto';
import slots from '../TimeSlots/slots';

export default function DateScreen({dateClose, setDateReg}: any) {
    const StringSlots: string[] = slots()
    const getDates = (slots: string[]) => { 
        const dates: Date[] = []
        for(let i=0;i<slots.length;++i)
        if( new Date().valueOf() - new Date(slots[i]).valueOf()<0)
            dates.push(new Date(slots[i]))
        return dates
    }
    const dateSlots = getDates(StringSlots)

    const lastDate = dateSlots[dateSlots.length-1]
    const data = useMemo(() => generateDates(new Date(), lastDate),[lastDate])


    const [sel,setSel] = useState( startOfDay(dateSlots[0]) )
    const circleColor = (date: Date) => { return sel.valueOf()-date.valueOf()==0?'gold':(startOfDay(new Date()).valueOf()-date.valueOf()==0?'#00ffff':'white')}

    const [dayTime,setDayTime] = useState(
        (dateSlots[0].valueOf()-addHours(startOfDay(dateSlots[0]),12).valueOf()<0)?
        1:((dateSlots[0].valueOf()-addHours(startOfDay(dateSlots[0]),16).valueOf()<0)?2:3)
    )
    function twoSignNum(num: number):string {
        return num<10?'0'+num:num.toString()
    }

    const getDay = (day: number): string => {switch(day) {
        case 1: return 'M'
        case 2: return 'T'
        case 3: return 'W'
        case 4: return 'T'
        case 5: return 'F'
        case 6: return 'S'
        case 0: return 'S'
        default: return ''
    }}

    function getTime( date: Date ) {
        const times: {date: Date, key: number}[]=[]
        let n=1
        for(let i=0;i<dateSlots.length;++i)
            if(startOfDay(dateSlots[i]).valueOf()-date.valueOf()==0)
            {
                if(dateSlots[i].valueOf() - addHours(date,12).valueOf()<0)
                {
                    if(dayTime==1)
                    {
                        times.push({date:dateSlots[i],key:n})
                        ++n;
                    }
                    else
                    continue
                }
                else if(dateSlots[i].valueOf() - addHours(date,16).valueOf()<0)
                {
                    if(dayTime==2)
                    {
                        times.push({date:dateSlots[i],key:n})
                        ++n;
                    }
                    else
                    continue
                }
                else
                {
                    if(dayTime==3)
                    {
                        times.push({date:dateSlots[i],key:n})
                        ++n;
                    }
                    else
                    continue
                }
            }
        return times
    }

    const renderTimeItem = (timeArr: {date: Date, key: number}[]) => {
        const itemArr = []
        for(let i=0;i<timeArr.length;++i)
            itemArr.push(
            <TouchableOpacity key={i} onPress={() => setTimeSel(timeArr[i].date)}>    
                <Text style={[styles.slotsText, {backgroundColor: timeArr[i].date.valueOf()-timeSel.valueOf()==0?'blue':'gray',
                        color: timeArr[i].date.valueOf()-timeSel.valueOf()==0?'white':'black'}]}>
                    {twoSignNum(timeArr[i].date.getUTCHours())}:{twoSignNum(timeArr[i].date.getUTCMinutes())}
                </Text>
            </TouchableOpacity>
            )
        return itemArr
    }

    const [timeSel, setTimeSel] = useState(dateSlots[0])

    

    return (
        <View style={styles.page}>
            <View style={styles.scrollArea}>
                <FlatList data={data}
                showsHorizontalScrollIndicator={false}
                renderItem={({item}) => {
                    return (
                        <View style={styles.itemSt}>
                            <FlatList data={item.week}
                            numColumns={7}
                            scrollEnabled={false}
                            renderItem={
                                ({item}) => (
                                    <View style={styles.daySt}>
                                        <Text style={styles.dayText}>
                                            {getDay(item.key)}
                                        </Text>
                                        <TouchableOpacity style={styles.dayNum} onPress={() => 
                                        (startOfDay(new Date()).valueOf()-item.date.valueOf()<=0?setSel(item.date):(null))}>
                                            <Text style={[styles.dayNum, styles.dayNumText,
                                                {backgroundColor: circleColor(item.date)}]}>
                                                {item.date.getUTCDate()}
                                            </Text>
                                        </TouchableOpacity>
                                    </View>
                                )
                            } />
                        </View>
                    )
                }}
                horizontal
                pagingEnabled
                />
            </View>
            <View style={styles.DayTimeCont}>
                <TouchableOpacity style={[styles.DayTimeItem,
                {backgroundColor: dayTime==1?'gold':'white'}]} onPress={() => setDayTime(1)}>
                    <Icon name={"day-haze"} size={30} style={{marginVertical:10}}/>
                    <Text style={styles.DayTimeText}>
                        Утро
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.DayTimeItem,
                {backgroundColor: dayTime==2?'gold':'white'}]} onPress={() => setDayTime(2)}>
                    <Icon name={'day-sunny'} size={30} style={{marginVertical:10}}/>
                    <Text style={styles.DayTimeText}>
                        День
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.DayTimeItem,
                {backgroundColor: dayTime==3?'gold':'white'}]} onPress={() => setDayTime(3)}>
                    <Icon name={"night-clear"} size={30} style={{marginVertical:10}}/>
                    <Text style={styles.DayTimeText}>
                        Вечер
                    </Text>
                </TouchableOpacity>
            </View>
            <ScrollView contentContainerStyle={styles.slotsCont}>
                {renderTimeItem(getTime(sel))}
            </ScrollView>
            <TouchableOpacity style={styles.buttonSt} onPress={() => {setDateReg(
                twoSignNum(timeSel.getUTCHours())+':'+
                twoSignNum(timeSel.getUTCMinutes())+' '+
                twoSignNum(timeSel.getUTCDate())+'.'+
                twoSignNum(timeSel.getUTCMonth()+1)+'.'+
                timeSel.getUTCFullYear().toString()
            ); dateClose()}}>
                <Text style={styles.buttonText}>
                    Выбрать
                </Text>
            </TouchableOpacity>
        </View>
    );
};

const {width,height} = Dimensions.get('screen')

const styles = StyleSheet.create({
    page: {
        height: height/1.7,
    },
    buttonSt: {
        position: 'absolute',
        bottom: 70,
        width: '80%',
        height: '10%',
        alignSelf: 'center',
        backgroundColor: 'gold',
        borderRadius: 15
    },
    buttonText: {
        color: 'black',
        textAlign: 'center',
        textAlignVertical: 'center',
        height: '100%',
        fontSize: 18
    },
    scrollArea: {
        width: '100%',
        paddingHorizontal: 20,
        paddingTop: 20
    },
    itemSt: {
        width: width*0.9
    },
    daySt: {
        width: width*0.9/7
    },
    dayText: {
        textAlign: 'center',
        fontSize: 16,
        color: 'black'
    },
    dayNum: {
        height: width*0.9/7-10,
        borderRadius: width*0.9/7-10,
        margin: 5,
    },
    dayNumText: {
        textAlign: 'center',
        textAlignVertical: 'center',
        fontSize: 20,
        color: 'black',
        borderRadius: width*0.9/7-10,
        margin: 0,
    },
    DayTimeCont: {
        flexDirection: 'row',
        marginHorizontal: 20,
        marginTop: 30,
        justifyContent: 'space-evenly',
        height: 50,
    },
    DayTimeItem: {
        width: width*0.9/3.5,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        borderRadius: 20,
        },
    DayTimeText: {
        textAlignVertical: 'center',
        color: 'black',
        fontSize: 16,
    },
    slotsCont: {
        margin: 20,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        height: 120
    },
    slotsText: {
        marginVertical: 10,
        width: width*0.9/3.5,
        backgroundColor: 'red',
        height: 40,
        textAlign: 'center',
        textAlignVertical: 'center',
        borderRadius: 10,
    },
});