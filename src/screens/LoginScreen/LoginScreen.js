import React, {Component} from 'react';
import {View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './loginScreenStyles';
import TextInputField from '../../components/textInput/TextInputField';
import ButtonInput from '../../components/button/ButtonInput';
import startTabs from '../MainDashboard/mainDashboard';

class LoginScreen extends Component {
  onBtnPressed = () => {
    Promise.all([Icon.getImageSource('cart', 30)]).then(source => {
      alert(source[0]);
    });
    // startTabs();
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.loginForm}>
          <Text style={styles.loginLabel}>Login</Text>
          <TextInputField placeholder="Email" />
          <TextInputField placeholder="Password" secureTextEntry={true} />
          <ButtonInput
            title="Login"
            color="green"
            onPress={this.onBtnPressed}
          />
          <Icon.Button name="facebook" backgroundColor="#3b5998">
            Login with facebook
          </Icon.Button>
        </View>
      </View>
    );
  }
}

export default LoginScreen;
