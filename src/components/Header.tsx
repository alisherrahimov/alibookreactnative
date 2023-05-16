import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

import {AppTheme, normalize, Style} from '../style/style';
import {useNavigation, useRoute, useTheme} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {NavigationType} from '../types/NavigationType';
import LeftIcon from '../icons/home/BackLeftIcon';
interface Props {
  title?: string;
  onPress?: () => void;
  addButton?: boolean;
  ButtonPress?: () => void;
}
const Header: React.FC<Props> = ({
  title,
  addButton = false,
  ButtonPress,
  onPress,
}) => {
  const navigation = useNavigation<NativeStackNavigationProp<NavigationType>>();
  const route = useRoute();

  const {dark, colors} = useTheme() as AppTheme;
  const checkLength = (text: string) => {
    if (text.length > 25) {
      return text?.substring(0, 25) + '...';
    }
    return text;
  };
  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: dark
            ? Style.darkColor.backgroundColor
            : Style.lightColor.backgroundColor,
          borderBottomColor: dark
            ? Style.darkColor.borderColor
            : Style.lightColor.borderColor,
        },
      ]}>
      <View style={[styles.absolute, {marginLeft: normalize(15), zIndex: 1}]}>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}
          activeOpacity={0.8}
          style={styles.back}>
          <LeftIcon width={15} height={15} color={colors.text} />
        </TouchableOpacity>
      </View>
      <View style={[styles.absolute, {right: 0}]}>
        <Text
          style={[
            styles.title,
            {
              color: dark
                ? Style.darkColor.textColor
                : Style.lightColor.textColor,
            },
          ]}>
          {title && checkLength(title)}
        </Text>
      </View>
      {addButton && (
        <View style={[styles.xxx]}>
          <TouchableOpacity
            onPress={ButtonPress}
            activeOpacity={0.8}
            style={styles.rightButton}>
            <Text style={styles.author}>Save</Text>
          </TouchableOpacity>
        </View>
      )}
      {route.name === 'BookDetails' ? (
        <View style={styles.xxx}>
          <TouchableOpacity
            onPress={ButtonPress}
            activeOpacity={0.8}
            style={styles.rightButton}>
            {/* <SvgXml xml={images.bookmark('#4838D1', 25, 25)} /> */}
            {/* <SvgXml xml={images.bookmarkfill('#4838D1')} /> */}
          </TouchableOpacity>
        </View>
      ) : null}
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    height: normalize(90),
    borderBottomWidth: 0.8,
  },
  title: {
    fontFamily: Style.fontFamily.medium,
    fontSize: Style.fontSize.small,
    color: '#000',
  },
  absolute: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: normalize(35),
  },
  author: {
    fontSize: Style.fontSize.small,
    fontFamily: Style.fontFamily.medium,
    color: Style.buttonColor,
  },
  back: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: normalize(10),
    borderRadius: 15,
  },
  rightButton: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: normalize(10),
    borderRadius: 15,
  },
  xxx: {
    position: 'absolute',
    justifyContent: 'center',
    top: 0,
    right: 0,
    bottom: 0,
    marginTop: normalize(25),
    marginRight: normalize(10),
  },
});
