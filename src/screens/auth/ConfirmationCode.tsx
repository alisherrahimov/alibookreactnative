import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useCallback} from 'react';

import {normalize, Style} from '../../style/style';

import CustomButton from '../../components/CustomButton';
import {style} from '../../style';
import {useNavigation, useRoute, useTheme} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {NavigationType} from '../../types/NavigationType';
import {MainIcon} from '../../icons';

import {useVerifyCodeMutation} from '../../api/userApi';
import {setItem} from '../../utils/storage';
import {toastEnum, ToastShow} from '../../utils/toastShow';

const ConfirmationCode = () => {
  const route = useRoute();
  const {dark} = useTheme();
  const {phone, type} = route.params;
  const [code, setCode] = React.useState('');
  const navigation = useNavigation<NativeStackNavigationProp<NavigationType>>();
  const [verifyCode, result] = useVerifyCodeMutation();
  const _postData = useCallback(async () => {
    try {
      const val = await verifyCode({code: code, phone: phone}).unwrap();
      console.log(val);
      if (val.success && val.error === null) {
        setItem(val?.token, 'token');
        if (type === 0) {
          navigation.navigate('SelectTopic');
        } else {
          navigation.navigate('BottomTab');
        }
      }
    } catch (error) {
      ToastShow(false, 'here is your message', toastEnum.tomato, dark);
    }
  }, [verifyCode, code, phone, type, navigation, dark]);

  return (
    <View
      style={[
        styles.container,
        {backgroundColor: dark ? Style.darkBackgroundColor : '#fff'},
      ]}>
      <View style={{width: '85%', alignSelf: 'center'}}>
        <View style={{alignSelf: 'center', marginTop: normalize(50)}}>
          <MainIcon />
        </View>
        <View>
          <Text
            style={[
              styles.text,
              {color: dark ? '#fff' : Style.darkColor.borderColor},
            ]}>
            Kodni Tasdiqlash
          </Text>
          <View style={{marginTop: normalize(15)}}>
            <Text
              style={[
                style.text,
                {
                  marginLeft: 8,
                  color: dark ? '#fff' : Style.darkColor.borderColor,
                },
              ]}>
              Biz shu email {'email'} manzilingizga kodni yubordik, iltimos
              kodni tasdiqlang!
            </Text>
          </View>
          <View style={{marginTop: normalize(15)}}>
            <View>
              <TextInput
                maxLength={4}
                selectionColor={Style.buttonColor}
                placeholder={'Kodni kiriting'}
                onChangeText={text => setCode(text)}
                placeholderTextColor={Style.placeholderColor}
                keyboardType="number-pad"
                style={[styles.input, style.night_of_light_theme(dark)]}
              />
            </View>
          </View>
          <View style={styles.main}>
            <Text
              style={[
                style.text,
                {
                  marginLeft: 8,
                  color: dark ? '#fff' : Style.darkColor.borderColor,
                },
              ]}>
              Kodni olmadingizmi?
            </Text>
            <TouchableOpacity
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                marginRight: 5,
              }}>
              <Text
                style={[
                  style.text,
                  {
                    color: Style.orangeColor,
                    fontFamily: Style.fontFamily.bold,
                  },
                ]}>
                Yana yuborish
              </Text>
            </TouchableOpacity>
          </View>
          <View style={{marginTop: normalize(15)}}>
            <CustomButton
              onPress={() => {
                _postData();
              }}
              loading={result.isLoading}
              color={Style.buttonColor}
              textColor={'#fff'}
              title="Tasdiqlash"
            />
          </View>
          <View style={{marginTop: normalize(15)}}>
            <CustomButton
              onPress={() => navigation.goBack()}
              color={dark ? Style.darkTextInputColor : '#fff'}
              textColor={dark ? '#fff' : Style.buttonColor}
              title="Orqaga"
              borderColor={dark ? '#fff' : Style.buttonColor}
              borderWidth={1}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default ConfirmationCode;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  main: {
    marginTop: normalize(15),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
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
  input: {
    height: normalize(50),
    borderRadius: 10,
    width: '100%',
    paddingLeft: normalize(10),
    fontSize: Style.fontSize.small,
    fontFamily: Style.fontFamily.medium,
  },
});
