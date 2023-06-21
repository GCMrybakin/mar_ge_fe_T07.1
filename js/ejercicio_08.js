//8. Dados los arrays javascript1 = ["DOM", "BOM", "Funciones", "Arrays"] y javascript2 =
//["Objetos", "Arrays", "ParseInt"], crea una función que determine si se repite algún
//elemento y lo saque por consola.

const javascript1 = ["DOM", "BOM", "Funciones", "Arrays"];
const javascript2 = ["Objetos", "Arrays", "ParseInt"];

function comprobarValoresRepe(arr1,arr2){
    for (let index = 0; index < arr1.length; index++) {
        const element1 = arr1[index];
        for (let index = 0; index < arr2.length; index++) {
            const element2 = arr2[index];
            if (element1===element2) {
                console.log("Elemento repetido: '"+element2+"' entre las arrays.");
            }
        }
    }
}

comprobarValoresRepe(javascript1,javascript2);