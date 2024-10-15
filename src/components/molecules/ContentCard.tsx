import React from "react";
import { StyleSheet, Text, View } from "react-native";
import ImageComponent from "../atoms/Image";

const ContentCard = () => {
  return (
    <View style={styles.container}>
      <ImageComponent
        style={styles.image}
        source={require("../../../assets/sale.png")}
      ></ImageComponent>
      <Text style={styles.text}> Mano {"\n"} de {"\n"} obra</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#98C1D9",
    alignItems: "center",
    justifyContent: "center",
    margin: 10,
    height: 200,
    width: 350,
    flexDirection: "row",
    borderRadius: 15,
    borderWidth:2
  },
  text: {
    textAlign:"center",
    color: "#3D5A80",
    fontSize: 35,
    fontWeight: "bold",
    paddingLeft:35
  },
  image: {
    width: 100,
    height: 100,
    bottom: 10,
    resizeMode: "contain",
  },
});

export default ContentCard;
