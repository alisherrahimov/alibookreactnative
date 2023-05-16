import {StyleSheet, View} from 'react-native';
import React from 'react';

import {Style} from '../style/style';
import {Circle, Ellipce} from '../icons';

const BackgroundImage = () => {
  return (
    <View style={styles.container}>
      <View>
        <View>
          <Ellipce />
        </View>
        <View style={{alignItems: 'flex-end'}}>
          <Circle />
        </View>
      </View>
    </View>
  );
};

export default BackgroundImage;

const styles = StyleSheet.create({
  container: {
    height: Style.backgroundImageHeight,
    width: '100%',
    position: 'absolute',
  },
});
