import React from "react";
import { Text, TouchableOpacity } from "react-native";
import styles from "./Button.style";

const Button = ({ text, ...props }) => {
  return (
    <TouchableOpacity style={styles.button} {...props}>
      <Text style={styles.buttonText}>{text}</Text>
    </TouchableOpacity>
  );
};

export default Button;
