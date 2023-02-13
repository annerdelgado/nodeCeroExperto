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

const getEmpleado = (id, callback) => {
    const empleado = empleados.find( (emp) => emp.id === id );

    if(empleado){
        callback(null, empleado);
    }else{
        callback(`Empleado con id ${id} no encontrado`);
    }
}

getEmpleado(3, (error, empleado) => {
    if(error){
        console.log('ERROR!');
        return console.log(error);
    }else{
        console.log('Empleado existe');
        console.log(empleado);
    }
});