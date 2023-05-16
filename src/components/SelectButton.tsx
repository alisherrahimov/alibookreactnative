import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {normalize, Style} from '../style/style';
import {useTheme} from '@react-navigation/native';
interface Props {
  categories?: {
    id: number;
    name: string;
  };
  index: number;
  _onSelectItem?: () => void;
  dis?: boolean;
}
const SelectButton: React.FC<Props> = ({
  categories,
  index,
  _onSelectItem,
  dis = false,
}) => {
  const {dark} = useTheme();
  const [check, setCheck] = useState(false);
  const [data, setData] = useState<{id: number | undefined}[]>();
  return (
    <View
      style={{
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <TouchableOpacity
        disabled={dis}
        activeOpacity={0.5}
        style={[
          styles.container,
          {
            borderWidth: 1,
            borderColor: dark
              ? check
                ? Style.buttonColor
                : '#fff'
              : Style.darkColor.borderColor,
            backgroundColor: dark
              ? check
                ? Style.buttonColor
                : Style.darkBackgroundColor
              : check
              ? Style.buttonColor
              : '#fff',
            marginLeft: index == 0 || index == 4 ? 0 : 5,
            marginTop: 5,
          },
        ]}
        onPress={() => {
          setCheck(!check);
          _onSelectItem();
        }}>
        <Text
          style={[
            styles.title,
            {color: dark ? '#fff' : check ? '#fff' : Style.buttonColor},
          ]}>
          {categories?.name}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default SelectButton;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: normalize(8),
    borderRadius: 10,
    borderColor: '#6A6A8B',
    borderWidth: 1,
    flexWrap: 'wrap',
  },
  title: {
    fontFamily: Style.fontFamily.medium,
    fontSize: Style.fontSize.small - 2,
    color: '#6A6A8B',
  },
});
