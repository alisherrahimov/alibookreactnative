import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {AppTheme, normalize, Style} from '../style/style';
import {useTheme} from '@react-navigation/native';
interface Props {
  data: {
    title: string;
    id: number;
    author: string;
  };
  index: number;
}
const MyBooksCard: React.FC<Props> = ({data, index}) => {
  const {colors, dark} = useTheme() as AppTheme;
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={[
        styles.container,
        {
          marginTop: normalize(15),
          borderRadius: 10,
        },
      ]}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <View>
          <Image
            source={{
              uri: 'https://img.freepik.com/free-psd/book-mockup-with-shadow-overlay_23-2149209542.jpg?t=st=1654465604~exp=1654466204~hmac=d31c49f64c5ac8c33239cd2f729213e9ba023ebf4eaa7772b3bf53104ba4fd2c&w=740',
            }}
            style={styles.image}
          />
        </View>
        <View style={{marginLeft: normalize(10)}}>
          <Text style={[styles.title, {color: colors.text}]}>{data.title}</Text>
          <Text
            style={[
              styles.author,
              {color: dark ? colors.text : colors.buttonBorderColor},
            ]}>
            {data.author}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default MyBooksCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: normalize(80),
    height: normalize(80),
    resizeMode: 'cover',
    borderRadius: 10,
  },
  title: {
    fontSize: Style.fontSize.small,
    fontFamily: Style.fontFamily.medium,
    color: '#000',
  },
  author: {
    fontSize: Style.fontSize.small - 3,
    fontFamily: Style.fontFamily.medium,
    color: Style.buttonColor,
  },
});
