import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useEffect} from 'react';
import {useNavigation, useRoute, useTheme} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {NavigationType} from '../types/NavigationType';
import Header from '../components/Header';
import {AppTheme, normalize, Style} from '../style/style';
import Slider from '@react-native-community/slider';

import {URL} from '../../App';

import TrackPlayer, {useProgress} from 'react-native-track-player';
const Book: React.FC = () => {
  const navigation = useNavigation<NativeStackNavigationProp<NavigationType>>();
  const {colors, dark} = useTheme() as AppTheme;
  const {params} = useRoute();
  const [pause, setPause] = React.useState(true);
  const {position} = useProgress();
  const [currentTime, setCurrentTime] = React.useState(position);
  const {item} = params;
  useEffect(() => {
    setupPlayer();
  }, []);
  const setupPlayer = async () => {
    await TrackPlayer.setupPlayer({});
  };
  const onStart = async () => {
    await TrackPlayer.add([
      {url: URL + item?.book?.audio_link, title: item.title},
    ]);
    await TrackPlayer.play();
    setPause(false);
  };
  const onPause = async () => {
    await TrackPlayer.pause();
    setPause(true);
  };

  return (
    <View style={styles.container}>
      <Header title={item?.book.title} />
      <View style={styles.main}>
        <View
          style={{
            marginTop: normalize(10),
          }}>
          <Image
            source={{
              uri: URL + item?.book?.image,
            }}
            style={styles.image}
          />
        </View>
        <View style={{marginTop: normalize(15)}}>
          <Text style={[styles.title, {color: colors.text}]}>
            {item?.book?.title}
          </Text>
          <Text style={[styles.author, {color: colors.text}]}>
            {item?.book?.author}
          </Text>
        </View>
        <View style={{width: '100%'}}>
          <Slider
            value={currentTime}
            onValueChange={val => {
              setCurrentTime(val);
              TrackPlayer.seekTo(val);
            }}
            style={{height: 40}}
            minimumValue={0}
            maximumValue={item?.book?.duration}
            minimumTrackTintColor="#4838D1"
            maximumTrackTintColor="#DDD7FC"
            thumbTintColor="#4838D1"
          />
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginHorizontal: normalize(18),
            }}>
            <Text style={[styles.count, {color: colors.text}]}>
              {new Date(position * 1000).toISOString().substr(11, 8)}
            </Text>
            <Text style={[styles.count, {color: colors.text}]}>
              {new Date(item?.book?.duration * 1000)
                .toISOString()
                .substr(11, 8)}
            </Text>
          </View>
        </View>
        <View style={{marginTop: normalize(15)}}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-evenly',
            }}>
            <TouchableOpacity activeOpacity={0.8} style={styles.touch}>
              {/* <SvgXml
                xml={images.arrowLeftIcon(dark ? '#DDD7FC' : '#4838D1')}
                width={normalize(40)}
                height={normalize(40)}
              /> */}
            </TouchableOpacity>
            <TouchableOpacity
              onPress={pause ? onStart : onPause}
              activeOpacity={0.8}
              style={styles.touch}>
              {/* <SvgXml
                xml={
                  !pause
                    ? images.pause(dark ? '#DDD7FC' : '#4838D1')
                    : images.play(dark ? '#DDD7FC' : '#4838D1')
                }
                width={normalize(60)}
                height={normalize(60)}
              /> */}
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.8} style={styles.touch}>
              {/* <SvgXml
                xml={images.arrowRightIcon(dark ? '#DDD7FC' : '#4838D1')}
                width={normalize(40)}
                height={normalize(40)}
              /> */}
            </TouchableOpacity>
          </View>
        </View>
        <View>
          <TouchableOpacity activeOpacity={0.8} style={styles.readBook}>
            <Text style={[styles.readBookText, {color: '#fff'}]}>
              Read Book
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Book;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  readBookText: {
    fontFamily: Style.fontFamily.bold,
    fontSize: Style.fontSize.small,
  },
  readBook: {
    backgroundColor: '#4838D1',
    alignSelf: 'center',
    marginTop: normalize(20),
    borderRadius: normalize(10),
    padding: normalize(10),
  },
  touch: {},
  count: {
    fontSize: Style.fontSize.small,
    fontFamily: Style.fontFamily.medium,
  },
  author: {
    fontSize: Style.fontSize.medium,
    fontFamily: Style.fontFamily.medium,
  },
  main: {
    marginHorizontal: normalize(15),
    flex: 1,
  },
  title: {
    fontSize: Style.fontSize.large,
    fontFamily: Style.fontFamily.bold,
  },
  image: {
    width: '100%',
    height: normalize(258),
    borderRadius: normalize(15),
  },
});
