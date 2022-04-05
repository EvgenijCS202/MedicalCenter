import React from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';
import {globalStyles} from '../../constants/globalStyles';
import {height, width} from '../../constants';
import {white} from '../../constants/colors';
import DescriptionCard from '../../components/baseComponents/buttons/DescriptionCard';
import SubmitButton from '../../components/baseComponents/buttons/SubmitButton';
interface IServiceScreen {
  navigation: any;
  route: {
    params: {
      data: {
        type: 'service';
        name: string;
        description: String;
        image: any;
        info1: string;
        info2: string;
        info3: string;
        price: number;
      };
    };
  };
}
export default function ServiceScreen({navigation, route}: IServiceScreen) {
  return (
    <View style={{backgroundColor: white, height: '100%'}}>
      <View style={{flex: 1}}>
        <View style={{flexDirection: 'row', marginVertical: 24}}>
          <Image
            style={{width: 60, height: 60, marginHorizontal: 16}}
            source={route.params.data.image}
          />
          <Text
            style={[
              globalStyles.H2,
              {textAlignVertical: 'center', marginHorizontal: 10},
            ]}>
            {route.params.data.name}
          </Text>
        </View>
        <Text style={[globalStyles.text, styles.description]}>
          {route.params.data.description}
        </Text>
        <View style={styles.descCards}>
          <DescriptionCard
            title="Длительность обследования"
            text={route.params.data.info1}
            size={{width: (width - 48) / 3, height: (width - 48) / 3}}
          />
          <DescriptionCard
            title="Подготовка заключения"
            text={route.params.data.info2}
            size={{width: (width - 48) / 3, height: (width - 48) / 3}}
          />
          <DescriptionCard
            title="Возраст"
            text={route.params.data.info3}
            size={{width: (width - 48) / 3, height: (width - 48) / 3}}
          />
        </View>
      </View>
      <SubmitButton
        text="Записаться на услугу"
        style={styles.button}
        onPress={() => navigation.navigate('Date', {data: route.params.data})}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  description: {
    color: '#7B8088',
    marginHorizontal: 16,
    textAlign: 'justify',
    lineHeight: 22,
  },
  descCards: {
    marginTop: 28,
    flexDirection: 'row',
    marginHorizontal: 16,
    justifyContent: 'space-between',
  },
  button: {
    marginHorizontal: 16,
    marginBottom: 20,
  },
});
