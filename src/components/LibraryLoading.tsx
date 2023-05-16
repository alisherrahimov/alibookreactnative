import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {SvgXml} from 'react-native-svg';

import {normalize, Style} from '../style/style';
import Input from './Input';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

const LibraryLoading = () => {
  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          width: '90%',
          alignSelf: 'center',
          alignItems: 'flex-end',
          height: normalize(80),
          paddingBottom: 10,
        }}>
        {/* <SvgXml xml={images.logoname} /> */}
        <TouchableOpacity onPress={() => {}}>
          {/* <SvgXml xml={images.setting} /> */}
        </TouchableOpacity>
      </View>
      <View
        style={[
          {
            width: '90%',
            alignSelf: 'center',
            marginTop: normalize(30),
          },
        ]}>
        <View>
          <Text style={styles.explore}>Explore</Text>
        </View>
        <View style={{marginTop: normalize(10)}}>
          <Input placeholder="Search Books and Author" />
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
          {[1, 2, 3, 4, 5, 6, 7].map(item => {
            return (
              <View style={{marginTop: 15}}>
                <SkeletonPlaceholder>
                  <SkeletonPlaceholder.Item
                    flexDirection="row"
                    alignItems="center">
                    <SkeletonPlaceholder.Item
                      width={normalize(80)}
                      height={normalize(80)}
                      borderRadius={10}
                    />
                    <SkeletonPlaceholder.Item>
                      <SkeletonPlaceholder.Item
                        marginLeft={10}
                        borderRadius={8}
                        width={normalize(100)}
                        height={10}
                      />
                      <SkeletonPlaceholder.Item
                        marginLeft={10}
                        marginTop={5}
                        borderRadius={8}
                        width={normalize(80)}
                        height={10}
                      />
                    </SkeletonPlaceholder.Item>
                  </SkeletonPlaceholder.Item>
                </SkeletonPlaceholder>
              </View>
            );
          })}
        </ScrollView>
      </View>
    </View>
  );
};

export default LibraryLoading;

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
});
