import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {normalize} from '../style/style';
interface Props {
  item: number;
  index: number;
}
const BestSellerCard: React.FC<Props> = ({index, item}) => {
  return (
    <View
      style={[
        styles.container,
        {margin: index % 2 == 0 ? 18 : undefined, marginTop: 18},
      ]}>
      <Text>{index}</Text>
    </View>
  );
};

export default BestSellerCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: normalize(240),
    height: normalize(130),
    backgroundColor: 'red',
    borderRadius: 10,
  },
});
