import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function DietCard({ hora, nombre, sugerencia, calorias }) {
  return (
    <View style={styles.card}>
      <Text style={styles.time}>{hora} - {nombre}</Text>
      <Text style={styles.suggestion}>{sugerencia}</Text>
      <Text style={styles.calories}>{Math.round(calorias)} kcal</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#ffffff",
    borderRadius: 10,
    padding: 15,
    marginVertical: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  time: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#2c3e50",
    marginBottom: 5,
  },
  suggestion: {
    fontSize: 16,
    color: "#34495e",
    marginBottom: 5,
  },
  calories: {
    fontSize: 14,
    color: "#16a085",
    fontWeight: "600",
  },
});
