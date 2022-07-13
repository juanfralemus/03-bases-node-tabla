const fs = require('fs');  
const { stringify } = require('querystring');

const colors = require('colors');


const crearArchivo = async( base, listar, hasta = 10) => {

    let salida = '';
    let salida2 = '';

    for ( let i = 1; i <= hasta; i++ ) {

        salida += `${ base } x ${ i } = ${ base*i }\n`;
        salida2 += `${ base } ${'x'.cyan} ${ i } ${'='.cyan} ${ colors.magenta( base*i ) }\n`;

    }

    if ( listar ) {
        console.log('=========================='.cyan);
        console.log('       Tabla del', colors.magenta( base ) );
        console.log('=========================='.cyan);
        console.log( salida2 );
    }
    

    try{
         
        fs.writeFileSync( `./salida/tabla-${ base }.txt`, salida );

        return `tabla-${ base }.txt`;

    } catch {
        throw 'ERROR! No se ha podido crear el archivo'.red;
    }

}

module.exports = {
    crearArchivo
}