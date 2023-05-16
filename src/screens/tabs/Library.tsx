import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';

import {AppTheme, normalize, Style} from '../../style/style';
import Input from '../../components/Input';

import MyBooksCard from '../../components/MyBooksCard';
import {useNavigation, useTheme} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {NavigationType} from '../../types/NavigationType';

import MainHeader from '../../components/MainHeader';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useAppSelector} from '../../hooks/reduxHook';

import Empty from '../../components/Empty';

const Library = () => {
  const navigation = useNavigation<NativeStackNavigationProp<NavigationType>>();
  const {colors} = useTheme() as AppTheme;
  const {user} = useAppSelector(state => state);
  return (
    <SafeAreaView style={styles.container}>
      <MainHeader />
      <View style={styles.mm}>
        <View>
          <Text style={[styles.explore, {color: colors.text}]}>Library</Text>
        </View>
        <View style={{marginTop: normalize(10)}}>
          <Input placeholder="Search Books and Author" />
        </View>

        <FlatList
          contentContainerStyle={styles.list}
          data={user.mybooks}
          keyExtractor={({id}) => id.toString()}
          renderItem={({index, item}) => (
            <MyBooksCard data={item} index={index} />
          )}
          ListEmptyComponent={<Empty />}
        />
      </View>
    </SafeAreaView>
  );
};

export default Library;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mm: {
    width: '90%',
    alignSelf: 'center',
    marginTop: normalize(30),
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '90%',
    alignSelf: 'center',
    alignItems: 'center',
    marginTop: normalize(40),
  },
  list: {
    marginTop: normalize(30),
    flexGrow: 1,
  },
  explore: {
    fontSize: Style.fontSize.xlarge,
    fontFamily: Style.fontFamily.bold,
    color: '#000',
  },
});
