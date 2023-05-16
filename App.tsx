import React, {useEffect} from 'react';
import Navigation from './src/navigation/Navigation';
import {Platform, StatusBar, useColorScheme} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import {Toast} from 'react-native-toast-message/lib/src/Toast';
import {toastConfig} from './src/components/Toast';
import {darkSchema, lightSchema} from './src/style/style';
import {style} from './src/style';
import {useAppDispatch, useAppSelector} from './src/hooks/reduxHook';
import {setDark} from './src/redux/reducer/user';

if (Platform.OS === 'android') {
  StatusBar.setBackgroundColor('rgba(0,0,0,0)', true);
  StatusBar.setTranslucent(true);
}

const App = () => {
  const type = useColorScheme();
  const {user} = useAppSelector(state => state);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setDark(type === 'dark'));
  }, [dispatch, type]);
  return (
    <NavigationContainer theme={user.darkType ? darkSchema : lightSchema}>
      <SafeAreaProvider style={{flex: 1}}>
        <SafeAreaView
          edges={['bottom']}
          style={[style.status_bar_light_of_night(user.darkType)]}>
          <StatusBar
            barStyle={user.darkType ? 'light-content' : 'dark-content'}
          />
          <Navigation />
          <Toast config={toastConfig} />
        </SafeAreaView>
      </SafeAreaProvider>
    </NavigationContainer>
  );
};

export default App;
