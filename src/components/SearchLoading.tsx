import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';

import {AppTheme, normalize, Style} from '../style/style';

import BookCard from './BookCard';

import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import {useTheme} from '@react-navigation/native';

const SearchLoading = () => {
  const {dark, colors} = useTheme() as AppTheme;
  return (
    <View style={styles.container}>
      <View style={{width: '100%', marginLeft: 20, marginTop: 15}}>
        <View style={{flexDirection: 'row'}}>
          <View>
            <SkeletonPlaceholder>
              <SkeletonPlaceholder.Item
                width={normalize(135)}
                borderRadius={10}
                height={normalize(135)}
              />
            </SkeletonPlaceholder>
            <View style={{marginTop: 10}}>
              <SkeletonPlaceholder>
                <SkeletonPlaceholder.Item
                  width={normalize(80)}
                  height={normalize(10)}
                  borderRadius={10}
                />
              </SkeletonPlaceholder>
            </View>
            <View style={{marginTop: 5}}>
              <SkeletonPlaceholder>
                <SkeletonPlaceholder.Item
                  width={normalize(60)}
                  height={normalize(10)}
                  borderRadius={10}
                />
              </SkeletonPlaceholder>
            </View>
          </View>
          <View style={{marginLeft: 20}}>
            <SkeletonPlaceholder>
              <SkeletonPlaceholder.Item
                width={normalize(135)}
                height={normalize(135)}
                borderRadius={10}
              />
            </SkeletonPlaceholder>
            <View style={{marginTop: 10}}>
              <SkeletonPlaceholder>
                <SkeletonPlaceholder.Item
                  width={normalize(80)}
                  height={normalize(10)}
                  borderRadius={10}
                />
              </SkeletonPlaceholder>
            </View>
            <View style={{marginTop: 5}}>
              <SkeletonPlaceholder>
                <SkeletonPlaceholder.Item
                  width={normalize(60)}
                  height={normalize(10)}
                  borderRadius={10}
                />
              </SkeletonPlaceholder>
            </View>
          </View>
        </View>
        <View style={{flexDirection: 'row', marginTop: 10}}>
          <View>
            <SkeletonPlaceholder>
              <SkeletonPlaceholder.Item
                width={normalize(135)}
                height={normalize(135)}
                borderRadius={10}
              />
            </SkeletonPlaceholder>
            <View style={{marginTop: 10}}>
              <SkeletonPlaceholder>
                <SkeletonPlaceholder.Item
                  width={normalize(80)}
                  height={normalize(10)}
                  borderRadius={10}
                />
              </SkeletonPlaceholder>
            </View>
            <View style={{marginTop: 5}}>
              <SkeletonPlaceholder>
                <SkeletonPlaceholder.Item
                  width={normalize(60)}
                  height={normalize(10)}
                  borderRadius={10}
                />
              </SkeletonPlaceholder>
            </View>
          </View>
          <View style={{marginLeft: 20}}>
            <SkeletonPlaceholder>
              <SkeletonPlaceholder.Item
                width={normalize(135)}
                height={normalize(135)}
                borderRadius={10}
              />
            </SkeletonPlaceholder>
            <View style={{marginTop: 10}}>
              <SkeletonPlaceholder>
                <SkeletonPlaceholder.Item
                  width={normalize(80)}
                  height={normalize(10)}
                  borderRadius={10}
                />
              </SkeletonPlaceholder>
            </View>
            <View style={{marginTop: 5}}>
              <SkeletonPlaceholder>
                <SkeletonPlaceholder.Item
                  width={normalize(60)}
                  height={normalize(10)}
                  borderRadius={10}
                />
              </SkeletonPlaceholder>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};
const SearchResult = () => {
  return (
    <View>
      <View
        style={[
          {
            width: '100%',
            marginTop: normalize(20),
          },
        ]}>
        <View>
          <Text style={styles.reco}>Search Results</Text>
        </View>
        <FlatList
          contentContainerStyle={{marginTop: normalize(10)}}
          numColumns={2}
          data={[
            {id: 1, author: 'Laurie Forest', title: 'The Black Witch'},
            {id: 2, author: 'C.J Archer', title: 'The Prisoner’s Key'},
            {id: 3, author: 'Laurie Forest', title: 'Light Mage'},
            {id: 4, author: 'Emily R. King', title: 'The Fire Queen'},
          ]}
          keyExtractor={({id}) => id.toString()}
          renderItem={({index, item}) => <BookCard data={item} index={index} />}
        />
      </View>
    </View>
  );
};

export default SearchLoading;

const styles = StyleSheet.create({
  container: {
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
});
