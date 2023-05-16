import {FlatList, StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';

import {AppTheme, normalize, Style} from '../../style/style';

import BookCard from '../../components/BookCard';
import {useNavigation, useTheme} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {NavigationType} from '../../types/NavigationType';
import MainHeader from '../../components/MainHeader';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useSearchMutation} from '../../api/bookApi';
import {style} from '../../style';
import MyText from '../../components/MyText';
import Empty from '../../components/Empty';
import useDebounce from '../../hooks/useDebounce';

const Search = () => {
  const navigation = useNavigation<NativeStackNavigationProp<NavigationType>>();
  const {colors, dark} = useTheme() as AppTheme;
  const [value, setValue] = useState<string>('');
  const [searchMutation, result] = useSearchMutation();
  let searchText = useDebounce({time: 1000, debounceValue: value});

  const _searchBook = useCallback((val: string) => {
    setValue(val);
  }, []);

  useEffect(() => {
    const getData = async () => {
      try {
        await searchMutation({
          text: searchText,
        }).unwrap();
      } catch (error) {}
    };
    if (searchText.length > 0) {
      getData();
    }
  }, [searchMutation, searchText]);

  return (
    <SafeAreaView style={styles.container}>
      <MainHeader />
      <View style={styles.main}>
        <View>
          <Text style={[styles.explore, {color: colors.text}]}>Explore</Text>
        </View>
        <View style={{marginTop: normalize(10)}}>
          <TextInput
            value={value}
            selectionColor={Style.buttonColor}
            placeholder={'Search for a book'}
            placeholderTextColor={Style.placeholderColor}
            onChangeText={_searchBook}
            style={[styles.input, style.night_of_light_theme(dark)]}
          />
        </View>
        {result.isLoading ? (
          <MyText text="loading" />
        ) : (
          <SearchResult data={result.data} />
        )}
      </View>
    </SafeAreaView>
  );
};
const SearchResult = ({data = []}: {data: any}) => {
  console.log(data);
  return (
    <View style={style.flex}>
      <View style={[styles.result]}>
        <FlatList
          contentContainerStyle={styles.list}
          numColumns={2}
          data={data?.data}
          keyExtractor={({id}) => id.toString()}
          renderItem={({index, item}) => <BookCard data={item} index={index} />}
          ListEmptyComponent={<Empty />}
        />
      </View>
    </View>
  );
};
export default Search;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  list: {marginTop: normalize(10), flexGrow: 1},
  main: {
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
  result: {
    width: '100%',
    marginTop: normalize(10),
    flex: 1,
  },
  category: {
    fontFamily: Style.fontFamily.medium,
    fontSize: Style.fontSize.small,
  },
  explore: {
    fontSize: Style.fontSize.xlarge,
    fontFamily: Style.fontFamily.bold,
    color: '#000',
  },
  reco: {
    fontFamily: Style.fontFamily.medium,
    fontSize: Style.fontSize.medium,
    color: '#000',
  },
  touch: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F5F5FA',
    borderRadius: 10,
    width: '48%',
    height: normalize(50),
  },
  input: {
    height: normalize(50),
    borderRadius: 10,
    width: '100%',
    paddingLeft: normalize(10),
    fontSize: Style.fontSize.small,
    fontFamily: Style.fontFamily.medium,
  },
});
