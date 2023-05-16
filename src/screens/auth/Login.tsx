import {StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useCallback, useMemo, useState} from 'react';

import {AppTheme, normalize, Style} from '../../style/style';
import CustomButton from '../../components/CustomButton';
import {style} from '../../style';
import {useNavigation, useTheme} from '@react-navigation/native';
import {NavigationType} from '../../types/NavigationType';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {MainIcon} from '../../icons';
import {useLoginMutation} from '../../api/userApi';
import {toastEnum, ToastShow} from '../../utils/toastShow';

const Login: React.FC = () => {
  const {colors, dark} = useTheme() as AppTheme;
  const navigation = useNavigation<NativeStackNavigationProp<NavigationType>>();
  const [phone, setPhone] = useState<string>('');
  const [loginWithPhone, result] = useLoginMutation();

  const _post_Data = useCallback(async () => {
    try {
      const val = await loginWithPhone(phone).unwrap();
      console.log(val);
      if (val.success) {
        //type 1 bulsa user avval regdan utgan hisoblanadi agar 0 bulsa yangi hisoblanadi
        navigation.navigate('ConfirmationCode', {
          phone: phone,
          type: val?.data?.isAvailable ? 0 : 1,
        });
      }
    } catch (error) {
      ToastShow(false, String(error), toastEnum.tomato, dark);
    }
  }, [dark, loginWithPhone, navigation, phone]);

  const renderPhoneInput = useMemo(() => {
    return (
      <View>
        <TextInput
          value={phone}
          selectionColor={Style.buttonColor}
          keyboardType="phone-pad"
          placeholder="Telefon raqamingizni kiriting"
          onChangeText={text => setPhone(text)}
          placeholderTextColor={Style.placeholderColor}
          maxLength={12}
          style={[
            styles.input,
            // eslint-disable-next-line react-native/no-inline-styles
            style.night_of_light_theme(dark),
          ]}
        />
      </View>
    );
  }, [dark, phone]);

  return (
    <View style={[styles.container, {backgroundColor: colors.background}]}>
      <View style={styles.main}>
        <View style={styles.mainInside}>
          <MainIcon />
        </View>
        <View>
          <Text style={[styles.text, {color: colors.text}]}>
            {/* Dasturga kirish */}
            Dasturni testlash kerak.
          </Text>
          <View style={{marginTop: normalize(15)}}>{renderPhoneInput}</View>

          <View style={{marginTop: normalize(15)}}>
            <CustomButton
              loading={result.isLoading}
              disabled={phone.toString().length !== 12}
              onPress={_post_Data}
              color={Style.buttonColor}
              textColor={'#fff'}
              title="Kirish"
            />
          </View>
          {/* <View style={styles.forgetContainer}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('ForgetPassword');
              }}>
              <Text style={styles.forgotPassword}>Parolni unutdingizmi?</Text>
            </TouchableOpacity>
          </View> */}
        </View>

        {/* <View style={styles.footer}>
          <Text style={[style.text, {color: colors.text}]}>
            Hisobingiz yo'qmi ?
          </Text>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => {
              navigation.navigate('Register');
            }}>
            <Text
              style={[
                style.text,
                {
                  color: Style.orangeColor,
                  marginLeft: normalize(5),
                  fontFamily: Style.fontFamily.bold,
                },
              ]}>
              Ro'yxatdan o'tish
            </Text>
          </TouchableOpacity>
        </View> */}
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mainInside: {alignSelf: 'center'},
  main: {
    width: '85%',
    alignSelf: 'center',

    flex: 1,
    justifyContent: 'center',
  },
  text: {
    fontSize: Style.fontSize.medium,
    fontFamily: Style.fontFamily.bold,
    marginLeft: 5,
  },
  or: {marginTop: normalize(25), alignSelf: 'center'},
  forgetContainer: {marginTop: normalize(15), alignItems: 'flex-end'},
  forgotPassword: {
    fontSize: Style.fontSize.small,
    fontFamily: Style.fontFamily.bold,
    color: Style.orangeColor,
  },
  btnn: {
    alignSelf: 'center',
    width: '80%',
  },
  footer: {
    marginTop: normalize(25),
    alignSelf: 'center',
    flexDirection: 'row',
  },
  btnConatiner: {
    flexDirection: 'row',
    marginTop: normalize(15),
    alignItems: 'center',
    justifyContent: 'space-around',
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
