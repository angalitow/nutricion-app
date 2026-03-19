import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import DietCard from "../components/DietCard";

// Dentro del return de DietPlanScreen
{plan.map((c, i) => (
  <DietCard
    key={i}
    hora={c.hora}
    nombre={c.nombre}
    sugerencia={c.sugerencia}
    calorias={c.calorias}
  />
))}

export default function DietPlanScreen({ route }) {
  const { peso, altura, objetivo } = route.params;
  const [plan, setPlan] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/diet/plan", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ peso, altura, edad: 25, sexo: "M", objetivo, preferencias: "omnivoro", alergias: [] })
    })
      .then(res => res.json())
      .then(data => setPlan(data.plan));
  }, []);

  return (
    <View>
      <Text>Tu plan de dieta:</Text>
      {plan.map((c, i) => (
        <Text key={i}>{c.hora} - {c.nombre}: {c.sugerencia}</Text>
      ))}
    </View>
  );
}
