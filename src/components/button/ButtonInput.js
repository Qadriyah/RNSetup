import React from "react";
import { View, Button } from "react-native";
import styles from "./buttonStyles";

const ButtonInput = props => {
  return (
    <View style={styles.container}>
      <Button {...props} />
    </View>
  );
};

export default ButtonInput;
