import React, {memo, useCallback, useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import {PanGestureHandler} from 'react-native-gesture-handler';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import {useTheme} from '@react-navigation/native';
import {AppTheme} from '../style/style';
import {storage} from '../redux/storage';
import {calculate} from '../utils/calculate';

interface ICursor {
  max: number;
  min: number;
  onChange: (value: number) => void;
}

const Cursor = ({min, max, onChange}: ICursor) => {
  const valueX = useSharedValue(0);
  const scaleDot = useSharedValue(1);
  const backValue = useSharedValue(0);
  const {colors} = useTheme() as AppTheme;

  const DotAnimationStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: withTiming(valueX.value, {duration: 10}),
        },
        {
          scale: withTiming(scaleDot.value, {duration: 100}),
        },
      ],
    };
  }, []);

  const BackColorAnimatedStyle = useAnimatedStyle(() => {
    return {
      width: withTiming(backValue.value, {duration: 10}),
    };
  }, []);

  const onBegan = () => {
    scaleDot.value = 1.2;
  };
  const onEnded = () => {
    scaleDot.value = 1;
  };

  const onGesture = (events: any) => {
    const {absoluteX} = events.nativeEvent;
    if (absoluteX > min && absoluteX < max) {
      valueX.value = absoluteX;
      backValue.value = absoluteX;
      storage.set('size', absoluteX);

      // min 8
      // max 24
      onChange(calculate(absoluteX) ?? 16);
    }
  };

  const onChangeDefaultValue = useCallback(() => {
    valueX.value = storage.getNumber('size') ?? 140;
    backValue.value = storage.getNumber('size') ?? 140;
  }, [backValue, valueX]);

  useEffect(() => {
    onChangeDefaultValue();
  }, [onChangeDefaultValue]);

  return (
    <View style={[styles.container, {backgroundColor: colors.background}]}>
      <View
        style={[
          styles.scroll,
          {
            width: max,
            backgroundColor: colors.textInputBackgroundColor,
          },
        ]}>
        <Animated.View
          style={[
            styles.back,
            {backgroundColor: colors.buttonColor},
            BackColorAnimatedStyle,
          ]}
        />
        <PanGestureHandler
          onBegan={onBegan}
          onEnded={onEnded}
          onGestureEvent={onGesture}>
          <Animated.View
            style={[
              styles.ok,
              DotAnimationStyle,
              {backgroundColor: colors.buttonColor},
            ]}
          />
        </PanGestureHandler>
      </View>
    </View>
  );
};

export default memo(Cursor);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    borderRadius: 12,
  },
  back: {
    position: 'absolute',
    height: 10,
    borderRadius: 12,
  },
  ok: {
    backgroundColor: 'blue',
    width: 20,
    height: 20,
    borderRadius: 50,
    position: 'absolute',
    left: -10,
  },
  scroll: {
    backgroundColor: 'white',
    width: '90%',
    height: 10,
    borderRadius: 12,
    justifyContent: 'center',
  },
});
