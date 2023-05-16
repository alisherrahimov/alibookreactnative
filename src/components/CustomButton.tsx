import {Text, TouchableOpacity, ActivityIndicator} from 'react-native';
import React from 'react';
import {normalize, Style} from '../style/style';
interface Props {
  title: string;
  color?: string;
  textColor?: string;
  onPress?: () => void;
  width?: number | string;

  borderWidth?: number;
  borderColor?: string;
  loading?: boolean;
  disabled?: boolean;
}
const CustomButton: React.FC<Props> = ({
  color,
  title,

  width,
  textColor,
  onPress,
  borderColor,
  borderWidth,
  loading,
  disabled = false,
}) => {
  return (
    <TouchableOpacity
      disabled={disabled || loading}
      onPress={onPress}
      style={{
        backgroundColor: disabled || loading ? '#DAD7F6' : color,
        width,
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth,
        borderColor,
        paddingVertical: 20,
      }}
      activeOpacity={0.8}>
      <Text
        style={{
          color: textColor,
          fontFamily: Style.fontFamily.medium,
          fontSize: normalize(14),
        }}>
        {loading ? (
          <ActivityIndicator size={'small'} color={'#fff'} />
        ) : (
          <Text>{title}</Text>
        )}
      </Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
