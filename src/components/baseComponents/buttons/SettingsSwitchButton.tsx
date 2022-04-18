import {Animated, Pressable, View} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {blue, lightBlue, white} from '../../../constants/colors';
interface ISettingsSwitchButton {
  state: boolean;
  setState: any;
  size?: {width: number; height: number};
}
const SettingsSwitchButton = ({
  state,
  setState,
  size,
}: ISettingsSwitchButton) => {
  let buttonWidth = 51;
  let buttonHeight = 31;
  if (size != undefined) {
    buttonWidth = size.width;
    buttonHeight = size.height;
  }

  if (state)
    return (
      <Pressable
        style={{borderRadius: (buttonHeight - 4) / 2}}
        onPress={() => setState(false)}>
        <LinearGradient
          style={{
            padding: 2,
            width: buttonWidth,
            borderRadius: (buttonHeight - 4) / 2,
          }}
          colors={[blue, lightBlue]}
          useAngle={true}
          angle={90}>
          <View
            style={{
              width: buttonHeight - 4,
              height: buttonHeight - 4,
              backgroundColor: white,
              borderRadius: (buttonHeight - 4) / 2,
              marginLeft: buttonWidth - buttonHeight,
            }}></View>
        </LinearGradient>
      </Pressable>
    );
  else
    return (
      <Pressable
        style={{borderRadius: (buttonHeight - 4) / 2}}
        onPress={() => setState(true)}>
        <View
          style={[
            {
              padding: 2,
              width: buttonWidth,
              borderRadius: (buttonHeight - 4) / 2,
              backgroundColor: 'rgba(120, 120, 128, 0.16)',
            },
          ]}>
          <Animated.View
            style={{
              width: buttonHeight - 4,
              height: buttonHeight - 4,
              backgroundColor: white,
              borderRadius: (buttonHeight - 4) / 2,
              marginLeft: 0,
            }}></Animated.View>
        </View>
      </Pressable>
    );
};

export default SettingsSwitchButton;
