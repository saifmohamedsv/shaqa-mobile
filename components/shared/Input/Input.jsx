import React from "react";
import { Text, TextInput, View } from "react-native";
import { styles } from "./Input.style";
import { COLORS } from "../../../constants";

const Input = ({ label, ...props }) => {
  return (
    <View style={styles.inputContainer}>
      {label && <Text style={{ color: "#fff" }}>{label}</Text>}
      <TextInput
        placeholderTextColor={COLORS.gray}
        style={styles.inputBody}
        {...props}
      />
    </View>
  );
};

export default Input;
