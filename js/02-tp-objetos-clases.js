/*
Ejercicio 1: 
Crea un objeto persona que contenga las propiedades nombre, edad y hobbies
(un array de strings). 
Luego, escribe una función que reciba un objeto persona 
y un nuevo hobby 
y añada este hobby a la lista de hobbies de la persona. 
Finalmente, imprime los hobbies de la persona usando un bucle. 
Usa prompt para ingresar los datos de la persona y el nuevo hobby.
*/

//notacion literal
const persona = {
  nombre: "Maximiliano",
  apellido: "Ordoñez",
  edad: 34,
  ciudad: "San Miguel De Tucuman",
  pais: "Argentina",
  hobbies: [
    "Crear paginas",
    "Jugar Minecraft Técnico",
    "Escuchar musica de Rock",
  ],
  //Metodos
};

function agregarHobby(objetoPersona, nuevoHobby) {
  objetoPersona.hobbies.push(nuevoHobby);
}
const hobbyIngresado = prompt("Ingresá un nuevo hobby:");
agregarHobby(persona, hobbyIngresado);

// mostrar el objeto
document.writeln(`<h1>Objeto Persona</h1>`);
document.writeln(`<p>Nombre: ${persona.nombre} </p>`);
document.writeln(`<p>Apellido: ${persona.apellido} </p>`);
document.writeln(`<p>Edad: ${persona.edad} </p>`);
document.writeln(`<p>Ciudad: ${persona.ciudad} </p>`);
document.writeln(`<p>Pais: ${persona.pais} </p>`);
document.writeln(`<p>Hobbies: ${persona.hobbies.join(", ")}</p>`);

document.writeln(`<p>Hobbies:</p>`);
document.writeln(`<ul>`);
for (let hobby of persona.hobbies) {
  document.writeln(`<li>${hobby}</li>`);
}
document.writeln(`</ul>`);
