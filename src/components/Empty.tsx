import {StyleSheet, View} from 'react-native';
import React from 'react';
import {EmptyIcon} from '../icons';
import {normalize} from '../style/style';

const Empty = () => {
  return (
    <View style={styles.con}>
      <EmptyIcon height={normalize(130)} width={normalize(130)} />
    </View>
  );
};

export default Empty;

const styles = StyleSheet.create({
  con: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
