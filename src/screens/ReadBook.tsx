import {FlatList, StyleSheet, TouchableOpacity, View} from 'react-native';
import React, {useCallback, useMemo, useRef, useState} from 'react';
import Header from '../components/Header';
import {Light, List} from '../icons';
import MyText from '../components/MyText';
import {useRoute, useTheme} from '@react-navigation/native';
import {AppTheme, width} from '../style/style';
import Animated, {
  interpolate,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import {setDark} from '../redux/reducer/user';
import {useAppDispatch, useAppSelector} from '../hooks/reduxHook';
import BottomSheetList from '../components/BottomSheetList';
import BottomSheet from '@gorhom/bottom-sheet';

let data = [
  {
    id: 1,
    title:
      'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going',
  },
  {
    id: 2,
    title:
      'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going',
  },
  {
    id: 3,
    title:
      'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going',
  },
  {
    id: 4,
    title:
      'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going',
  },
  {
    id: 5,
    title:
      'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going',
  },
  {
    id: 6,
    title:
      'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going',
  },
  {
    id: 7,
    title:
      'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going',
  },
];
//max length 1100
const ReadBook = () => {
  // const {item} = useRoute().params;

  let animateValue = useSharedValue(1);
  let bottomRef = useRef<BottomSheet>(null);
  let flatListRef = useRef<FlatList>(null);
  const {colors} = useTheme() as AppTheme;
  const [page, setPage] = useState<number | null>(0);
  const {darkType} = useAppSelector(state => state.user);
  const dispatch = useAppDispatch();

  const btn = [
    {
      id: 1,
      icon: <Light width={24} height={24} color={colors.text} />,
      onPress: () => {
        dispatch(setDark(!darkType));
      },
    },
    {
      id: 2,
      icon: <List width={24} height={24} color={colors.text} />,
      onPress: () => {
        if (bottomRef.current) {
          bottomRef.current?.open();
        }
      },
    },
    {
      id: 4,
      icon: (
        <MyText text={String(Math.round((100 * page!) / data.length)) + '%'} />
      ),
      onPress: () => {},
    },
  ];

  const scrollHandler = useAnimatedScrollHandler({
    onBeginDrag(event, context) {
      animateValue.value = withTiming(1.5);
    },
    onEndDrag(event, context) {
      animateValue.value = withTiming(1);
    },
  });

  const ListAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{scale: animateValue.value}],
    };
  });

  const RenderItem = useCallback(
    ({item, index}: {item: any; index: number}) => {
      return (
        <Animated.View key={index} style={[styles.textView, ListAnimatedStyle]}>
          <MyText lineH={25} text={item.title} size={15} />
        </Animated.View>
      );
    },
    [],
  );

  const onScrollPage = useCallback((i: number) => {
    if (flatListRef.current) {
      flatListRef.current?.scrollToIndex({index: i, animated: true});
    }
  }, []);
  const renderList = useMemo(() => {
    return (
      <Animated.FlatList
        ref={flatListRef}
        // data={item.book.data}
        data={data}
        onScroll={scrollHandler}
        scrollEventThrottle={16}
        horizontal
        onViewableItemsChanged={({viewableItems}) => {
          setPage(viewableItems[0].index! + 1);
        }}
        pagingEnabled
        renderItem={({item, index}) => {
          return <RenderItem index={index} item={item} key={index} />;
        }}
      />
    );
  }, [RenderItem, data]);
  return (
    <View style={styles.container}>
      <Header title={`${page} - Varaq`} />

      {renderList}
      <View style={styles.bottomBtnCon}>
        {btn.map((item, index) => (
          <TouchableOpacity
            onPress={item.onPress}
            key={index}
            style={styles.bottomBtn}>
            {item.icon}
          </TouchableOpacity>
        ))}
      </View>
      {/* <BottomSheetList
        data={item.book.data}
        onScrollPage={onScrollPage}
        page={page}
        getRef={ref => (bottomRef.current = ref)}
      /> */}
    </View>
  );
};

export default ReadBook;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textView: {
    width: width,
    alignSelf: 'center',
    paddingHorizontal: 10,
  },
  bottomBtn: {
    padding: 20,
  },
  bottomBtnCon: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-evenly',
  },
  text: {
    color: '#fff',
    lineHeight: 25,
    textAlign: 'left',
  },
});
