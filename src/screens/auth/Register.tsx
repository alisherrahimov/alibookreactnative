import {ScrollView, StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useEffect, useMemo, useState} from 'react';

import {AppTheme, normalize, Style} from '../../style/style';
import CustomButton from '../../components/CustomButton';
import {useNavigation, useTheme} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {NavigationType} from '../../types/NavigationType';
import {MainIcon} from '../../icons';
import {style} from '../../style';

const Register = () => {
  const {colors, dark} = useTheme() as AppTheme;
  const navigation = useNavigation<NativeStackNavigationProp<NavigationType>>();

  const [phone, setPhone] = useState<number>();
  const [password, setPassword] = useState<string>('');
  const [username, setUsername] = useState<string>('');
  const [disabled, setDisabled] = useState<boolean>(false);

  const _postData = async () => {};

  const renderUserName = useMemo(() => {
    return (
      <View>
        <TextInput
          value={username}
          selectionColor={Style.buttonColor}
          placeholder={'Tahallusni kiriting'}
          onChangeText={text => setUsername(text)}
          placeholderTextColor={Style.placeholderColor}
          style={[styles.input, style.night_of_light_theme(dark)]}
        />
      </View>
    );
  }, [dark, username]);
  const renderPhoneInput = useMemo(() => {
    return (
      <View>
        <TextInput
          value={phone?.toString()}
          keyboardType="number-pad"
          maxLength={12}
          selectionColor={Style.buttonColor}
          placeholder={'Telefon raqamingizni kiriting'}
          onChangeText={text => setPhone(Number(text))}
          placeholderTextColor={Style.placeholderColor}
          style={[styles.input, style.night_of_light_theme(dark)]}
        />
      </View>
    );
  }, [dark, phone]);
  const renderPassword = useMemo(() => {
    return (
      <View>
        <TextInput
          value={password}
          selectionColor={Style.buttonColor}
          placeholder={'Parolni kiriting'}
          onChangeText={text => setPassword(text)}
          placeholderTextColor={Style.placeholderColor}
          style={[
            styles.input,
            {
              backgroundColor: dark ? Style.darkTextInputColor : '#F5F5FA',
              color: dark ? '#fff' : Style.darkColor.borderColor,
            },
          ]}
        />
      </View>
    );
  }, [dark, password]);

  useEffect(() => {
    if (
      username.length > 0 &&
      phone?.toString().length === 12 &&
      password.length > 6
    ) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [password, phone, username]);

  return (
    <View style={[styles.container, {backgroundColor: colors.background}]}>
      <ScrollView>
        <View style={{width: '85%', alignSelf: 'center'}}>
          <View style={{alignSelf: 'center', marginTop: normalize(50)}}>
            <MainIcon />
          </View>
          <View>
            <Text style={[styles.text, {color: colors.text}]}>
              Ro'yxatdan o'tish
            </Text>
            <View style={{marginTop: normalize(15)}}>{renderUserName}</View>
            <View style={{marginTop: normalize(15)}}>{renderPhoneInput}</View>
            <View style={{marginTop: normalize(15)}}>{renderPassword}</View>

            <View style={{marginTop: normalize(15)}}>
              <CustomButton
                disabled={disabled}
                onPress={_postData}
                color={Style.buttonColor}
                textColor={'#fff'}
                title="Ro'yxatdan o'tish"
              />
            </View>
            <View style={{marginTop: normalize(15)}}>
              <CustomButton
                onPress={() => navigation.goBack()}
                color={dark ? Style.darkTextInputColor : '#fff'}
                textColor={dark ? '#fff' : Style.buttonColor}
                title="Orqaga qaytish"
                borderColor={dark ? '#fff' : Style.buttonColor}
                borderWidth={1}
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Register;

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
