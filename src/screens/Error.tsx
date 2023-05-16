import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Header from '../components/Header';
import {SvgXml} from 'react-native-svg';

import {normalize, Style} from '../style/style';
import {useTheme} from '@react-navigation/native';

const Error = () => {
  const {dark} = useTheme();
  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: dark
            ? Style.darkColor.backgroundColor
            : Style.lightColor.backgroundColor,
        },
      ]}>
      <Header title="Error" />
      <View style={styles.container}>
        <View style={{alignSelf: 'center'}}>
          {/* <SvgXml
            xml={images.error}
            width={normalize(200)}
            height={normalize(200)}
          /> */}
        </View>
        <View style={{alignItems: 'center', justifyContent: 'center'}}>
          <Text
            style={[
              styles.title,
              {
                color: dark
                  ? Style.darkColor.textColor
                  : Style.lightColor.textColor,
              },
            ]}>
            Ops! Something Went Wrong
          </Text>
          <Text
            style={[
              styles.info,
              {
                color: dark
                  ? Style.darkColor.textColor
                  : Style.lightColor.textColor,
              },
            ]}>
            Please check your internet connection {'\n'}and try again
          </Text>
        </View>
        <TouchableOpacity
          activeOpacity={0.8}
          style={[
            styles.touch,
            {borderColor: dark ? Style.darkColor.textColor : Style.buttonColor},
          ]}>
          <Text
            style={[
              styles.title,
              {
                color: dark ? Style.darkColor.textColor : Style.buttonColor,
              },
            ]}>
            Retry
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Error;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: Style.fontSize.medium,
    color: '#000',
  },
  info: {
    fontSize: Style.fontSize.small,
    textAlign: 'center',
    marginTop: 10,
    color: '#000',
  },
  touch: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: normalize(20),
    borderRadius: 15,
    borderWidth: 1,
    borderColor: Style.buttonColor,
    width: '70%',
    alignSelf: 'center',
    height: normalize(50),
  },
});
