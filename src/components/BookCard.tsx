import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {AppTheme, normalize, Style} from '../style/style';
import {useNavigation, useTheme} from '@react-navigation/native';
import {IMAGE_URL} from '../utils/constants';

interface Props {
  data?: {
    title?: string;
    id?: number;
    author?: string;
    images?: string;
  } | null;
  index: number;
}
const BookCard: React.FC<Props> = ({data, index}) => {
  const navigation = useNavigation();
  const {colors, dark} = useTheme() as AppTheme;

  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('BookDetails', {item: data});
      }}
      activeOpacity={0.8}
      key={index}
      style={{
        marginLeft: index % 2 === 0 ? 0 : normalize(20),
        marginBottom: normalize(20),
      }}>
      <Image
        style={styles.image}
        source={{
          uri: IMAGE_URL + data?.images,
        }}
        resizeMode="cover"
      />
      <Text
        style={[styles.title, {color: colors.text, maxWidth: normalize(135)}]}>
        {data?.title}
      </Text>
      <Text
        style={[
          styles.author,
          {color: dark ? colors.text : colors.buttonBorderColor},
        ]}>
        {data?.author}
      </Text>
    </TouchableOpacity>
  );
};

export default BookCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: normalize(135),
    height: normalize(135),
    borderRadius: 10,
  },
  title: {
    fontSize: Style.fontSize.small - 3,
    fontFamily: Style.fontFamily.medium,
    color: '#000',
    marginTop: 5,
  },
  author: {
    fontSize: Style.fontSize.small - 3,
    fontFamily: Style.fontFamily.medium,
    color: Style.buttonColor,
  },
});
