const fs = require("fs");

// Función para registrar una nueva cita
const registrar = (nombre, edad, tipo, color, enfermedad) => {
  const nuevaCita = { nombre, edad, tipo, color, enfermedad };
  const citas = JSON.parse(fs.readFileSync("citas.json", "utf8"));
  citas.push(nuevaCita);
  fs.writeFileSync("citas.json", JSON.stringify(citas, null, 2));
  console.log("Cita registrada con éxito:", nuevaCita);
};

// Función para leer todas las citas
const leer = () => {
  const citas = JSON.parse(fs.readFileSync("citas.json", "utf8"));
  console.log("Citas registradas:");
  console.table(citas);
};

module.exports = { registrar, leer };
