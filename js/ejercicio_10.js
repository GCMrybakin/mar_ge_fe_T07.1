//10. Crea un objeto que almacene los datos de una persona (nombre, apellidos, edad,
//dirección, ciudad, país... y lo que quieras). Crea una función que saque por consola el
//nombre completo (nombre y apellidos) de la persona a modo de string.

let persona = {
    'nombre': 'Juan',
    'apellidos': 'Pedro',
    'edad': 25,
    'dirección': 'C/ Calle Real',
    'ciudad': 'Madrid',
    'país': 'España'
};

function personaNombres(persona) {
    console.log(persona.nombre + ' ' + persona.apellidos);
}

personaNombres(persona);