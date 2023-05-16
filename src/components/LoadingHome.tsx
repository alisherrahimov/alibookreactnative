import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';

import {AppTheme, normalize, Style} from '../style/style';

import {useNavigation, useTheme} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {NavigationType} from '../types/NavigationType';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
const LoadingHome = () => {
  const navigation = useNavigation<NativeStackNavigationProp<NavigationType>>();
  const {dark, colors} = useTheme() as AppTheme;
  return (
    <SafeAreaView style={styles.container}>
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
        {/* <SvgXml
          xml={
            dark
              ? images.logoname('#fff')
              : images.logoname(colors.buttonBorderColor)
          }
        /> */}
        <TouchableOpacity disabled={true}>
          {/* <SvgXml
            xml={
              dark
                ? images.setting('#fff')
                : images.setting(colors.buttonBorderColor)
            }
          /> */}
        </TouchableOpacity>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
          <View style={styles.header}>
            <Text style={styles.title}>Categories</Text>
            <TouchableOpacity disabled={true}>
              <Text style={styles.seemore}>See more</Text>
            </TouchableOpacity>
          </View>
          <View style={{}}>
            <View style={styles.category}>
              <SkeletonPlaceholder>
                <SkeletonPlaceholder.Item flexDirection="row">
                  <SkeletonPlaceholder.Item
                    marginLeft={20}
                    borderRadius={10}
                    width={80}
                    height={45}
                  />
                  <SkeletonPlaceholder.Item
                    marginLeft={20}
                    borderRadius={10}
                    width={80}
                    height={45}
                  />
                  <SkeletonPlaceholder.Item
                    marginLeft={20}
                    borderRadius={10}
                    width={80}
                    height={45}
                  />
                  <SkeletonPlaceholder.Item
                    marginLeft={20}
                    borderRadius={10}
                    width={80}
                    height={45}
                  />
                </SkeletonPlaceholder.Item>
              </SkeletonPlaceholder>
            </View>
          </View>
          <View style={[styles.header, {marginTop: normalize(20)}]}>
            <Text style={styles.title}>Recommended For You</Text>
            <TouchableOpacity disabled={true}>
              <Text style={styles.seemore}>See more</Text>
            </TouchableOpacity>
          </View>
          <View style={{marginTop: 10, paddingBottom: 10}}>
            <SkeletonPlaceholder>
              <SkeletonPlaceholder.Item flexDirection="row">
                <SkeletonPlaceholder.Item
                  marginLeft={20}
                  borderRadius={10}
                  width={normalize(160)}
                  height={normalize(220)}
                />
                <SkeletonPlaceholder.Item
                  marginLeft={20}
                  borderRadius={10}
                  width={normalize(160)}
                  height={normalize(220)}
                />
                <SkeletonPlaceholder.Item
                  marginLeft={20}
                  borderRadius={10}
                  width={normalize(160)}
                  height={normalize(220)}
                />
              </SkeletonPlaceholder.Item>
            </SkeletonPlaceholder>
          </View>
          <View style={[styles.header, {marginTop: normalize(10)}]}>
            <Text style={styles.title}>Best Seller</Text>
            <TouchableOpacity disabled={true}>
              <Text style={styles.seemore}>See more</Text>
            </TouchableOpacity>
          </View>
          <View style={{paddingBottom: 10}}>
            <SkeletonPlaceholder>
              <SkeletonPlaceholder.Item marginTop={10} flexDirection="row">
                <SkeletonPlaceholder.Item
                  marginLeft={20}
                  borderRadius={10}
                  width={normalize(240)}
                  height={normalize(130)}
                />
                <SkeletonPlaceholder.Item
                  marginLeft={20}
                  borderRadius={10}
                  width={normalize(240)}
                  height={normalize(130)}
                />
              </SkeletonPlaceholder.Item>
            </SkeletonPlaceholder>
          </View>
          <View style={[styles.header, {marginTop: normalize(10)}]}>
            <Text style={styles.title}>New Releases</Text>
            <TouchableOpacity disabled={true}>
              <Text style={styles.seemore}>See more</Text>
            </TouchableOpacity>
          </View>
          <View>
            <SkeletonPlaceholder>
              <SkeletonPlaceholder.Item marginTop={10} flexDirection="row">
                <SkeletonPlaceholder.Item
                  marginLeft={20}
                  borderRadius={10}
                  width={normalize(140)}
                  height={normalize(140)}
                />
                <SkeletonPlaceholder.Item
                  marginLeft={20}
                  borderRadius={10}
                  width={normalize(140)}
                  height={normalize(140)}
                />
                <SkeletonPlaceholder.Item
                  marginLeft={20}
                  borderRadius={10}
                  width={normalize(140)}
                  height={normalize(140)}
                />
              </SkeletonPlaceholder.Item>
            </SkeletonPlaceholder>
          </View>
          <View style={[styles.header, {marginTop: normalize(10)}]}>
            <Text style={styles.title}>Trending Now</Text>
            <TouchableOpacity disabled={true}>
              <Text style={styles.seemore}>See more</Text>
            </TouchableOpacity>
          </View>
          <View style={{paddingBottom: 10}}>
            <SkeletonPlaceholder>
              <SkeletonPlaceholder.Item marginTop={10} flexDirection="row">
                <SkeletonPlaceholder.Item
                  marginLeft={20}
                  borderRadius={10}
                  width={normalize(140)}
                  height={normalize(140)}
                />
                <SkeletonPlaceholder.Item
                  marginLeft={20}
                  borderRadius={10}
                  width={normalize(140)}
                  height={normalize(140)}
                />
                <SkeletonPlaceholder.Item
                  marginLeft={20}
                  borderRadius={10}
                  width={normalize(140)}
                  height={normalize(140)}
                />
              </SkeletonPlaceholder.Item>
            </SkeletonPlaceholder>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default LoadingHome;

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
    marginTop: normalize(20),
  },
  category: {},
  TouchableOpacity: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8,
    backgroundColor: '#F5F5FA',
    margin: 5,
    borderRadius: 8,
    marginTop: normalize(15),
  },
  title: {
    fontFamily: Style.fontFamily.bold,
    fontSize: Style.fontSize.small,
    color: '#000',
  },
  seemore: {
    fontFamily: Style.fontFamily.medium,
    fontSize: Style.fontSize.small,
    color: Style.buttonColor,
  },
});
