import getHeroeById from "./bases/08-import-exp";


// const promesa = new Promise((resolve, reject)=>{

//     setTimeout(() => {
//         // Tarea
//         //importar el
//         const heroe = getHeroeById(1);
        
//         resolve(heroe);

//         reject('no se pudo encontrar el heroe');
//     },2000)

// });


// promesa.then((heroe)=>{
//     console.log('heroe', heroe);
// })
// .catch(err => console.warn(err));

const getHeroeByIdAsync = (id )=>{
    return new Promise((resolve, reject)=>{

        setTimeout(() => {
            // Tarea
            //importar el
            const heroe = getHeroeById(id);
            if (heroe){
                resolve(heroe);
            }else{
                reject('no se pudo encontrar el heroe');
            }
           
                
        },2000)

        
    
    });
}

getHeroeByIdAsync(1)
    .then (console.log)
    .catch(err=> console.warn(err))