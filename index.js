/**
 * @format
 */
import {Navigation} from 'react-native-navigation';
import LoginScreen from './src/screens/LoginScreen/LoginScreen';

Navigation.registerComponent(`marble.screens.LoginScreen`, () => LoginScreen);

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      component: {
        name: 'marble.screens.LoginScreen',
      },
    },
  });
});
