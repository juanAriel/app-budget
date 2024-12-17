import React from "react";
import { StyleSheet, Text, View } from "react-native";

interface TextComponentProps {
  title: string;
  style?: object;
}
const TextComponent: React.FC<TextComponentProps> = ({ title, style }) => {
  return (
    <View>
      <Text style={[styles.text, style]}>{title}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  text: {
    color: "#98C1D9",
    fontSize: 50,
    fontWeight: "bold",
  },
});

export default TextComponent;
