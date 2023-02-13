// const { mostrarMenu, pausa } = require('./helpers/mensajes');
require("colors");
const { guardarDB, leerDB } = require("./helpers/guardarArchivo");
const {
    inquirerMenu,
    pausa,
    leerInput,
    listadoTarreasBorrar,
} = require("./helpers/inquirer");
const Tarea = require("./models/tarea");
const Tareas = require("./models/tareas");

console.clear();

const main = async () => {
    let opt = "";
    const tareas = new Tareas();

    let tareasDB = leerDB();
    if (tareasDB) {
        tareas.cargarTareasFromArr(tareasDB);
    }

    do {
        // console.log({opt});

        // const tarea = new Tarea ('Comer');
        // const tareas = new Tareas();
        // console.log(tarea);
        // console.log(tareas);

        opt = await inquirerMenu();

        const aux = () => {
            tareasDB = leerDB();
            if (tareasDB) {
                tareas.cargarTareasFromArr(tareasDB);
            }
        };

        switch (opt) {
            case "1":
                const desc = await leerInput("Descripcion:");
                tareas.crearTarea(desc);
                break;

            case "2":
                // console.log(tareas._listado);
                aux();
                tareas.listadoCompleto();
                break;

            case "3": //Listar Completadas
                aux();
                tareas.listarPendientesCompletadas(true);
                break;
            case "4": //Listar pendientes
                aux();
                tareas.listarPendientesCompletadas(false);
                break;
            case "6": //Borrar
                aux();  
                const id = await listadoTarreasBorrar(tareas.listadoArr);
                console.log({id});
                break;
        }

        guardarDB(tareas.listadoArr);

        if (opt !== "0") await pausa();
    } while (opt !== "0");
};

main();
