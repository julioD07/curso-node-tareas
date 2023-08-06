require('colors');
const { guardarDB, leerDB } = require('./helpers/guardarArchivo.js');
const { inquireMenu, pausa, leerInput } = require('./helpers/inquirerr.js');
const Tareas = require('./models/tareas.js');

// const { mostrarMenu, pausa } = require('./helpers/mensajes');

console.clear();


const main = async () => {

    let opt = '';
    const tareas = new Tareas();

    const tareasDB = leerDB();
    // await pausa();
    if (tareasDB) { //Cargar tareas
        tareas.cargarTareasFromArray(tareasDB)
    }

    do {
        // Imprimir el menu
        opt = await inquireMenu();

        switch (opt) {
            case '1':
                    //Crear opcion
                    const desc = await leerInput('\nDescripcion:');
                    tareas.crearTarea(desc)
                break;
            case '2':
                    //Listar tareas
                    // console.log(tareas.listadoArr)
                    tareas.listadoCompleto()
                    break;
            case '3':
                    //Listar tareas Completadas
                    tareas.listarPendientesCompletadas(true);
                    break;
            case '4':
                    //Listar tareas Pendientes
                    tareas.listarPendientesCompletadas(false);
                    break;
            default:
                break;
        }

        guardarDB(tareas.listadoArr)

        if (opt !== '0') await pausa();

    } while (opt !== '0');


    //pausa();
}


main();
