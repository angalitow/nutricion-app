import React, { useState } from "react";
import { View, Text, TextInput, Button } from "react-native";

export default function ProfileScreen({ navigation }) {
  const [peso, setPeso] = useState("");
  const [altura, setAltura] = useState("");
  const [objetivo, setObjetivo] = useState("bajar");

  const enviarDatos = () => {
    navigation.navigate("DietPlan", { peso, altura, objetivo });
  };

  return (
    <View>
      <Text>Peso (kg):</Text>
      <TextInput value={peso} onChangeText={setPeso} keyboardType="numeric" />
      <Text>Altura (m):</Text>
      <TextInput value={altura} onChangeText={setAltura} keyboardType="numeric" />
      <Button title="Generar Plan" onPress={enviarDatos} />
    </View>
  );
}
