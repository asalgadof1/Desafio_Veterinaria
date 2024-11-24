// Importar el paquete prompt-sync
const prompt = require("prompt-sync")();

// Solicitar datos al usuario
const nombre = prompt("Nombre de la mascota: ");
const edad = prompt("Edad de la mascota: ");
const tipo = prompt("Tipo de animal (perro/gato/etc.): ");
const color = prompt("Color de la mascota: ");
const enfermedad = prompt("Enfermedad: ");

// Crear un objeto con los datos
const cita = { nombre, edad, tipo, color, enfermedad };

// Mostrar los datos ingresados
console.log("Cita registrada con éxito:", cita);
