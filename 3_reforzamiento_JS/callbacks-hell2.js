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
    const empleado = empleados.find( (emp) => emp.id === id )?.nombre;

    if(empleado){
        callback(null, empleado);
    }else{
        callback(`Empleado con id ${id} no encontrado`);
    }
}

const getSalario = (id, callback) => {
    const salario = salarios.find( (sal) => sal.id === id)?.salario;//con el signo ? pregunta si existe un registro con la condicion de la funcion, si existe ejecuta lo que sigue despues del signo

    if(salario){
        callback(null,salario);
    }else{
        callback(`El salario del empleado con id ${id} no existe`);
    }
}


const id = 3;
getEmpleado(id, (error, empleado) => {
    if(error){
        console.log('ERROR!');
        return console.log(error);
    }

    getSalario(id, (err, salario) => {
        if(err){
            console.log('ERROR!');
            return console.log(err);
        }
        console.log(`El empleado: ${empleado} tiene un salario de ${salario}`);
    });

    // console.log('Empleado existe');
    // console.log(empleado.nombre);
});

() => 5

/* getSalario(id, (err, salario) => {
    if(err){
        console.log('ERROR!');
        return console.log(err);
    }
    console.log('Salario del empleado');
    console.log(salario);
}); */