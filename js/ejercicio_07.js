//7. Utilizando el array del ejercicio anterior, crea una función que saque por consola
//únicamente los números mayores que 5

const arrayNumeros = [1,2,3,4,5,6,7,8,9,10];

function numerosMayoresa5(array){
    for (let index = 0; index < arrayNumeros.length; index++) {
        const element = arrayNumeros[index];
        if(element >= 5) {
            console.log(element);
        }
    }
}

numerosMayoresa5(arrayNumeros);