import React from "react";
import { StyleSheet, TextInput } from "react-native";

const Input = () => {
  return (
    <TextInput
      style={styles.input}
      placeholder="your value here"
      keyboardType="numeric"
    ></TextInput>
  );
};
const styles = StyleSheet.create({
  input: {
    width: "90%",
    backgroundColor: "#E0FBFC",
    borderRadius: 50,
    padding: 15,
    fontSize: 20,
    borderWidth: 2,
  },
});
export default Input;
