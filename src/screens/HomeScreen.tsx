import React, {useState} from 'react';
import { View, Pressable, FlatList, Text, StyleSheet} from 'react-native';
import { globalStyles } from '../constants/globalStyles';

export default function HomeScreen( {navigation}:any ) {
    const [List, setList] = useState([
        {
            title: 'Массаж',
            info: 'Одна из мануальных техник, совокупность приёмов механического и рефлекторного воздействия на ткани и органы в виде растирания, давления, вибрации, проводимых непосредственно на поверхности тела человека как руками, так и специальными аппаратами через воздушную, водную или иную среду с целью достижения лечебного или иного эффекта.',
            key: 1,
        },
        {
            title: 'Name2',
            info: 'Info2',
            key: 2
        },
    ]);

    return (
      <View>
          <View style={{height: '100%'}}>
            <FlatList data={List} renderItem={({item}) => (
              <Pressable onPress={() => {
                navigation.navigate(
                  "Service", {data: item}
              )}}>
                <Text style={[globalStyles.subTitle, styles.itemStyle, {textAlignVertical: 'center'}]}>
                  {item.title}
                </Text>
              </Pressable>
            ) }/>
          </View>
      </View>
    );
  };

  const styles = StyleSheet.create({
        itemStyle: {
            margin:10,
            borderWidth: 1,
            borderRadius: 5,
            height: 40,
        },
    });