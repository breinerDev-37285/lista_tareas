const file = require('fs');

let tareas = [];

const crear = descripcion => {
    
    cargarDB();

    let tareasHacer = {
        descripcion,
        estado: false
    }

    tareas.push(tareasHacer)

    guardarDB();

    return tareasHacer
}

const guardarDB = () => {

    let data = JSON.stringify(tareas);

    file.writeFile('./db/tareas.json',data, err => {
        if(err) return err
    });
}


const cargarDB = () => {

    try {
        tareas = require('../db/tareas.json');
    } catch (error) {
        tareas = []
    }
}

const listar = () => {
    cargarDB();
    return tareas
}

const actualizar = (descripcion,estado=false) => {
    cargarDB();
    let index = tareas.findIndex( tarea => tarea.descripcion === descripcion );

    if( index>=0 ){
        tareas[index].estado = estado
        guardarDB()
        return true
    }else{
        return false
    }
}

const borrar = descripcion => {
    cargarDB();
    let nuevaLista = tareas.filter( tarea => tarea.descripcion !== descripcion );

    if(tareas.length !== nuevaLista.length){
        tareas = nuevaLista
        guardarDB();
        return true
    }else{
        return false
    }
}

module.exports = {
    crear,
    listar,
    actualizar,
    borrar
}