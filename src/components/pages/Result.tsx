import React from "react";
import { StyleSheet, Text, View } from "react-native";
import TextComponent from "../atoms/Text";
import Button from "../atoms/Button";
import ResultCard from "../molecules/ResultCard";

const Result = () => {
  const handleEvent = () => {
    console.log("asda");
  };
  return (
    <View style={styles.container}>
      <TextComponent title="Result" />
      <ResultCard />
      <Button title="New" style={styles.button} onPress={handleEvent} />
      <Button title="PDF" style={styles.button} onPress={handleEvent} />
      <Button title="Send" style={styles.button} onPress={handleEvent} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#3D5A80",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    margin: 5,
    width: 150,
    textAlign: "center",
    alignItems: "center",
  },
});

export default Result;
