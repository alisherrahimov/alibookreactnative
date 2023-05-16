import {Image, StyleSheet, Text, TouchableOpacity} from 'react-native';
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
const BestSellerCard: React.FC<Props> = ({index, item}) => {
  const {colors, dark} = useTheme() as AppTheme;

  const navigation = useNavigation<NativeStackNavigationProp<NavigationType>>();
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() => {
        navigation.navigate('BookDetails');
      }}
      style={[styles.container, styles.touch(index, dark, colors)]}>
      <Image
        source={{uri: URL + `${item?.image}`}}
        resizeMode="stretch"
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

export default BestSellerCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: normalize(140),
    // height: normalize(140),
    borderRadius: 10,
  },
  image: {
    width: normalize(140),
    height: normalize(140),
    borderRadius: 10,
  },
  title: {
    fontSize: Style.fontSize.small - 3,
    fontFamily: Style.fontFamily.medium,
    color: '#000',
    marginTop: 5,
  },
  touch: (index: number, theme: boolean, colors: AppTheme) => {
    return {
      margin: index % 2 === 0 ? 18 : 0,
      marginTop: 18,
      backgroundColor: theme ? colors.colors.buttonColor : '#fff',
    };
  },
  author: {
    fontSize: Style.fontSize.small - 5,
    fontFamily: Style.fontFamily.medium,
    color: Style.buttonColor,
  },
});
