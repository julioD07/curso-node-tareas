

/* 

    _listado:
        { 'uuid-123123-123123-123123': { id: 12, desc: asd, completadoEn: 123123 } }

*/
require('colors')
const Tarea = require("./tarea");

class Tareas {
    _listado = {};

    get listadoArr(){
       
        const listado = []

        Object.keys(this._listado).forEach(key => {

            const tarea = this._listado[key]
            listado.push(tarea)
            // console.log(key) 
        })

        return listado;
    }

    constructor() {
        this._listado = {};
    }

    cargarTareasFromArray (tareas = []) {
        tareas.forEach(tarea => {
            console.log(tarea)
            this._listado[tarea.id] = tarea
        })

        console.log(tareas)
    }

    crearTarea(desc = '') {
        const tarea = new Tarea(desc);

        this._listado[tarea.id] = tarea;
    }

    listadoCompleto() {

        // console.log(this.listadoArr)
        let listado = ``;
        this.listadoArr.forEach(({desc, completadoEn}, index) => {
            let i =`${index + 1}.`  ;
            listado += `${i.green} ${desc}:: ${completadoEn !== null ? "Completado".green : "Pendiente".red}\n`
            // console.log(index)
        })
        console.log(listado)
        // 1. (color verde) Nombre Tarea :: Completada || Pendiente
        // Completada: Verde
        // Pendiente: Rojo 
    }

    listarPendientesCompletadas(completadas = true){
        let listado = ``
        let tareasFiltradas = []

        tareasFiltradas = this.listadoArr.filter(tarea => completadas ? tarea.completadoEn : !tarea.completadoEn  ) 

        tareasFiltradas.forEach(({desc, completadoEn}, index) => {
            let i =`${index + 1}.`  ;
            listado += `${i.green} ${desc}:: ${completadoEn !== null ? completadoEn.green : "Pendiente".red}\n`
        })

        console.log(listado)
    }

}

module.exports = Tareas;

