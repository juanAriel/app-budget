import React from "react";
import { StyleSheet, TextInput } from "react-native";

interface InputProps {
  placeholder: string;
  value?: string;
  onChangeText?: (text: string) => void;
}

const Input: React.FC<InputProps> = ({ value, onChangeText, placeholder }) => {
  return (
    <TextInput
      style={styles.input}
      value={value}
      onChangeText={onChangeText}
      placeholder={placeholder}
      keyboardType="numeric"
    />
  );
};

const styles = StyleSheet.create({
  input: {
    width: "90%",
    backgroundColor: "#E0FBFC",
    borderRadius: 15,
    padding: 15,
    fontSize: 20,
    borderWidth: 2,
    margin: 5,
  },
});

export default Input;
