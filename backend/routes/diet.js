const express = require("express");
const router = express.Router();
const { calcularIMC, generarPlan } = require("../utils/nutrition");

router.post("/plan", (req, res) => {
  const { peso, altura, edad, sexo, objetivo, preferencias, alergias } = req.body;

  const imc = calcularIMC(peso, altura);
  const plan = generarPlan({ peso, altura, edad, sexo, objetivo, preferencias, alergias });

  res.json({ imc, plan });
});

module.exports = router;
