const { argv } = require('./config/yargs');
const { crear,listar,actualizar,borrar } = require('./tareas/tarea_por_hacer');
const colors = require('colors')

const command = argv._[0];

switch(command){
    case 'crear':
        let resp = crear( argv.descripcion );
            console.log( resp )
    break;
    case 'listar':
        let listado = listar();
        console.log('\n====== Tareas =====\n'.green)
        for (const data of listado) {
            console.log(`Descripcion: ${data.descripcion}`.cyan)
            console.log(`Estado: ${data.estado}\n`.cyan)
        }
        console.log('=====================\n'.green)
    break;
    case 'actualizar':
        let act = actualizar( argv.descripcion,argv.completado );
        console.log(act)

    break;
    case 'borrar':
        let bor = borrar( argv.descripcion );
        console.log( bor )

    break;
    default: 
        console.log(`No existe el comando ${command}`);
}