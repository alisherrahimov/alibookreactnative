import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Header from '../components/Header';
import {useNavigation, useTheme} from '@react-navigation/native';
import {AppTheme, normalize, Style} from '../style/style';

import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {NavigationType} from '../types/NavigationType';
import {useAppSelector} from '../hooks/reduxHook';

const User = () => {
  const navigation = useNavigation<NativeStackNavigationProp<NavigationType>>();
  const {colors, dark} = useTheme() as AppTheme;
  const {user} = useAppSelector(state => state);
  return (
    <View style={[styles.container, {backgroundColor: colors.background}]}>
      <Header
        title="Profile"
        addButton={false}
        onPress={() => {
          navigation.goBack();
        }}
      />
      <View>
        <TouchableOpacity
          activeOpacity={0.8}
          style={{alignSelf: 'center', marginTop: normalize(15)}}>
          <View style={styles.vvv}>
            {/* <SvgXml xml={images.edit(colors.text)} width={20} height={20} /> */}
          </View>
          <Image
            source={{
              uri: user.image,
            }}
            style={styles.image}
          />
        </TouchableOpacity>
      </View>
      <View>
        <View
          style={{
            marginHorizontal: normalize(25),
            marginTop: normalize(15),
            marginBottom: normalize(10),
          }}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <View style={styles.xxx}>
              <Text style={[styles.author, {color: colors.text}]}>
                Username
              </Text>
              <Text style={[styles.title, {color: colors.text}]}>
                {user.username ?? 'XXX'}
              </Text>
            </View>
          </View>
        </View>

        <View
          style={[
            styles.free,
            {height: 2, backgroundColor: colors.textInputBackgroundColor},
          ]}
        />
        <View
          style={{
            marginHorizontal: normalize(25),
            marginTop: normalize(15),
            marginBottom: normalize(10),
          }}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <View style={styles.xxx}>
              <Text style={[styles.author, {color: colors.text}]}>Phone</Text>
              <Text style={[styles.title, {color: colors.text}]}>
                +{user.phone}
              </Text>
            </View>
          </View>
        </View>
        <View
          style={[
            styles.free,
            {height: 2, backgroundColor: colors.textInputBackgroundColor},
          ]}
        />
        <View
          style={{
            marginHorizontal: normalize(25),
            marginTop: normalize(15),
            marginBottom: normalize(10),
          }}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <View style={styles.xxx}>
              <Text style={[styles.author, {color: colors.text}]}>
                Date Birth
              </Text>
              <Text style={[styles.title, {color: colors.text}]}>
                01 January 2001
              </Text>
            </View>
          </View>
        </View>
        <View
          style={[
            styles.free,
            {height: 2, backgroundColor: colors.textInputBackgroundColor},
          ]}
        />
        <View
          style={{
            marginHorizontal: normalize(25),
            marginTop: normalize(15),
            marginBottom: normalize(10),
          }}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <View style={styles.xxx}>
              <Text style={[styles.author, {color: colors.text}]}>Balance</Text>
              <Text style={[styles.title, {color: colors.text}]}>
                {user.balance}
              </Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default User;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: normalize(150),
    height: normalize(150),
    resizeMode: 'cover',
    borderRadius: 15,
  },
  free: {
    height: normalize(30),
    backgroundColor: '#F5F5FA',
    width: '100%',
  },
  title: {
    fontSize: Style.fontSize.small,
    fontFamily: Style.fontFamily.light,
    color: '#000',
  },
  author: {
    fontSize: Style.fontSize.small - 1,
    fontFamily: Style.fontFamily.medium,
    color: '#000',
  },
  vvv: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    zIndex: 1,
    marginRight: 5,
    marginTop: 5,
  },
  xxx: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    flex: 1,
  },
});
