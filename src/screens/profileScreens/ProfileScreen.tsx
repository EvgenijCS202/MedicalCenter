import {Image, StyleSheet, Text, View} from 'react-native';
import React, {useContext, useState} from 'react';
import ProfileContext from '../../contexts/ProfileContext';
import {globalStyles} from '../../constants/globalStyles';
import {gray, white} from '../../constants/colors';
import EditButton from '../../components/baseComponents/buttons/EditButton';
import SettingsSwitchButton from '../../components/baseComponents/buttons/SettingsSwitchButton';

const ProfileScreen = ({navigation}: any) => {
  const [context, setContext] = useContext(ProfileContext);
  const [pushAlert, setPushAlert] = useState(true);
  const [SMSAlert, setSMSAlert] = useState(true);
  return (
    <View style={{height: '100%', backgroundColor: white}}>
      <View style={styles.headerContainer}>
        <Image source={context.image} style={styles.image} />
        <Text style={[globalStyles.H2, {marginTop: 12}]}>{context.name}</Text>
        <Text style={[globalStyles.H3, {color: gray, marginTop: 4}]}>
          {context.mail}
        </Text>
        <EditButton
          text="Редактировать профиль"
          onPress={() => {
            navigation.navigate('ProfileEdit');
          }}
          style={styles.button}
        />
      </View>
      <Text style={[globalStyles.smallText, styles.settingsText]}>
        Настройки уведомлений
      </Text>
      <View style={styles.push}>
        <SettingsSwitchButton state={pushAlert} setState={setPushAlert} />
        <Text style={[globalStyles.text, {marginLeft: 10}]}>
          Push - уведомления
        </Text>
      </View>
      <View style={styles.sms}>
        <SettingsSwitchButton state={SMSAlert} setState={setSMSAlert} />
        <Text style={[globalStyles.text, {marginLeft: 10}]}>
          SMS уведомления
        </Text>
      </View>
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  headerContainer: {
    marginTop: 24,
    alignItems: 'center',
  },
  image: {
    width: 100,
    height: 100,
  },
  button: {
    marginTop: 19,
    marginBottom: 42,
  },
  settingsText: {
    backgroundColor: gray,
    color: white,
    padding: 16,
    fontWeight: '700',
  },
  push: {
    marginHorizontal: 16,
    flexDirection: 'row',
    marginTop: 24,
    alignItems: 'center',
  },
  sms: {
    marginHorizontal: 16,
    flexDirection: 'row',
    marginTop: 16,
    alignItems: 'center',
  },
});
