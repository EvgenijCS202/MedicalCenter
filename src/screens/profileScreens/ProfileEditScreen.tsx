import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import React, {useContext, useState} from 'react';
import ProfileContext from '../../contexts/ProfileContext';
import {lightBlue, white} from '../../constants/colors';
import ProfileInput from '../../components/baseComponents/input/ProfileInput';
import {ScrollView} from 'react-native-gesture-handler';
import SubmitButton from '../../components/baseComponents/buttons/SubmitButton';

const ProfileEditScreen = ({navigation}: any) => {
  const [context, setContext] = useContext(ProfileContext);
  const [name, setName] = useState(context.name);
  const [mail, setMail] = useState(context.mail);
  const [phoneNumber, setPhoneNumber] = useState(context.phoneNumber);
  return (
    <ScrollView style={{backgroundColor: white}}>
      <View style={styles.headerContainer}>
        <Image source={context.image} style={styles.image} />
        <Pressable style={{marginTop: 12}}>
          <Text style={{color: lightBlue}}>Изменить фото</Text>
        </Pressable>
      </View>
      <View style={{marginHorizontal: 16, marginTop: 10}}>
        <ProfileInput stateName="Имя" state={name} setState={setName} />
        <ProfileInput stateName="Дата рождения" />
        <ProfileInput stateName="Пол" />
        <ProfileInput stateName="Эл. почта" state={mail} setState={setMail} />
        <ProfileInput
          stateName="Телефон"
          state={phoneNumber}
          setState={setPhoneNumber}
        />
        <SubmitButton
          text="Сохранить"
          style={{marginVertical: 22}}
          onPress={() => {
            setContext({
              image: context.image,
              name: name,
              mail: mail,
              phoneNumber: phoneNumber,
            });
            navigation.navigate('ProfileMain');
          }}
        />
      </View>
    </ScrollView>
  );
};

export default ProfileEditScreen;

const styles = StyleSheet.create({
  headerContainer: {
    marginTop: 24,
    alignItems: 'center',
  },
  image: {
    width: 160,
    height: 160,
  },
});
