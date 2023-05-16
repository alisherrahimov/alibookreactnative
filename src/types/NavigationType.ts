import {BottomTabScreenProps} from '@react-navigation/bottom-tabs';
import {CompositeScreenProps} from '@react-navigation/native';
import {StackScreenProps} from '@react-navigation/stack';
export type NavigationType = {
  Home: any; //
  Settings: any; //
  Login: any; //
  Register: any; //
  ForgetPassword: any; //
  User: any; //
  Enter: any; //
  Error: any; //
  Library: any; //
  Search: any; //
  BottomTab: any; //
  ConfirmationCode: any;
  Welcome: any; //
  SelectTopic: any; //
  Books: any; //
  BookDetails: any; //
  ChangePassword: any;
  UserActive: any; //
  Book: any; //
  ReadBook: any; //
};
export type RootStackScreenProps<T extends keyof NavigationType> =
  StackScreenProps<NavigationType, T>;
export type HomeTabScreenProps<T extends keyof NavigationType> =
  CompositeScreenProps<
    BottomTabScreenProps<NavigationType, T>,
    RootStackScreenProps<keyof NavigationType>
  >;
declare global {
  namespace ReactNavigation {
    interface RootParamList extends NavigationType {}
  }
}
