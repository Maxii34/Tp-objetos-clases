/*
Ejercicio 3: 
Crea un objeto libro
que tenga propiedades título, autor, año y género. --
Luego, escribe una función que reciba un array de libros y un género 
y devuelva un array con los libros de ese género usando filter. 
Usa prompt para ingresar los datos de los libros y el género.
*/

//notacion literal
const libro = {
    titulo: 'Cien años de soledad',
    autor: 'Gabriel García Márquez',
    anio: '1967',
    genero: 'Realismo magico',
    idioma: 'Español',
    editorial: 'Sudamericana'
}



document.writeln(`<h1>Objeto Libro</h1>`);
document.writeln(`<p>Titulo: ${libro.titulo} </p>`);
document.writeln(`<p>Autor: ${libro.autor} </p>`);
document.writeln(`<p>Año: ${libro.anio} </p>`);
document.writeln(`<p>Genero: ${libro.genero} </p>`);
document.writeln(`<p>idoma: ${libro.idioma} </p>`);
document.writeln(`<p>Editorial: ${libro.editorial} </p>`);