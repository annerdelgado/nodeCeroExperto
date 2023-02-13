const empleados = [
    {
        id: 1,
        nombre: 'Anner'
    },
    {
        id: 2,
        nombre: 'Linda'
    },
    {
        id: 3,
        nombre: 'Karen'
    }
];

const salarios = [
    {
        id: 1,
        salario: 1500
    },
    {
        id: 2,
        salario: 1000
    }
];

const getEmpleado = (id) => {
    const promesa = new Promise((resolve, reject) => {
        const empleado = empleados.find( (emp) => emp.id === id )?.nombre;
        if(empleado){
            resolve(empleado);
        }else{
            reject(`No existe empleado con id ${id}`);
        }
    });
    return promesa;

    //esta es otra forma de hacerlo con un if terneario
    /*return new Promise((resolve, reject) => {
        const empleado = empleados.find( (emp) => emp.id === id )?.nombre;
        (empleado)
            ? resolve(empleado)
            : reject(`No existe empleado con id ${id}`);
    });*/
}

const getSalario = (id) => {
    const promesa = new Promise((resolve, reject) => {
        const salario = salarios.find( (sal) => sal.id === id)?.salario;
        if (salario){
            resolve(salario);
        }else{
            reject(`No existe salario con id ${id}`);
        }
    });
    return promesa;
}

const id = 1;
/*getEmpleado(id)
    .then( (empleado) => console.log(empleado))
    .catch((err) => console.log(err));

getSalario(id)
    .then( (salario) => console.log(salario) )
    .catch( (err) => console.log(err)) */

getEmpleado(id)
    .then( (empleado) => {
        getSalario(id)
            .then( (salario) => {
                console.log(`El empleado: ${empleado} tiene un salario de: ${salario}`);
            })
            .catch( (err) => {
                console.log(`Para el empleado: ${empleado} ${err}`);
            })
    })
    .catch( (err) => console.log(err))