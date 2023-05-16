import {FlatList, StyleSheet, TouchableOpacity} from 'react-native';
import React, {useCallback, useEffect, useMemo, useRef} from 'react';
import BottomSheet from '@gorhom/bottom-sheet';
import {useTheme} from '@react-navigation/native';
import {AppTheme} from '../style/style';
import MyText from './MyText';
import {EyeIcon} from '../icons';

interface IBottom {
  data: string[];
  page: number | null;
  onScrollPage: (i: number) => void;
  getRef: any;
}
const BottomSheetList = ({getRef, onScrollPage, page, data}: IBottom) => {
  const {colors} = useTheme() as AppTheme;
  const bottomSheetRef = useRef<BottomSheet>(null);

  // variables
  const snapPoints = useMemo(() => ['25%', '50%'], []);

  // callbacks
  const handleSheetChanges = useCallback((index: number) => {
    console.log('handleSheetChanges', index);
  }, []);

  useEffect(() => {
    let ref = {
      open: () => {
        bottomSheetRef.current?.expand();
      },
    };
    getRef(ref);
  }, [getRef]);

  return (
    <BottomSheet
      ref={bottomSheetRef}
      index={0}
      snapPoints={snapPoints}
      handleIndicatorStyle={{backgroundColor: colors.text}}
      backgroundStyle={{backgroundColor: colors.background}}
      handleStyle={{
        backgroundColor: colors.background,
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
      }}
      style={{backgroundColor: colors.background}}
      onChange={handleSheetChanges}>
      <FlatList
        data={data}
        renderItem={({item, index}) => {
          return (
            <TouchableOpacity
              onPress={() => {
                bottomSheetRef.current?.close();
                onScrollPage(index);
              }}
              style={[styles.btn, {backgroundColor: colors.buttonColor}]}
              key={index}>
              <MyText style={{color: '#fff'}} text={`${index + 1} - Varaq`} />
              {index + 1 === page ? (
                <EyeIcon width={20} height={20} color={'#fff'} />
              ) : null}
            </TouchableOpacity>
          );
        }}
      />
    </BottomSheet>
  );
};

export default BottomSheetList;

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    alignItems: 'center',
  },
  btn: {
    marginVertical: 10,
    justifyContent: 'space-between',
    marginHorizontal: 10,
    paddingVertical: 20,
    borderRadius: 12,
    flexDirection: 'row',
    paddingHorizontal: 15,
  },
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: 'grey',
  },
});
