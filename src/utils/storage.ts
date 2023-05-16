import {MMKV} from 'react-native-mmkv';

const storage = new MMKV();

const setItem = (text: string, key: string) => {
  storage.set(key, text);
};

const getItem = (key: string) => {
  return storage.getString(key) ?? '';
};

export {getItem, setItem};
