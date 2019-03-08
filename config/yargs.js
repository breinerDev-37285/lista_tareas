
let  descripcion = {
        alias : 'd',
        demand: true,
        desc: 'descripcion de la tarea'
    }

let completado = {
    alias: 'c',
    desc: 'estado actual de la tarea',
    default: false
}


const argv = require('yargs')
    .command('crear','Crea una tarea por hacer',{descripcion,completado})
    .command('listar','lista todas las tareas creadas',{completado})
    .command('actualizar','Actualiza el estado la tarea',{descripcion,completado})
    .command('borrar','Elimina una tarea',{descripcion,completado})
    .help()
    .argv

module.exports = {
    argv
}

