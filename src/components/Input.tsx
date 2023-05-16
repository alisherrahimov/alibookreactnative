import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import {normalize, Style} from '../style/style';
import {useTheme} from '@react-navigation/native';
interface Props {
  placeholder: string;
  secureTextEntry?: false | boolean;
  placeHolderColor?: string;
}
const Input: React.FC<Props> = ({
  secureTextEntry,
  placeHolderColor,
  placeholder,
}) => {
  const {dark} = useTheme();
  return (
    <View>
      <TextInput
        selectionColor={Style.buttonColor}
        placeholder={placeholder}
        placeholderTextColor={placeHolderColor || Style.placeholderColor}
        style={[
          styles.input,
          {
            backgroundColor: dark ? Style.darkTextInputColor : '#F5F5FA',
            color: dark ? '#fff' : Style.darkColor.borderColor,
          },
        ]}
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  input: {
    height: normalize(50),
    borderRadius: 10,
    width: '100%',
    paddingLeft: normalize(10),
    fontSize: Style.fontSize.small,
    fontFamily: Style.fontFamily.medium,
  },
});
