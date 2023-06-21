//12. Crea un array que contenga al menos tres objetos con las mismas propiedades (al menos
//tres) y distintos valores. Crea una función que saque por consola el valor de una de las
//propiedades para todos los objetos.

const listObjetos = [
    { nombre: "Juan", edad: 25, ciudad: "Madrid" },
    { nombre: "María", edad: 30, ciudad: "Barcelona" },
    { nombre: "Pedro", edad: 28, ciudad: "Valencia" },
    { nombre: "Antonio", edad: 20, ciudad: "Tarragona" }
];

function personasCiudad(personas) {
    for (let i = 0; i < personas.length; i++) {
        console.log(personas[i].ciudad);
    }
};

personasCiudad(listObjetos);