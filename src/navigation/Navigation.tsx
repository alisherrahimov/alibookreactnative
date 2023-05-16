import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screens/tabs/Home';
import Search from '../screens/tabs/Search';
import Library from '../screens/tabs/Library';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Settings from '../screens/Settings';
import User from '../screens/User';
import Enter from '../screens/Enter';
import Error from '../screens/Error';
import Login from '../screens/auth/Login';
import Register from '../screens/auth/Register';
import ConfirmationCode from '../screens/auth/ConfirmationCode';
import ForgetPassword from '../screens/auth/ForgetPassword';
import {NavigationType} from '../types/NavigationType';

import CustomBottomTabBar from './CustomBottomTab';

import Welcome from '../screens/auth/Welcome';
import SelectTopic from '../screens/auth/SelectTopic';

import Books from '../screens/Books';
import BookDetails from '../screens/BookDetails';
import UserActive from '../screens/auth/UserActive';
import Book from '../screens/Book';
import {getItem} from '../utils/storage';
import ReadBook from '../screens/ReadBook';

const TabNavigator = createBottomTabNavigator();
const StackNavigator = createNativeStackNavigator<NavigationType>();

const BottomTab = () => {
  return (
    <TabNavigator.Navigator
      tabBar={props => <CustomBottomTabBar {...props} />}
      screenOptions={{
        headerShown: false,
        tabBarHideOnKeyboard: true,
      }}>
      <TabNavigator.Screen
        name="Home"
        component={Home}
        options={{tabBarLabel: 'Home'}}
      />
      <TabNavigator.Screen
        name="Search"
        component={Search}
        options={{tabBarLabel: 'Search'}}
      />
      <TabNavigator.Screen
        name="Library"
        component={Library}
        options={{tabBarLabel: 'Library'}}
      />
    </TabNavigator.Navigator>
  );
};

const allNavigation = [
  {
    name: 'Home',
    component: Home,
  },
  {
    name: 'Books',
    component: Books,
  },
  {
    name: 'BookDetails',
    component: BookDetails,
  },
  {
    name: 'Settings',
    component: Settings,
  },
  {
    name: 'User',
    component: User,
  },
  {
    name: 'Error',
    component: Error,
  },
  {
    name: 'Book',
    component: Book,
  },
  {
    name: 'BottomTab',
    component: BottomTab,
  },
  {
    name: 'ReadBook',
    component: ReadBook,
  },
  {
    name: 'Search',
    component: Search,
  },
  {
    name: 'Library',
    component: Library,
  },
  {
    name: 'Enter',
    component: Enter,
  },
  {
    name: 'Login',
    component: Login,
  },
  {
    name: 'Register',
    component: Register,
  },
  {
    name: 'ForgetPassword',
    component: ForgetPassword,
  },
  {
    name: 'Welcome',
    component: Welcome,
  },
  {
    name: 'SelectTopic',
    component: SelectTopic,
  },
  {
    name: 'UserActive',
    component: UserActive,
  },
  {
    name: 'ConfirmationCode',
    component: ConfirmationCode,
  },
];

const NavigationX = () => {
  const token = getItem('token');
  return (
    <StackNavigator.Navigator
      initialRouteName={token.length <= 0 ? 'Enter' : 'BottomTab'}
      screenOptions={{headerShown: false}}>
      {allNavigation.map((item, index) => (
        <StackNavigator.Screen
          key={index}
          name={item.name}
          component={item.component}
        />
      ))}
    </StackNavigator.Navigator>
  );
};

const Navigation = () => {
  return <NavigationX />;
};

export default Navigation;
