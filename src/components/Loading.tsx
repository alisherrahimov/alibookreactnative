import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import LottieView from 'lottie-react-native';
import {normalize, Style} from '../style/style';
const Loading = () => {
  return (
    <View style={styles.container}>
      <LottieView
        source={require('../../image/home/lf30_editor_rsq5fblx.json')}
        autoPlay
        loop
        style={{width: normalize(80), height: normalize(80)}}
      />
      <Text
        style={{
          fontFamily: Style.fontFamily.bold,
          fontSize: Style.fontSize.small,
          color: '#000',
        }}>
        Loading...
      </Text>
    </View>
  );
};

export default Loading;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
