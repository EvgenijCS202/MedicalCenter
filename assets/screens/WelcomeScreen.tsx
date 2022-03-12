import React, {useState} from 'react';
import { View, TouchableOpacity, FlatList, Text, StyleSheet} from 'react-native';

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
              <TouchableOpacity onPress={() => {
                navigation.navigate(
                  "Registration", {data: item}
              )}}>
                  <View style={styles.itemStyle}>
                    <Text style={styles.textStyle}>{item.title}</Text>
                  </View>
              </TouchableOpacity>
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
        textStyle: {
            alignSelf: "center",
        },
        titleSt: {
            textAlign: 'center',
            fontSize: 20,
            fontWeight: '900',
            color: 'black'
        }
    });