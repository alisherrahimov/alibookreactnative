import {FlatList, StyleSheet, View} from 'react-native';
import React from 'react';
import Header from '../components/Header';
import BookCard from '../components/BookCard';
import {useRoute} from '@react-navigation/native';
import {RootStackScreenProps} from '../types/NavigationType';

const Books = () => {
  const route = useRoute<RootStackScreenProps<'Books'>['route']>();
  const {title, id} = route.params;

  return (
    <View style={styles.container}>
      <Header title={title} />

      <FlatList
        contentContainerStyle={{alignSelf: 'center', marginTop: 10}}
        numColumns={2}
        data={[]}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({item, index}) => <BookCard data={item} index={index} />}
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
