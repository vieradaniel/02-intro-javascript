//import  heroes, { owners }  from "../data/heroes";
import  heroes  from "../data/heroes";

//console.log( owners );

const getHeroeById =(id)=>{
    return heroes.find((element,index,arr) => element.id === id);    
}

//console.log( getHeroeById(1));

export const getHeroesByOwner=( owner ) =>{
    return heroes.filter((heroe) => heroe.owner === owner )
}

//console.log(getHeroesByOwner("Marvel"));

export default getHeroeById;
