/*
Ejercicio 2: 
Crea un array de objetos, 
donde cada objeto represente a un estudiante
con propiedades nombre y nota. 
Luego, escribe una función que reciba este array 
y calcule la nota media de los estudiantes. 
Usa prompt para ingresar los datos de los estudiantes.
*/

//notacion literal
const estudiantes = [
  { nombre: 'Maxi', nota: 8.5 },
  { nombre: 'Ana', nota: 7.1 },
  { nombre: 'Luciana', nota: 8.5 }
];


const cantidadNuevos = parseInt(prompt("¿Cuántos estudiantes querés agregar?"));

for (let i = 0; i < cantidadNuevos; i++) {
  const nombre = prompt(`Nombre del estudiante ${i + 1}:`);
  const nota = parseFloat(prompt(`Nota de ${nombre}:`));
  estudiantes.push({ nombre: nombre, nota: nota });
}

// Función para calcular el promedio
function calcularPromedio(lista) {
  let suma = 0;
  for (let estudiante of lista) {
    suma += estudiante.nota;
  }
  return suma / lista.length;
}

// Mostrar todos los estudiantes y el promedio
document.writeln("<h2>Listado de Estudiantes</h2>");
for (let estudiante of estudiantes) {
  document.writeln(`<p>${estudiante.nombre} - Nota: ${estudiante.nota}</p>`);
}

const promedio = calcularPromedio(estudiantes);
document.writeln(`<h3>Nota promedio: ${promedio.toFixed(2)}</h3>`);
