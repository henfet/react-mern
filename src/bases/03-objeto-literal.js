const persona = {
    nombre: 'Tony',
    apellido: 'Stark',
    edad: 45,
    direccion: {
        ciudad: 'New York',
        zip: 21452,
        lat: 14.45455,
        lng: 34.454121,
    },
};

// console.table(persona);

const persona2 = { ...persona };
persona2.nombre = 'Peter';

console.log( persona2 );
console.log( persona );
