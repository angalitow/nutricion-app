const express = require("express");
const bodyParser = require("body-parser");
const dietRoutes = require("./routes/diet");

const app = express();
app.use(bodyParser.json());

app.use("/diet", dietRoutes);

const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
