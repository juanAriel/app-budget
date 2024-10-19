import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Input from "../atoms/Input";
import TextComponent from "../atoms/Text";

const Sales = () => {
  return (
    <View style={styles.container}>
      <TextComponent />
      <Input />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#3D5A80",
    alignItems: "center",
    // justifyContent: "center",
  },
});

export default Sales;
