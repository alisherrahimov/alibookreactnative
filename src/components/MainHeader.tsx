import {StyleSheet, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {MainIcon, Settings, TextIcon} from '../icons';
import {useNavigation} from '@react-navigation/native';
import {normalize} from '../style/style';

const MainHeader = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.containerMain}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <MainIcon width={40} height={40} />
        <TextIcon />
      </View>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Settings');
        }}>
        <Settings />
      </TouchableOpacity>
    </View>
  );
};

export default MainHeader;

const styles = StyleSheet.create({
  containerMain: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '90%',
    alignSelf: 'center',
    alignItems: 'flex-end',
    height: normalize(40),
    paddingBottom: 10,
  },
});
