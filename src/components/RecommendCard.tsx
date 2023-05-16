import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {AppTheme, normalize, Style} from '../style/style';
import {useNavigation, useTheme} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {NavigationType} from '../types/NavigationType';
import {URL} from '../../App';
interface Props {
  item?: {
    id?: string | null;
    image?: string | null;
    title?: string | null;
    author?: string | null;
  } | null;
  index: number;
}
const RecommendCard: React.FC<Props> = ({index, item, children}) => {
  const {colors, dark} = useTheme() as AppTheme;
  const navigation = useNavigation<NativeStackNavigationProp<NavigationType>>();
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() => {
        navigation.navigate('BookDetails', {item: item});
      }}
      style={[
        styles.container,
        {
          margin: index % 2 == 0 ? 18 : undefined,
          marginTop: 18,
          backgroundColor: dark ? colors.buttonColor : '#fff',
        },
      ]}>
      <Image
        source={{uri: URL + `${item?.image}`}}
        resizeMode="cover"
        style={styles.image}
      />
      <Text
        style={[styles.title, {color: colors.text, maxWidth: normalize(135)}]}>
        {item?.title}
      </Text>
      <Text
        style={[
          styles.author,
          {color: dark ? colors.text : colors.buttonBorderColor},
        ]}>
        {item?.author}
      </Text>
    </TouchableOpacity>
  );
};

export default RecommendCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: normalize(160),
    // height: normalize(220),
    borderRadius: 10,
  },
  image: {
    width: normalize(160),
    height: normalize(220),
    borderRadius: 10,
  },
  title: {
    fontSize: Style.fontSize.small - 3,
    fontFamily: Style.fontFamily.medium,
    color: '#000',
    marginTop: 5,
  },
  author: {
    fontSize: Style.fontSize.small - 5,
    fontFamily: Style.fontFamily.medium,
    color: Style.buttonColor,
  },
});
