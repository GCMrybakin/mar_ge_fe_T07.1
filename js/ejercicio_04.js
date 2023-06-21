//4. Crea una string, pásala a array y saca por consola la versión invertida de la original.
//Ejemplo: "Hola" -> [H, o, l, a] -> [a, l, o, H] -> "aloH"

let string = "Hola";
let array = string.split('');
array.reverse()
array.toString()
let stringInvertido = array.join('');

console.log(stringInvertido);