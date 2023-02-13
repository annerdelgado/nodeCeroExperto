const deadpool = {
  nombre: "Wade",
  apellido: "Windston",
  poder: "Regeneracion",
  getNombre() {
    return `${this.nombre} ${this.apellido} ${this.poder}`;
  },
};

console.log(deadpool.getNombre());

// const nombre = deadpool.nombre;
// const apellido = deadpool.apellido;
// const poder = deadpool.poder;

// const {nombre, apellido, poder edad = 0} = deadpool;//esto es la desestructuracion
// console.log(nombre, apellido, poder, edad);


/* function imprimeHeroe(heroe){
    const {nombre, apellido, poder, edad = 0} = heroe;
    console.log(nombre, apellido, poder, edad);
} */

function imprimeHeroe({nombre, apellido, poder, edad = 0}){
    nombre = 'Fernando';
    console.log(nombre, apellido, poder, edad);
}
imprimeHeroe(deadpool);


const heroes = ['Deadpool', 'Superman', 'Batman'];
// const h1 = heroes[0];
// const h2 = heroes[1];
// const h3 = heroes[2];
const [h1, h2, h3] = heroes;//asi se desestructura un arreglo
console.log(h1, h2, h3);
const [, , h4] = heroes;//asi se le dice que no interesa extraer las primeras dos posiciones del arreglo
console.log(h4);