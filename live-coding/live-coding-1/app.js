/*Montserrat Martínez Galván
la retroalimentacion que me dio mi compañero es que tenia la idea de como ir haciéndo el ejercicio, pero para implementarlo se me iban unas cosas, me gano el tiempo y me quede a la mitad, y que estuvo bien que si le iba explicando lo que hacía.
*/

function palabrasLargas(palabras, arrayPalabras) {
    const palabrasFiltradas = arrayPalabras.filter(palabra => palabra.length > palabras.length);
    return palabrasFiltradas;
}

const miArray = ["papel", "sacapuntas", "tijeras", "lápiz", "goma", "calculadora", "libreta", "marcador", "lapicero", "resistol", "colores"];
const arrayFinal = palabrasLargas('lapicera', miArray);
console.log(arrayFinal);

