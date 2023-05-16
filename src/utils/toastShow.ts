import {Toast} from 'react-native-toast-message/lib/src/Toast';

export enum toastEnum {
  tomato = 'tomato',
}
export const ToastShow = (
  success: boolean,
  text: string,
  type: toastEnum,
  dark: boolean,
) => {
  Toast.show({
    autoHide: true,
    visibilityTime: 2000,
    position: 'top',
    text1: text,
    type: toastEnum.tomato,
    props: {
      dark,
      error: success,
    },
    topOffset: 50,
  });
};
