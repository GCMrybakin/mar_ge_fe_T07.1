//15. Haz lo mismo declarando una clase "receta" e instanciando cada una de las nuevas
//recetas. Luego añádelas a un array y reutiliza la función que habías creado en el ejercicio
//anterior para sacarlas por consola

class Receta {
    constructor(nombre, tiempo, ingredientes) {
        this.nombre = nombre;
        this.tiempo = tiempo;
        this.ingredientes = ingredientes;
    }
}

const receta1 = new Receta(
    "Chorizo & mozzarella gnocchi bake",
    "35 min",
    [
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
);

const receta2 = new Receta(
    "Spaghetti Bolognese",
    "40 min",
    [
        "300 g de spaghetti",
        "1 cucharada de aceite de oliva",
        "1 cebolla, finamente picada",
        "2 dientes de ajo, machacados",
        "500 g de carne picada",
        "2 latas de 400 g de tomates troceados",
        "2 cucharaditas de pasta de tomate",
        "1 cucharadita de azúcar en polvo",
        "1 cucharadita de orégano seco",
        "sal y pimienta al gusto",
        "queso parmesano rallado, para servir"
    ]
);

const receta3 = new Receta(
    "Ensalada César",
    "16 min",
    [
        "200 g de lechuga romana",
        "100 g de pollo a la parrilla, cortado en trozos",
        "50 g de queso parmesano, rallado",
        "30 g de pan tostado, cortado en cubitos",
        "2 cucharadas de aceite de oliva",
        "2 cucharaditas de jugo de limón",
        "1 diente de ajo, machacado",
        "1 cucharadita de mostaza",
        "sal y pimienta al gusto",
        "anchoas en lata (opcional)"
    ]
);
const recetas = [receta1, receta2, receta3];

function recetasInfo(recetas){
    for (let i = 0; i < recetas.length; i++) {
        const receta = recetas[i];
        console.log("Receta numero: "+i);
        for (let j = 0; j < recetas.length; j++) {
            console.log("Nombre: "+receta.nombre);
            console.log("Tiempo: "+receta.tiempo);
            for (let x = 0; x < receta.ingredientes.length; x++) {
                console.log("Ingredientes: "+receta.ingredientes[x]);
            }
        }
        console.log("-------------------------");
    }
}
recetasInfo(recetas);