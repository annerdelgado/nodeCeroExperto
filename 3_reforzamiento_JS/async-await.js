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
        const empleado = empleados.find((emp) => emp.id === id)?.nombre;
        if (empleado) {
            resolve(empleado);
        } else {
            reject(`No existe empleado con id ${id}`);
        }
    });
    return promesa;
}

const getSalario = (id) => {
    const promesa = new Promise((resolve, reject) => {
        const salario = salarios.find((sal) => sal.id === id)?.salario;
        if (salario) {
            resolve(salario);
        } else {
            reject(`No existe salario con id ${id}`);
        }
    });
    return promesa;
}

const getInfoUsuario = async (id) => {
    try {
        const empleado = await getEmpleado(id);
        const salario = await getSalario(id);
        return `El empleado ${empleado} tiene un salario de ${salario}`//de este modo se llama el resolve de la promesa
    } catch (err) {
        throw err //de este modo se llama el reject de la promesa
    }
}

const id = 3;
getInfoUsuario(id)
    .then((msg) => {
        console.log('TODO BIEN!');
        console.log(msg);
    })
    .catch((err) => {
        console.log('TODO MAL!');
        console.log(err)
    });