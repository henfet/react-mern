// Funciones en JS
const saludar = function ( nombre ) {
    return `Hola, ${ nombre }`;
  }
  
  const saludar2 = ( nombre ) => {
    return `Hola, ${ nombre }`;
  }
  
  const saludar3 = ( nombre ) => `Hola, ${ nombre }`;
  
  // saludar = 30;
  
  // console.log(saludar);
  console.log( saludar('Luffy') );
  console.log( saludar2('Don Zoro') );
  console.log( saludar3('Trafalgar') );
  
  const getUser = () => ({
    uid: 'ABC123',
    username: 'henfet'
  });
  
  
  const user = getUser();
  console.log(user);
  
  // Tarea
  // 1. Transformar a una función de flecha
  // 2. Debe retornar un objeto implícito
  // 3. Probar
  
  // Versión a mejorar
  
  // function getUsuarioActivo( nombre ) {
  //   return {
  //     uid: 'ABC456',
  //     username: nombre
  //   }
  // }
  
  // Resultado
  
  const getUsuarioActivo= ( nombre ) => ({
    uid: 'ABC456',
    username: nombre  
  });
  
  const usuarioActivo = getUsuarioActivo('Fujitora');
  console.log( usuarioActivo );
  