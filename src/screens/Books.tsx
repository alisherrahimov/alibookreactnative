import {FlatList, StyleSheet, View} from 'react-native';
import React from 'react';
import Header from '../components/Header';
import BookCard from '../components/BookCard';
import {useRoute} from '@react-navigation/native';
import {RootStackScreenProps} from '../types/NavigationType';
import Empty from '../components/Empty';

const Books = () => {
  const route = useRoute<RootStackScreenProps<'Books'>['route']>();
  const {title, id} = route.params;
  console.log('red');
  return (
    <View style={styles.container}>
      <Header title={title} />

      <FlatList
        contentContainerStyle={{alignSelf: 'center', flex: 1}}
        numColumns={2}
        data={[]}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({item, index}) => <BookCard data={item} index={index} />}
        ListEmptyComponent={<Empty />}
      />
    </View>
  );
};

export default Books;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
