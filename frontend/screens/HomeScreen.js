import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Nutricionista Digital</Text>
      <Text style={styles.subtitle}>
        Calcula tu IMC y recibe un plan de dieta personalizado
      </Text>

      <View style={styles.buttonContainer}>
        <Button
          title="Ingresar Perfil"
          onPress={() => navigation.navigate("Profile")}
        />
      </View>

      <View style={styles.buttonContainer}>
        <Button
          title="Ver Plan de Dieta"
          onPress={() => navigation.navigate("DietPlan")}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#f5f5f5",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#2c3e50",
  },
  subtitle: {
    fontSize: 16,
    textAlign: "center",
    marginBottom: 30,
    color: "#34495e",
  },
  buttonContainer: {
    marginVertical: 10,
    width: "80%",
  },
});
