const saludar = function (nombre) {
    return `hola, ${nombre}`;
  };
  
  const saludar1 = (nombre) => `hola , ${nombre}`;
  
  //console.log(saludar("dany"));
  
  const getUser = () => ({
    uid: "AB123",
    username: "el_papi",
  });
  
  console.log(getUser());
  
  const getUsuarioActivo = (nombre) => ({ uid: "ABC", username: nombre });
  
  const usuarioActivo= getUsuarioActivo("Dany");
  console.log(usuarioActivo);