import {PixelRatio, Platform, Dimensions} from 'react-native';
import {Theme} from '@react-navigation/native';
export const {width, height} = Dimensions.get('window');
const scale = width / 320;

export const normalize = (size: number) => {
  const newSize = size * scale;
  if (Platform.OS === 'ios') {
    return Math.round(PixelRatio.roundToNearestPixel(newSize));
  } else {
    return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2;
  }
};
export const Style = {
  fontFamily: {
    bold: 'Poppins-Bold',
    regular: 'Roboto-Regular',
    light: 'Poppins-Light',
    medium: 'Poppins-Medium',
    thin: 'Poppins-Thin',
    black: 'Poppins-Black',
    italic: 'Poppins-Italic',
  },
  fontSize: {
    xsmall: normalize(10),
    small: normalize(12),
    medium: normalize(14),
    large: normalize(16),
    xlarge: normalize(18),
    xxlarge: normalize(20),
  },
  lightColor: {
    primary: '#fff',
    textColor: '#000',
    bottomTextColor: '#6A6A8B',
    backgroundColor: '#fff',
    borderColor: '#F3F1FE',
    ActiveBottomTabIconColor: '#4838D1',
    inActiveBottomTabIconColor: '#BBB1FA',
    bottomTabColor: '#fafafa',
  },
  darkColor: {
    primary: '#000',
    textColor: '#fff',
    bottomTextColor: '#6A6A8B',
    backgroundColor: '#0F0F29',
    borderColor: '#4838D1',
    ActiveBottomTabIconColor: '#fff',
    inActiveBottomTabIconColor: '#BBB1FA',
  },
  bottomTabHeight: normalize(60),
  buttonColor: '#4838D1',
  bottomTextColor: '#6A6A8B',
  enterImageSize: normalize(200),
  backgroundImageHeight: normalize(250),
  width: width,
  height: height,
  placeholderColor: '#B8B8C7',
  darkBackgroundColor: '#0F0F29',
  darkTextInputColor: '#1C1C4D',
  orangeColor: '#F77A55',
};
export interface AppTheme extends Theme {
  colors: {
    background: string;
    text: string;
    border: string;
    primary: string;
    card: string;
    notification: string;
    placeholder?: string;
    buttonBorderColor?: string;
    buttonColor?: string;
    buttonTextColor?: string;
    buttonDisabledColor?: string;
    buttonDisabledTextColor?: string;
    textInputColor?: string;
    textInputBackgroundColor?: string;
    bottomTabColor?: string;
  };
}

export const darkSchema: AppTheme = {
  dark: true,
  colors: {
    background: '#0F0F29',
    border: Style.darkColor.primary,
    card: '#2E2E5D',
    text: Style.darkColor.textColor,
    primary: Style.darkColor.primary,
    notification: Style.darkColor.primary,
    textInputBackgroundColor: '#1C1C4D',
    buttonColor: '#4838D1',
    buttonTextColor: '#fff',
    buttonBorderColor: '#fff',
    placeholder: Style.placeholderColor,
    bottomTabColor: '#0F0F29',
  },
};

export const lightSchema: AppTheme = {
  dark: false,
  colors: {
    background: '#fff',
    border: Style.lightColor.primary,
    card: '#F5F5FA',
    text: Style.lightColor.textColor,
    primary: Style.lightColor.primary,
    notification: Style.lightColor.primary,
    buttonColor: '#4838D1',
    textInputBackgroundColor: '#F5F5FA',
    placeholder: Style.placeholderColor,
    buttonTextColor: '#4838D1',
    buttonBorderColor: '#4838D1',
    bottomTabColor: Style.lightColor.bottomTabColor,
  },
};
