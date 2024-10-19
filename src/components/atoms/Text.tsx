import React from "react";
import { StyleSheet, Text, View } from "react-native";

const TextComponent = () => {
  return (
    <View>
      <Text style={styles.text}>Datos</Text>
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
