import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {normalize, Style} from '../../style/style';
import CustomButton from '../../components/CustomButton';
import {useNavigation, useTheme} from '@react-navigation/native';
import {NavigationType} from '../../types/NavigationType';
import BackgroundImage from '../../components/BackgroundImage';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

const Welcome = () => {
  const {dark} = useTheme();
  const navigation = useNavigation<NativeStackNavigationProp<NavigationType>>();
  return (
    <View
      style={[
        styles.container,
        {backgroundColor: dark ? Style.darkBackgroundColor : '#fff'},
      ]}>
      <BackgroundImage />
      <View
        style={{
          width: '85%',
          alignSelf: 'center',
          flex: 1,
          justifyContent: 'center',
        }}>
        <View style={{marginTop: normalize(60)}}>
          <View>
            <Text
              style={[
                styles.welcome,
                {color: dark ? '#fff' : Style.orangeColor},
              ]}>
              XUSH KELIBSIZ !
            </Text>
          </View>
          <View>
            <Text
              style={[
                styles.find,
                {color: dark ? '#fff' : Style.darkColor.borderColor},
              ]}>
              Siz bizning dasturimizda{'\n'}o'zingizga yoqadigan kitoblarni
              {'\n'}albatta topasiz!
            </Text>
          </View>

          <View style={{marginTop: normalize(15)}}>
            <CustomButton
              onPress={() => {
                navigation.navigate('SelectTopic');
              }}
              color={Style.buttonColor}
              textColor={'#fff'}
              title="Davom etish"
            />
          </View>
          <View style={{marginTop: normalize(15)}}>
            <CustomButton
              onPress={() =>
                navigation.reset({routes: [{name: 'Home'}], index: 0})
              }
              color={dark ? Style.darkTextInputColor : '#fff'}
              textColor={dark ? '#fff' : Style.buttonColor}
              title="O'tkazib yuborish"
              borderColor={dark ? '#fff' : Style.buttonColor}
              borderWidth={1}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  find: {
    fontSize: Style.fontSize.xxlarge,
    fontFamily: Style.fontFamily.medium,
    color: Style.buttonColor,
  },
  welcome: {
    fontSize: Style.fontSize.xxlarge,
    fontFamily: Style.fontFamily.bold,
    color: Style.orangeColor,
  },
  by: {
    fontSize: Style.fontSize.small,
    fontFamily: Style.fontFamily.medium,
    color: Style.buttonColor,
  },
  text: {
    fontSize: Style.fontSize.medium,
    fontFamily: Style.fontFamily.bold,
    marginLeft: 5,
  },
  forgotPassword: {
    fontSize: Style.fontSize.small,
    fontFamily: Style.fontFamily.bold,
    color: Style.orangeColor,
  },
  touch: {
    width: normalize(60),
    height: normalize(50),
    borderRadius: normalize(8),
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: Style.buttonColor,
    borderWidth: 1,
  },
});
