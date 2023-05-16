import {Style} from './style';

export const style = {
  text: {
    fontSize: Style.fontSize.small,
    color: Style.lightColor.textColor,
    fontFamily: Style.fontFamily.medium,
  },
  night_of_light_theme: (dark: boolean) => {
    return {
      backgroundColor: dark ? Style.darkTextInputColor : '#F5F5FA',
      color: dark ? '#fff' : Style.darkColor.borderColor,
    };
  },
  status_bar_light_of_night: (dark: boolean) => {
    return {
      flex: 1,
      backgroundColor: dark
        ? Style.darkBackgroundColor
        : Style.lightColor.primary,
    };
  },
  row: {
    flexDirection: 'row',
  },
  flex: {
    flex: 1,
  },
};

export const font = {
  bold: 'Poppins-Bold',
  regular: 'Roboto-Regular',
  light: 'Poppins-Light',
  medium: 'Metropolitano-Medium',
  thin: 'Poppins-Thin',
  black: 'Poppins-Black',
  italic: 'Poppins-Italic',
};
