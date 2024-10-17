import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import ImageComponent from "../atoms/Image";
import { BudgetType } from "../../utils/BudgetType";
interface ContentCardProps {
  onPres: (name: string) => void;
}

const ContentCard: React.FC<ContentCardProps> = ({ onPres }) => {
  return (
    <>
      {BudgetType.map((type) => (
        <TouchableOpacity key={type.id} onPress={() => onPres(type.navigation)}>
          <View style={styles.container}>
            <ImageComponent
              style={styles.image}
              source={type.image}
            ></ImageComponent>
            <Text style={styles.text}>{type.name.split(" ").join("\n")}</Text>
          </View>
        </TouchableOpacity>
      ))}
    </>
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
    borderWidth: 2,
  },
  text: {
    textAlign: "center",
    color: "#3D5A80",
    fontSize: 35,
    fontWeight: "bold",
    marginLeft: 15,
    width: "50%",
  },
  image: {
    width: 100,
    height: 100,
    bottom: 10,
    resizeMode: "contain",
  },
});

export default ContentCard;
