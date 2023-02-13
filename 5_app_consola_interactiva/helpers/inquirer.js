const inquirer = require('inquirer');
require('colors');

const preguntas = [
    {
        type: 'list',
        name: 'opcion',
        message: 'Que desea hacer?',
        choices: [
            {
                value: '1',
                name: '1. Crear tarea'
            },
            {
                value: '2',
                name: '2. Listar tareas'
            },
            {
                value: '3',
                name: '3. Listar tareas completadas'
            },
            {
                value: '4',
                name: '4. Listar tareas pendientes'
            },
            {
                value: '5',
                name: '5. Completar tarea(s)'
            },
            {
                value: '6',
                name: '6. Borrar tarea'
            },
            {
                value: '0',
                name: '0. Salir'
            },
        ]
    }
];

const inquirerMenu = async () => {
    console.clear();
    console.log('====================================='.green);
    console.log('       Seleccione una opcion'.green);
    console.log('===================================== \n'.green);

    const { opcion } = await inquirer.prompt(preguntas);
    return opcion;
}

const pausa = async () => {
    const enter = [
        {
            type: 'input',
            name: 'ENTER',
            message: `Presione ${'ENTER'.red} para continuar`
        }
    ];
    console.log('\n');
    await inquirer.prompt(enter);

}

const leerInput = async (msj) => {
    const question = [
        {
            type: 'input',
            name: 'desc',
            message: msj,
            validate(value){
                if(value.length === 0){
                    return 'Por favor ingrese un valor'
                }
                return true;
            }
        }
    ];

    const {desc} = await inquirer.prompt(question);
    return desc;
}

const listadoTarreasBorrar = async (tareas = []) => {
    // {
    //     value: tarea.id,
    //     name: '1. Crear tarea'
    // },

    const choices = tareas.map( (tarea, index) => {
        
        const idx = `${index + 1}.`.green;
        
        return {
            value: tarea.id,
            name: `${idx} ${tarea.desc}`
        }
    });

    const preguntas = [
        {
            type: 'list',
            name: 'id',
            message: 'Borrar',
            choices
        }
    ]

    const { id } = await inquirer.prompt(preguntas);
    
    return id;
}

module.exports = {
    inquirerMenu,
    pausa,
    leerInput,
    listadoTarreasBorrar
}