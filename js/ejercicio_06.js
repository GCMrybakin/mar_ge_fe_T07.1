//6. Crea un array con al menos 10 números y una función que los divida en otros dos arrays:
//uno para pares y otro para impares. A continuación, saca por consola ambos arrays
//resultantes concatenados

const arrayNumeros = [1,2,3,4,5,6,7,8,9,10];
const arrayNumerosPares = [];
const arrayNumerosImpares = [];

for (let index = 0; index < arrayNumeros.length; index++) {
    const element = arrayNumeros[index];
    if(element % 2 == 0) {
        arrayNumerosPares.push(element);
    } else {
        arrayNumerosImpares.push(element);
    }
}

console.log(arrayNumerosPares.concat(arrayNumerosImpares));