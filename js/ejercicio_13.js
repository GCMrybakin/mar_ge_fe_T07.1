//13. Crea un objeto que contenga una receta de cocina, con propiedades asignadas a su
//nombre, tiempo de preparación e ingredientes. Haz una función que saque por consola
//el nombre, el tiempo y una lista de los ingredientes.

const receta = {
    nombre:'Chorizo & mozzarella gnocchi bake',
    tiempo:'35 min',
    ingredientes: [
        "1 cucharada de aceite de oliva",
        "1 cebolla, finamente picada",
        "2 dientes de ajo, machacados",
        "120 g de chorizo, cortado en cubitos",
        "2 latas de 400 g de tomates troceados",
        "1 cucharadita de azúcar en polvo",
        "600 g de ñoquis frescos",
        "125 g de bolas de mozzarella, cortadas en trozos",
        "manojo pequeño de albahaca, desgarrado",
        "ensalada verde, para servir"
    ]
};

function recetaInfo(receta){
    console.log("Nombre: "+receta.nombre);
    console.log("Tiempo: "+receta.tiempo);
    for (let i = 0; i < receta.ingredientes.length; i++) {
        const element = receta.ingredientes[i];
        console.log("Ingrediente "+i+" :"+element);
    }
}

recetaInfo(receta);