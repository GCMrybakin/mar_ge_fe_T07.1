//1. Dado el array ["A", "B", "C", "D", "E", "F", "G", "H", "I"] crea una función que saque por
//consola la longitud del array. Crea otra función que obtenga un elemento aleatorio del
//array y lo saque por consola.

const letras = ["A", "B", "C", "D", "E", "F", "G", "H", "I"]; 

function longitud(array) {
    return array.length
}

console.log("Longitud de la array: "+longitud(letras));

function letraAleatoria(array) {
    return array[Math.floor(Math.random()* letras.length)];
}
console.log("Letra aleatoria del array: "+letraAleatoria(letras));