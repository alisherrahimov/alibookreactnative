// App.jsx

import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Style} from '../style/style';

/*
  1. Create the config
*/
export const toastConfig = {
  tomato: props => {
    return (
      <View style={styles.dark(props.props.dark)}>
        <View style={styles.row}>
          <View style={styles.messageView(props.props.error)} />
          <Text style={styles.text(props.props.dark)}>{props?.text1}</Text>
        </View>
      </View>
    );
  },
};

const styles = StyleSheet.create({
  row: {flexDirection: 'row', alignItems: 'center'},
  dark: dark => {
    return {
      width: '90%',
      backgroundColor: dark ? Style.buttonColor : 'white',
      borderRadius: 8,
      paddingHorizontal: 10,
      height: 60,
      justifyContent: 'center',
    };
  },
  messageView: is => ({
    height: 30,
    width: 5,
    backgroundColor: is ? 'green' : 'red',
    borderRadius: 8,
  }),
  text: is => ({
    color: is ? 'white' : 'black',
    marginLeft: 8,
    fontFamily: Style.fontFamily.medium,
  }),
});
