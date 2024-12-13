import React, { useState } from "react";
import { StyleSheet, Text, View, Alert } from "react-native";
import Input from "../atoms/Input";
import TextComponent from "../atoms/Text";
import Button from "../atoms/Button";
import { calculateBudget } from "../../utils/CalculateBudget";

const Sales = () => {
  const [priceUnit, setPriceUnit] = useState("");
  const [quantity, setQuantity] = useState("");
  const [discount, setDiscount] = useState("");
  const [taxRate, setTaxRate] = useState("");
  const [additionalCost, setAdditionalCost] = useState("");

  const handleCalculate = () => {
    const price = parseFloat(priceUnit) || 0;
    const qty = parseFloat(quantity) || 0;
    const disc = parseFloat(discount) || 0;
    const tax = parseFloat(taxRate) || 0;
    const additional = parseFloat(additionalCost) || 0;

    const totalBudget = calculateBudget(price, qty, disc, tax, additional);

    const result = [];
    result.push(
      { label: "price", value: price },
      { label: "qty", value: qty },
      { label: "disc", value: disc },
      { label: "tax", value: tax },
      { label: "additional", value: additional },
      { label: "totalBudget", value: totalBudget }
    );

    console.log(result);

    Alert.alert(
      "Presupuesto Calculado",
      `El presupuesto total es: $${totalBudget.toFixed(2)}`
    );
  };
  return (
    <View style={styles.container}>
      <TextComponent />
      <Input
        placeholder="Precio por Unidad"
        onChangeText={setPriceUnit}
        value={priceUnit}
      />
      <Input
        placeholder="Cantidad"
        onChangeText={setQuantity}
        value={quantity}
      />
      <Input
        placeholder="Descuento (%)"
        onChangeText={setDiscount}
        value={discount}
      />
      <Input
        placeholder="Impuesto (%)"
        onChangeText={setTaxRate}
        value={taxRate}
      />
      <Input
        placeholder="Costos Adicionales"
        onChangeText={setAdditionalCost}
        value={additionalCost}
      />
      <Button title="Calcular" onPress={handleCalculate} />
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
