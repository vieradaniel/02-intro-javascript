const nombre="daniel";
const apellido="viera";

const nombreCompleto= `${nombre} 
${apellido} ${1+1}`;

console.log(nombreCompleto);

function getSaludo(nombre){
    return "hola mundo"+ nombre;
}

console.log(`Este es un texto: ${getSaludo(nombre)}`);