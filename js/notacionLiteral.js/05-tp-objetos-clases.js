/*
Ejercicio 4:  
Crea un objeto alumno con propiedades nombre, curso y calificaciones 
(un array de números). 
Escribe una función que reciba un objeto alumno y un número, 
y que añada la calificación al array de calificaciones del alumno.
Calcula la calificación más alta del alumno 
y clasifica al alumno según su calificación más alta 
(A para 9-10, B para 7-8, C para 5-6, D para 0-4).
*/

//notacion literal
const alumno = {
  nombre: "María López",
  curso: "Matemáticas"
};

function evaluarAlumnoConCalificacion(alumno, nuevaCalificacion) {
  if (typeof nuevaCalificacion !== 'number' || isNaN(nuevaCalificacion) || nuevaCalificacion < 0 || nuevaCalificacion > 10) {
    console.log("Error: La calificación debe ser un número entre 0 y 10.");
    return;
  }

  if (!Array.isArray(alumno.calificaciones)) {
    alumno.calificaciones = [];
  }

  alumno.calificaciones.push(nuevaCalificacion);

  const mejorNota = Math.max(...alumno.calificaciones);

  let clasificacion;
  if (mejorNota >= 9) {
    clasificacion = "A";
  } else if (mejorNota >= 7) {
    clasificacion = "B";
  } else if (mejorNota >= 5) {
    clasificacion = "C";
  } else {
    clasificacion = "D";
  }

  return {
    nombre: alumno.nombre,
    curso: alumno.curso,
    calificaciones: alumno.calificaciones,
    mejorNota: mejorNota,
    clasificacion: clasificacion
  };
}

// Agregamos calificaciones y mostramos resultados
evaluarAlumnoConCalificacion(alumno, 8.5);
evaluarAlumnoConCalificacion(alumno, 9.2);
evaluarAlumnoConCalificacion(alumno, 7);
const resultado = evaluarAlumnoConCalificacion(alumno, 10);

console.log(resultado);
console.log(alumno);