import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useCallback} from 'react';
import Header from '../components/Header';
import {AppTheme, normalize, Style} from '../style/style';
import CustomButton from '../components/CustomButton';
import {useNavigation, useTheme} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {NavigationType} from '../types/NavigationType';
import {useAppSelector} from '../hooks/reduxHook';
import {setItem} from '../utils/storage';

const Settings = () => {
  const navigation = useNavigation<NativeStackNavigationProp<NavigationType>>();
  const {colors, dark} = useTheme() as AppTheme;
  const {user} = useAppSelector(state => state);

  const onLogOut = useCallback(() => {
    try {
      setItem('token', '');
      navigation.navigate('Login');
    } catch (error) {}
  }, [navigation]);

  return (
    <View style={[styles.container, {backgroundColor: colors.background}]}>
      <Header
        title="Settings"
        onPress={() => {
          navigation.goBack();
        }}
      />
      <View
        style={{
          marginHorizontal: normalize(25),
          marginTop: normalize(10),
          marginBottom: normalize(10),
        }}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <View>
            <Image
              source={{
                uri: user.image,
              }}
              style={styles.image}
            />
          </View>
          <View style={{marginLeft: normalize(15), justifyContent: 'center'}}>
            <Text
              style={[
                styles.title,
                {fontFamily: Style.fontFamily.bold, color: colors.text},
              ]}>
              {user.username ?? 'xxx'}
            </Text>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('User');
              }}>
              <Text style={[styles.author]}>View Profile</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View
        style={[
          styles.free,
          {backgroundColor: colors.textInputBackgroundColor},
        ]}
      />
      <TouchableOpacity
        style={{
          marginHorizontal: normalize(25),
          marginTop: normalize(10),
          marginBottom: normalize(10),
        }}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <View style={{justifyContent: 'center'}}>
            <Text style={[styles.title, {color: colors.text}]}>
              Notifications
            </Text>
          </View>
        </View>
      </TouchableOpacity>
      <View
        style={[
          styles.free,
          {height: 3, backgroundColor: colors.textInputBackgroundColor},
        ]}
      />
      <TouchableOpacity
        style={{
          marginHorizontal: normalize(25),
          marginTop: normalize(10),
          marginBottom: normalize(10),
        }}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <View style={{justifyContent: 'center'}}>
            <Text style={[styles.title, {color: colors.text}]}>
              Data and Storages
            </Text>
          </View>
        </View>
      </TouchableOpacity>
      <View
        style={[
          styles.free,
          {backgroundColor: colors.textInputBackgroundColor},
        ]}
      />
      <TouchableOpacity
        style={{
          marginHorizontal: normalize(25),
          marginTop: normalize(10),
          marginBottom: normalize(10),
        }}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <View style={{justifyContent: 'center'}}>
            <Text style={[styles.title, {color: colors.text}]}>
              Subscription
            </Text>
          </View>
        </View>
      </TouchableOpacity>
      <View
        style={[
          styles.free,
          {backgroundColor: colors.textInputBackgroundColor, height: 3},
        ]}
      />
      <TouchableOpacity
        style={{
          marginHorizontal: normalize(25),
          marginTop: normalize(10),
          marginBottom: normalize(10),
        }}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <View style={{justifyContent: 'center'}}>
            <Text style={[styles.title, {color: colors.text}]}>
              Linked Account
            </Text>
          </View>
        </View>
      </TouchableOpacity>
      <View
        style={[
          styles.free,
          {backgroundColor: colors.textInputBackgroundColor},
        ]}
      />
      <TouchableOpacity
        style={{
          marginHorizontal: normalize(25),
          marginTop: normalize(10),
          marginBottom: normalize(10),
        }}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <View style={{justifyContent: 'center'}}>
            <Text style={[styles.title, {color: colors.text}]}>
              About Audibooks
            </Text>
          </View>
        </View>
      </TouchableOpacity>
      <View
        style={[
          styles.free,
          {backgroundColor: dark ? '#1C1C4D' : '#fff', height: 3},
        ]}
      />
      <View style={{alignItems: 'center', marginTop: normalize(20)}}>
        <CustomButton
          color={dark ? colors.background : '#fff'}
          textColor={Style.orangeColor}
          borderColor={Style.orangeColor}
          title="Log out"
          borderWidth={1}
          width={'80%'}
          onPress={onLogOut}
        />
      </View>
    </View>
  );
};

export default Settings;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  free: {
    height: normalize(30),
    backgroundColor: '#F5F5FA',
    width: '100%',
  },
  image: {
    width: normalize(70),
    height: normalize(70),
    resizeMode: 'cover',
    borderRadius: normalize(40),
  },
  title: {
    fontSize: Style.fontSize.small,
    fontFamily: Style.fontFamily.light,
    color: '#000',
  },
  author: {
    fontSize: Style.fontSize.small - 3,
    fontFamily: Style.fontFamily.medium,
    color: Style.buttonColor,
  },
});
