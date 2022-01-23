const persona = {
    nombre : "Tony",
    apellido: "Stark",
    edad: 45,
    direccion:{
        ciudad:'New York',
        zip: 55454545,
        lat: 13.3535
    }
};

//console.table(persona);


const persona2 = { ...persona };
persona2.nombre= "peter";

console.log(persona);
console.log(persona2);