import {Text, TextStyle} from 'react-native';
import React from 'react';
import {AppTheme} from '../style/style';
import {useTheme} from '@react-navigation/native';
import {font} from '../style';

interface IText {
  text?: string;
  size?: number;
  lineH?: number;
  style?: TextStyle;
}

const MyText = ({size, text, lineH, style}: IText) => {
  const {colors} = useTheme() as AppTheme;

  return (
    <Text
      selectable={true}
      // eslint-disable-next-line react-native/no-inline-styles
      style={{
        color: colors.text,
        fontSize: size,
        lineHeight: lineH,
        fontFamily: font.medium,
        textAlign: 'justify',
        ...style,
      }}>
      {text}
    </Text>
  );
};

export default MyText;
