/*
3-Escribe una clase que permita crear distintos objetos “rectángulos”, 
con las propiedades de alto y ancho, 
mas los métodos necesarios para modificar 
y mostrar sus propiedades, 
calcular el perímetro y el área
*/

class Rectangulo {
    constructor(ancho, alto) {
        this.ancho = ancho;
        this.alto = alto;
    }

    mostrarDimensiones() {
        console.log(`Ancho: ${this.ancho}, Alto: ${this.alto}`);
    }

    modificarDimensiones(nuevoAncho, nuevoAlto) {
        this.ancho = nuevoAncho;
        this.alto = nuevoAlto;
    }

    calcularPerimetro() {
        return 2 * (this.ancho + this.alto);
    }

    calcularArea() {
        return this.ancho * this.alto;
    }
}