/* setTimeout( function(){
    console.log('Hola Mundo');
}, 1000); */

const getUsuarioByID = (id, callback) => {
    const user = {
        //id: id,//aca le decimos que el atributo id del objeto va a ser igual al id que se recibe como argumento
        id,//de esta forma se evita redundancia y se indica que tiene el atributo id igual al que se recibe
        nombre: 'Anner'
    };

    setTimeout(() => {
        callback(user);
    },1500)
};

getUsuarioByID(10, (usuario) => {
    console.log(usuario.id);
    console.log(usuario.nombre.toUpperCase());
});