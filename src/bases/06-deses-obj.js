
// Desestructuracion
// Asignación Desestructurante

const persona = {
    nombre: 'Tony',
    edad: 45,
    clave: 'Ironman',
    // rango: 'Soldado',
};

// const { nombre: newNombre, edad, clave } = persona;

// console.log( newNombre );
// console.log( edad );
// console.log( clave );

const usarContexto = ({ clave, nombre: newNombre, edad, rango = 'Capitán' }) => {

    // console.log(edad, newNombre, rango);

    return {
        nombreClave: clave,
        anios: edad,
        latlng: {
            lat: 10.008,
            lng: 10.376,
        },
    }
}

const { nombreClave, anios, latlng: { lat, lng } } = usarContexto( persona );

console.log(nombreClave, anios);
console.log( lat, lng );
