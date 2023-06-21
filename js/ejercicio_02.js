//2. Crea un array con los nombres de los planetas del Sistema Solar. Crea una función que
//los liste y los saque por consola.

const planetas = ["mercurio","venus","tierra","marte","jupiter","saturno","urano","neptuno","pluton"]; 

function listar(array){
    for (let index = 0; index < array.length; index++) {
        console.log(array[index]);
    }
}

listar(planetas);