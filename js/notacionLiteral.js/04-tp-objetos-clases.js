/*
Ejercicio 3:
1- Crea un objeto libro
2- que tenga propiedades título, autor, año y género.
3- Luego, escribe una función que reciba un array de libros y un género
4- y devuelva un array con los libros de ese género usando filter.
5- Usa prompt para ingresar los datos de los libros y el género.
*/

// notacion literal

function obtenerLibrosPorGenero(libros, genero) {
  return libros.filter(
    (libro) => libro.genero.toLowerCase() === genero.toLowerCase()
  );
}

const cantidadLibros = parseInt(prompt("¿Cuántos libros quieres registrar?"));
const biblioteca = [];

for (let i = 0; i < cantidadLibros; i++) {
  const libro = {
    titulo: prompt(`Ingresa el título del libro ${i + 1}:`),
    autor: prompt(`Ingresa el autor del libro ${i + 1}:`),
    anio: prompt(`Ingresa el año de creación del libro ${i + 1}:`),
    genero: prompt(`Ingresa el género del libro ${i + 1}:`),
  };
  biblioteca.push(libro);
}

const generoParaBuscar = prompt(
  "Ingresa el género de libros que quieres buscar:"
);

const librosEncontrados = obtenerLibrosPorGenero(biblioteca, generoParaBuscar);

if (librosEncontrados.length > 0) {
  console.log(`\n--- Libros encontrados del género "${generoParaBuscar}" ---`);
  librosEncontrados.forEach((libro) => {
    document.writeln(
      `- Título: ${libro.titulo}, Autor: ${libro.autor}, Año: ${libro.anio}<br>`
    );
  });
} else {
  document.writeln(
    `No se encontraron libros del género "${generoParaBuscar}".`
  );
}
