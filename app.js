

const { crearArchivo } = require('./helpers/multiplicar'); // el require me exporta el objeto "modules.exports", entonces desestructuro la función para tenerla solo a ella que es la que me interesa
const argv = require('./config/yargs');
require('colors');

console.clear();

crearArchivo( argv.b, argv.l, argv.h )
    .then( nombreArchivo => console.log( nombreArchivo.magenta, 'ha sido creado.'.green ))
   .catch( err => console.log( err ));







 
    


