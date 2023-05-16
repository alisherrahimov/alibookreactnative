import {
  Animated,
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useRef} from 'react';
import BackgroundImage from '../components/BackgroundImage';

import {AppTheme, normalize, Style} from '../style/style';
import CustomButton from '../components/CustomButton';
import {useNavigation, useTheme} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {NavigationType} from '../types/NavigationType';
const data: {title: string; desc: string}[] = [
  {
    title: 'Title one',
    desc: 'Lorem ipsum dolor sit amet la maryame dor sut colondeum.',
  },
  {
    title: 'Title two',
    desc: 'Lorem ipsum dolor sit amet la maryame dor sut colondeum.',
  },
  {
    title: 'Title third',
    desc: 'Lorem ipsum dolor sit amet la maryame dor sut colondeum.',
  },
];
const ReViewCardSize = Style.width - 45;
const Enter = () => {
  const {colors} = useTheme() as AppTheme;
  const scrollRef = useRef<FlatList>(null);
  const [index, setIndex] = React.useState(0);
  const navigation = useNavigation<NativeStackNavigationProp<NavigationType>>();
  const scrollX = new Animated.Value(0);
  let position = Animated.divide(scrollX, ReViewCardSize);
  const RenderItem = ({item}: {item: {title: string; desc: string}}) => {
    return (
      <View
        style={{
          width: Style.width,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text style={[styles.title, {color: colors.text}]}>{item.title}</Text>
        <Text style={[styles.desc, {color: colors.text}]}>{item.desc}</Text>
      </View>
    );
  };

  return (
    <SafeAreaView
      style={[styles.container, {backgroundColor: colors.background}]}>
      <BackgroundImage />
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 1,
          width: '100%',
          height: normalize(300),
          marginTop: normalize(200),
        }}>
        <FlatList
          ref={scrollRef}
          onScroll={Animated.event(
            [{nativeEvent: {contentOffset: {x: scrollX}}}],
            {useNativeDriver: false},
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          data={data}
          keyExtractor={({title}) => title}
          renderItem={RenderItem}
        />
      </View>
      <View
        style={{
          alignSelf: 'center',
          flexDirection: 'row',
          justifyContent: 'space-around',
          width: 80,
          marginTop: normalize(15),
        }}>
        <View
          style={{
            position: 'absolute',
            alignSelf: 'flex-end',
            top: 0,
            bottom: 0,
            left: 0,
            justifyContent: 'center',
            flexDirection: 'row',
          }}>
          {data.map((_, i) => {
            let opacity = position.interpolate({
              inputRange: [i - 1, i, i + 1],
              outputRange: [0.3, 1, 0.3],
              extrapolate: 'clamp',
            });

            return (
              <Animated.View
                key={i}
                style={{
                  opacity,
                  height: 12,
                  width: 12,
                  backgroundColor: Style.buttonColor,
                  margin: 5,
                  borderRadius: 20,
                }}
              />
            );
          })}
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignSelf: 'center',
          width: '80%',
          justifyContent: 'space-around',
          marginTop: normalize(35),
          alignItems: 'center',
        }}>
        <View>
          <CustomButton
            onPress={() => {
              navigation.navigate('Login');
            }}
            textColor={colors.buttonTextColor}
            color={colors.background}
            title="Skip"
            width={normalize(120)}
          />
        </View>
        <View>
          <CustomButton
            onPress={() => {
              if (index < 3) {
                scrollRef.current?.scrollToIndex({
                  index: index,
                  animated: true,
                });
                setIndex(index + 1);
              } else {
                setIndex(0);
              }
            }}
            textColor="#fff"
            color={Style.buttonColor}
            title="Next"
            width={normalize(120)}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Enter;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: normalize(17),
    fontFamily: Style.fontFamily.bold,
  },
  desc: {
    fontSize: normalize(15),
    textAlign: 'center',
    textAlignVertical: 'center',
    fontFamily: Style.fontFamily.medium,
  },
});
