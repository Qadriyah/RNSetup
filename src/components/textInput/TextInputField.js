import React, { Component } from "react";
import { View, TextInput } from "react-native";
import styles from "./textInputStyles";

class TextInputField extends Component {
  state = {
    inputValue: ""
  };

  onChange = event => {
    this.setState({ inputValue: event });
  };

  render() {
    return (
      <View style={styles.container}>
        <TextInput {...this.props} onChangeText={this.onChange} />
      </View>
    );
  }
}

export default TextInputField;
