import {useTheme} from '@react-navigation/native';
import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {AppTheme, normalize, Style} from '../style/style';
import {HomeIcon, LibraryIcon, SearchIcon} from '../icons';
interface Props {
  navigation: any;
  state: any;
  descriptors: any;
}
const CustomBottomTabBar: React.FC<Props> = ({
  state,
  descriptors,
  navigation,
}) => {
  const {colors, dark} = useTheme() as AppTheme;

  return (
    <View style={styles.view}>
      {state.routes.map((route: any, index: number) => {
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            // The `merge: true` option makes sure that the params inside the tab screen are preserved
            navigation.navigate({name: route.name, merge: true});
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        const renderIcon = (i: number, focus: boolean) => {
          switch (i) {
            case 0:
              return (
                <HomeIcon
                  width={20}
                  height={20}
                  color={
                    focus
                      ? dark
                        ? '#fff'
                        : Style.buttonColor
                      : Style.bottomTextColor
                  }
                />
              );
            case 1:
              return (
                <SearchIcon
                  width={20}
                  height={20}
                  color={
                    focus
                      ? dark
                        ? '#fff'
                        : Style.buttonColor
                      : Style.bottomTextColor
                  }
                />
              );
            case 2:
              return (
                <LibraryIcon
                  width={20}
                  height={20}
                  color={
                    focus
                      ? dark
                        ? '#fff'
                        : Style.buttonColor
                      : Style.bottomTextColor
                  }
                />
              );
          }
        };

        return (
          <TouchableOpacity
            key={index}
            activeOpacity={0.8}
            hitSlop={{top: 10, bottom: 10, left: 10, right: 10}}
            accessibilityRole="button"
            accessibilityState={isFocused ? {selected: true} : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={[
              styles.TouchableOpacity,
              {backgroundColor: colors.bottomTabColor},
            ]}>
            {renderIcon(index, isFocused)}
            <Text
              style={{
                color: isFocused
                  ? dark
                    ? '#fff'
                    : Style.buttonColor
                  : Style.bottomTextColor,
                fontSize: normalize(12),
                fontFamily: Style.fontFamily.medium,
              }}>
              {label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};
const styles = StyleSheet.create({
  TouchableOpacity: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: Style.bottomTabHeight - 10,
  },
  view: {
    flexDirection: 'row',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 1.5,
    backgroundColor: '#fff',
  },
});

export default CustomBottomTabBar;
