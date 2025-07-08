/*
5- Crea una clase llamada Persona que siga las siguientes condiciones:
Sus propiedades son: nombre, edad, DNI, sexo (H hombre, M mujer), peso y altura, año de nacimiento. 
Si quieres añadir alguna propiedad extra puedes hacerlo.
Los métodos que se debe poder utilizar son:
mostrarGeneracion: este método debe mostrar un mensaje indicando a qué generación pertenece 
la persona creada y cuál es el rasgo característico de esta generación.
*/

class Persona {
  constructor(
    nombre,
    apellido,
    edad,
    dni,
    sexo,
    peso,
    altura,
    aniodenacimiento
  ) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
    this.dni = dni;
    this.sexo = sexo;
    this.peso = peso;
    this.altura = altura;
    this.aniodenacimiento = aniodenacimiento;
  }

  // Método mostrarGeneracion
  mostrarGeneracion() {
    const anio = this.aniodenacimiento;

    if (anio >= 1920 && anio <= 1940) {
      console.log(`${this.nombre} pertenece a la Silent Generation.`);
      console.log("Rasgo característico: Austeridad y disciplina.");
    } else if (anio >= 1946 && anio <= 1964) {
      console.log(`${this.nombre} pertenece a la Baby Boom.`);
      console.log("Rasgo característico: Ambición y optimismo.");
    } else if (anio >= 1965 && anio <= 1979) {
      console.log(`${this.nombre} pertenece a la Generación X.`);
      console.log("Rasgo característico: Obsesionados por el éxito.");
    } else if (anio >= 1980 && anio <= 1994) {
      console.log(`${this.nombre} pertenece a la Generación Y (Millennials).`);
      console.log("Rasgo característico: Frustración.");
    } else if (anio >= 1995 && anio <= 2009) {
      console.log(`${this.nombre} pertenece a la Generación Z.`);
      console.log("Rasgo característico: Irreverencia.");
    } else if (anio >= 2010 && anio <= 2024) {
      console.log(`${this.nombre} pertenece a la Generación Alpha.`);
      console.log("Rasgo característico: Innovación y ser digital nativo.");
    } else {
      console.log(`${this.nombre} no pertenece a una generación conocida.`);
    }
  }

  // Método mostrarDatos
  mostrarDatos() {
    console.log(`
        === Datos de la Persona ===
        Nombre: ${this.nombre}
        Apellido: ${this.apellido}
        Edad: ${this.edad}
        DNI: ${this.dni}
        Sexo: ${this.sexo}
        Peso: ${this.peso} kg
        Altura: ${this.altura} m
        Año de nacimiento: ${this.aniodenacimiento}
        -----------------------------
        `);
  }

  // Método esMayorDeEdad
  esMayorDeEdad() {
    return this.edad >= 18;
  }

  // Método generaDNI
  generaDNI() {
    const numeroAleatorio = Math.floor(Math.random() * 90000000) + 10000000;
    return numeroAleatorio.toString();
  }
}

// Crear instancias
const maxi = new Persona(
  "Maximiliano",
  "Ordoñez",
  34,
  "34910958",
  "H",
  68,
  1.71,
  1991
);
const ana = new Persona("Ana", "López", 30, "12345678", "M", 65, 1.68, 1995);
const carlos = new Persona(
  "Carlos",
  "Gómez",
  45,
  "87654321",
  "H",
  80,
  1.75,
  1980
);
const lucia = new Persona(
  "Lucía",
  "Martínez",
  12,
  "11223344",
  "M",
  40,
  1.5,
  2013
);

// Usar los métodos
maxi.mostrarDatos();
console.log(`${maxi.nombre} es mayor de edad?`, maxi.esMayorDeEdad());
maxi.mostrarGeneracion();

ana.mostrarDatos();
console.log(`${ana.nombre} es mayor de edad?`, ana.esMayorDeEdad());
ana.mostrarGeneracion();

carlos.mostrarDatos();
console.log(`${carlos.nombre} es mayor de edad?`, carlos.esMayorDeEdad());
carlos.mostrarGeneracion();

lucia.mostrarDatos();
console.log(`${lucia.nombre} es mayor de edad?`, lucia.esMayorDeEdad());
lucia.mostrarGeneracion();
