import React from "react";
import { StyleSheet, Text, View } from "react-native";
import TextComponent from "../atoms/Text";

const ResultCard = () => {
  return (
    <View>
      <View style={styles.container}>
        <TextComponent title="Precio:" style={styles.text}/>
        <TextComponent title="Cantidad:" style={styles.text}/>
        <TextComponent title="Descuento:" style={styles.text}/>
        <TextComponent title="Impuesto:" style={styles.text}/>
        <TextComponent title="Costos adicionales:" style={styles.text}/>
        <View style = {styles.lineStyle} />
        <TextComponent title="Total:" style={styles.text}/>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#98C1D9",
    justifyContent: "center",
    margin: 10,
    width: 350,
    borderRadius: 15,
    borderWidth: 2,
    padding:25
  },
  text:{
    color:"#000",
    fontSize:20,
    fontWeight: "bold",
    margin:10
  },
  lineStyle:{
    borderWidth: 1,
    borderColor:'black',
    width: 300,
}
});
export default ResultCard;
