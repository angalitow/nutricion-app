function calcularIMC(peso, altura) {
  return (peso / (altura * altura)).toFixed(2);
}

function generarPlan({ peso, altura, edad, sexo, objetivo, preferencias, alergias }) {
  let caloriasBase = 2200;

  if (objetivo === "bajar") caloriasBase -= 500;
  if (objetivo === "subir") caloriasBase += 300;

  const comidas = [
    { hora: "08:00", nombre: "Desayuno", calorias: caloriasBase * 0.25 },
    { hora: "12:00", nombre: "Snack", calorias: caloriasBase * 0.15 },
    { hora: "14:00", nombre: "Comida", calorias: caloriasBase * 0.35 },
    { hora: "18:00", nombre: "Snack", calorias: caloriasBase * 0.10 },
    { hora: "20:00", nombre: "Cena", calorias: caloriasBase * 0.15 },
  ];

  return comidas.map(c => ({
    ...c,
    sugerencia: sugerirPlatillo(c.calorias, preferencias, alergias)
  }));
}

function sugerirPlatillo(calorias, preferencias, alergias) {
  let opciones = {
    vegetariano: ["Ensalada de garbanzos", "Tacos de lentejas", "Smoothie verde"],
    vegano: ["Bowl de quinoa", "Hamburguesa de frijol negro", "Tofu salteado"],
    omnivoro: ["Pollo a la plancha", "Salmón con verduras", "Arroz con huevo"]
  };

  let lista = opciones[preferencias] || opciones.omnivoro;
  let platillo = lista[Math.floor(Math.random() * lista.length)];

  if (alergias.includes("gluten") && platillo.includes("tacos")) {
    platillo = "Ensalada fresca sin gluten";
  }

  return `${platillo} (~${Math.round(calorias)} kcal)`;
}

module.exports = { calcularIMC, generarPlan };
