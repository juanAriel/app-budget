import React from "react";
import { StyleSheet, Text, View } from "react-native";
import TextComponent from "../atoms/Text";

interface DataItem {
  label: string;
  value: number;
}
interface ResultCardProps {
  dates: DataItem[];
}
const ResultCard: React.FC<ResultCardProps> = ({ dates }) => {
  console.log(dates[0].value);
  return (
    <View>
      <View style={styles.container}>
        {dates.map((item) =>
          item.label === "additional" ? (
            <>
              <TextComponent
                key={item.label}
                title={`${item.label}: ${item.value}`}
                style={styles.text}
              />
              <View style={styles.lineStyle} />
            </>
          ) : (
            <TextComponent
              key={item.label}
              title={`${item.label}: ${item.value}`}
              style={styles.text}
            />
          )
        )}
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
    padding: 25,
  },
  text: {
    color: "#000",
    fontSize: 20,
    fontWeight: "bold",
    margin: 10,
  },
  lineStyle: {
    borderWidth: 1,
    borderColor: "black",
    width: 300,
  },
});
export default ResultCard;
