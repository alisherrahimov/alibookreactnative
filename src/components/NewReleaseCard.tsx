import {Image, StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {AppTheme, normalize} from '../style/style';
import {useNavigation, useTheme} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {NavigationType} from '../types/NavigationType';

import {IMAGE_URL} from '../utils/constants';
import {font} from '../style';
interface Props {
  item?: {
    id: string | null;
    images: string;
    title: string;
    author: string;
  };
  index: number;
}
const NewReleaseCard: React.FC<Props> = ({index, item}) => {
  const navigation = useNavigation<NativeStackNavigationProp<NavigationType>>();
  const {colors} = useTheme() as AppTheme;

  return (
    <TouchableOpacity
      key={index}
      activeOpacity={0.8}
      onPress={() => {
        navigation.navigate('BookDetails', {item: item});
      }}
      style={[
        styles.container,
        // eslint-disable-next-line react-native/no-inline-styles
        {
          margin: index % 2 === 0 ? 18 : undefined,
        },
      ]}>
      <Image
        source={{uri: IMAGE_URL + `${item?.images}`}}
        resizeMode="cover"
        style={styles.image}
      />
      <Text style={[styles.title, {color: colors.text}]}>{item?.title}</Text>
      <Text style={[styles.author, {color: colors.text}]}>{item?.author}</Text>
    </TouchableOpacity>
  );
};

export default NewReleaseCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: normalize(140),
    marginTop: 18,
    borderRadius: 10,
  },
  image: {
    width: normalize(140),
    height: normalize(140),
    borderRadius: 10,
  },
  author: {
    fontFamily: font.medium,
    fontSize: normalize(10),

    marginTop: 8,
  },
  title: {
    fontFamily: font.medium,
    fontSize: normalize(12),

    marginTop: 10,
  },
});
