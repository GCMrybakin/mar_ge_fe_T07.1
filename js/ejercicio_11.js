//11. Utiliza el objeto del ejercicio anterior y mediante desestructuración accede únicamente
//a tres de esas propiedades.

let persona = {
    nombre: 'Juan',
    apellidos: 'Pedro',
    edad: 25,
    dirección: 'C/ Calle Real',
    ciudad: 'Madrid',
    país: 'España'
};

let { nombre, apellidos, ciudad } = persona;

console.log(nombre);
console.log(apellidos);
console.log(ciudad);