const Tarea = require('./tarea');


class Tareas {
    _listado = {};

    get listadoArr (){
        const listado = [];
        Object.keys(this._listado).forEach( key => {
            const tarea = this._listado[key];
            listado.push(tarea);
        })

        return listado;
    }

    constructor () {
        this._listado = {};
    }

    borrarTarea(id = ''){
        if (this._listado[id]) {
            delete this._listado[id];
        }
    }

    cargarTareasFromArr(tareas = []){
        tareas.forEach(tarea => {
            this._listado[tarea.id] = tarea;
        });
    }

    crearTarea (desc = '') {
        const tarea = new Tarea(desc);

        this._listado[tarea.id] = tarea;
    }

    listadoCompleto(){
        this.listadoArr.forEach((tarea, index) => {
            const i = `${index+1}`.blue;
            if (tarea.completadoEn !== null) {
                console.log(`${i} ${tarea.desc} :: ${'Completada'.green}`)
            }else {
                console.log(`${i} ${tarea.desc} :: ${'Pendiente'.red}`)
            }
        });
    }

    listarPendientesCompletadas(completadas = true){
        let i = 0;
        this.listadoArr.forEach(tarea => {
            if (completadas === true) {
                if (tarea.completadoEn !== null) {
                    i += 1;
                    console.log(`${i.toString().blue} ${tarea.desc} :: ${'Completada'.green}`);
                }
            }else{
                if (tarea.completadoEn === null) {
                    i += 1;
                    console.log(`${i.toString().blue} ${tarea.desc} :: ${'Pendiente'.red}`);
                }
            }
        });
    }
}

module.exports = Tareas;