
const personajes = ["Goku","Vegeta","Trunks"];



const [ ,p2 ]= personajes;

console.log(p2);

const retornaArreglo=()=>{
    return ["ABC",123];
}

const[letras,numeros]= retornaArreglo();
console.log(letras,numeros);

//Tarea
//1.nombre
//2.setNombre
const usesStates = (valor) =>{
    return [valor,()=>{console.log("hola mundo")}];
}

const [nombre,setNombre] = usesStates("Goku");
console.log(nombre);
setNombre();