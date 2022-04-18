import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import Appointment from '../../components/baseComponents/appointments/Appointment';
import ResultTitle from '../../components/screensComponents/resultScreen/ResultTitle';
import {white} from '../../constants/colors';
import RateButton from '../../components/baseComponents/buttons/RateButton';
import {globalStyles} from '../../constants/globalStyles';
import FileButton from '../../components/baseComponents/buttons/FileButton';
import SubmitButton from '../../components/baseComponents/buttons/SubmitButton';
import Stars from '../../components/baseComponents/Stars';
interface IResultScreen {
  route: {
    params: {
      appointment: Appointment;
      new: boolean;
    };
  };
}
const ResultScreen = ({route}: IResultScreen) => {
  const [rate, setRate] = useState(0);
  const [isRating, setIsRating] = useState(false);
  const [rateChoice, setRateChoice] = useState(5);

  //Нужно переделать на local storage, Чтобы сохранялась оценка
  if (route.params.new == true) {
    setRate(0);
    route.params.new = false;
  }

  let rateJSX = (
    <RateButton style={{marginLeft: 16}} onPress={() => setIsRating(true)} />
  );
  if (rate != 0)
    rateJSX = (
      <View style={{marginHorizontal: 16}}>
        <Text style={[globalStyles.H3, {marginBottom: 10}]}>Ваша оценка:</Text>
        <Stars size={40} rate={rate} />
      </View>
    );

  if (isRating)
    return (
      <View style={{height: '100%', backgroundColor: white}}>
        <ResultTitle appointment={route.params.appointment} />
        <Stars
          style={{alignSelf: 'center', marginBottom: 30}}
          size={60}
          rate={rateChoice}
          onPress={setRateChoice}
        />
        <SubmitButton
          style={{marginHorizontal: 16}}
          text="Подтвердить"
          onPress={() => {
            setRate(rateChoice);
            setIsRating(false);
          }}
        />
      </View>
    );
  else
    return (
      <View style={{height: '100%', backgroundColor: white}}>
        <ResultTitle appointment={route.params.appointment} />
        {rateJSX}
        <Text style={[globalStyles.H3, styles.text]}>Результаты</Text>
        <View style={{flexDirection: 'row', marginLeft: 23, marginTop: 20}}>
          <FileButton onPress={() => {}} description="Заключение" />
          <FileButton
            style={{marginLeft: 32}}
            onPress={() => {}}
            description="Результаты"
          />
        </View>
      </View>
    );
};

export default ResultScreen;

const styles = StyleSheet.create({
  text: {
    marginHorizontal: 16,
    marginTop: 36,
  },
});
