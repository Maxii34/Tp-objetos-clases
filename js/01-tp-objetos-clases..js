/*
1- Crea un objeto llamado auto 
que tenga algunas características como el color, marca, modelo y 
si está encendido o apagado.
Crea los métodos necesarios para permitir encender y apagar el auto.
*/

//notacion literal
const auto ={
        // propiedades clave: valor
    marca: 'Toyota',
    modelo: 'Corolla Cross',
    anio: '2025',
    motor: 'Hibrido 1.8L',
    tansmision: 'Automatica CVT',
    modosDeConduccion: ['Eco', 'Sport', 'Normal'],
    color: 'Azul ocuro',
    encendido: false,
    //metodos
    encender: function(){
        this.encendido = true
        document.writeln(`<p>El auto esta en marcha ${this.marca}</p>`)
    },
    apagar: function(){
        this.encendido = false
        document.writeln(`<p>El auto se apago. </p>`)
    }
}

// mostrar el objeto
document.writeln(auto)
document.writeln('<h1>Objeto Auto / Card </h1>')
document.writeln(`<p>Marca: ${auto.marca}</p>`)
document.writeln(`<p>Modelo: ${auto.modelo}</p>`)
document.writeln(`<p>Año: ${auto.anio}</p>`)
document.writeln(`<p>Motor: ${auto.motor}</p>`)
document.writeln(`<p>Trasmision: ${auto.tansmision}</p>`)
document.writeln(`<p>Modos de Conduccion: ${auto.modosDeConduccion}</p>`)
document.writeln(`<p>Color: ${auto.color}</p>`)

//usar los metodos del objeto
auto.encender()
auto.apagar()
