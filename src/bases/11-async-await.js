//const getImagenPromesa=()=> new Promise((resolve,reject)=> resolve('http://fjeifjei.com'))
//getImagenPromesa().then(console.log)

const getImagen= async ()=>{

    try{

        const apiKey = 'YHyiHi8d7wzLDZoLrAqj0bvIRrUiJxFa';
        const resp = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
        const {data} = await resp.json();
        const { url } = data.images.original;
        const img = document.createElement('img');
        img.src = url;
        document.body.append(img);
        console.log(url)

    }catch(error){
        //manejo del error
        console.error(error);
    }

    

}

getImagen();


//

// const apiKey = 'YHyiHi8d7wzLDZoLrAqj0bvIRrUiJxFa';


// const peticion = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);

// peticion.then(resp => resp.json())
// .then(({data}) =>{
//     const { url } = data.images.original;
//     const img = document.createElement('img');
//     img.src = url;
//     document.body.append(img);
// })
// .catch(console.warn);