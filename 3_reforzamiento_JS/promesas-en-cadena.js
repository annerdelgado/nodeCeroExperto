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

const id = 4;
let nombre='';

getEmpleado(id)
    .then( (empleado) => {
        nombre = empleado;
        return getSalario (id) 
    })
    .then( (salario) => console.log(`El empleado ${nombre} tiene un salario de ${salario}`))

    .catch( (err) => console.log(err));//aca se manejan los dos rejection