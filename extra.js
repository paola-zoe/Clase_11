let arrayDeNumeros= [7, 10, 19, 20, 23, 31, 55, 86, 90, 95 ];
let [numero0, , numero2, , numero4] = arrayDeNumeros;
function nuevo(lista, ...indefinido) {
    let nuevoArray = []
    lista.forEach(function (numeros) {
        if (numeros !== numero0 && numeros !== numero2 && numeros !== numero4) {
            nuevoArray.push(numeros)
        }
    })
    return nuevoArray
}
console.log(nuevo(arrayDeNumeros, numero0, numero2, numero4));

let gatos= {
    nombre: 'Luffy',
    tipo: 'gato',
    color: 'marrón oscuro y crema cálido',
    raza: 'siamés'
}
let { nombre, tipo, color, raza } = gatos;
console.log('Hola les presento a mi mascota su nombre es ' + nombre + ', es un hermoso ' + tipo + ', de color ' + color + ' y su raza es ' + raza + '.')