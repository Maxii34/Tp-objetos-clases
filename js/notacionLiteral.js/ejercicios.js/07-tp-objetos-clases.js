/*
4- Escribe una clase Producto para crear objetos. 
Estos objetos, deben presentar las propiedades código, nombre y precio,
además del método imprime datos, 
el cual escribe por pantalla los valores de sus propiedades.
Posteriormente, cree tres instancias de este objeto y guárdalas en un array.
Por último, utilice el método imprime datos para mostrar por pantalla los valores 
de los tres objetos instanciados.
*/

class Producto{
    constructor(nombre, codigo, precio){
        this.nombre = nombre;
        this.codigo = codigo;
        this.precio = precio;
    }

    imprimirDatos() {
        document.writeln(`<p>Producto: Nombre: ${this.nombre}, Codigo: ${this.codigo}, Precio: ${this.precio}.</p>`)
    }
}

// Crear tres instancias de Producto
const producto1 = new Producto("Teclado Mecánico", "TBM001", 89.99);
const producto2 = new Producto("Mouse Inalámbrico", "MIA002", 29.99);
const producto3 = new Producto("Monitor 24\"", "MON003", 199.99);

// Guardarlos en un array
const productos = [producto1, producto2, producto3];

// Usar el método imprimirDatos() para mostrar cada producto
for (let i = 0; i < productos.length; i++) {
    productos[i].imprimirDatos();
}

//Estra

    const total = producto1.precio + producto2.precio + producto3.precio;
    document.writeln(`<h3>Total de la compra: $${total.toFixed(2)}</h3>`);