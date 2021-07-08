import React,{useState} from 'react';
import Formulario from '../Form';
import clienteAxios from "../../../config/axios";
import Swal from 'sweetalert2';

 

const NuevoProducto = (props) => {

  // State
  const [nuevoProducto,guardarProducto] = useState({

    nombreProducto:"",
    caracteristicas:"",
    imagen :"",
    inventario :"",
    precio :""


});


const [archivo,guardarArchivo] = useState({});



// Tipo de FORMULARIOS





//titulos formulario

const titleForm = {

    titulo:"Crear producto",
    textButton:"Crear"
}


// Actualiza el state

const actualizarState = (e) =>{


guardarProducto({
    ...nuevoProducto,
    [e.target.name] : e.target.value
})

} 


// Leer datos de imagen

const leerArchivo = e =>{
    // console.log(e.target.files[0]);
    guardarArchivo(e.target.files[0]);

}



const formNuevoProducto = [
    {name:"nombreProducto",
    placeholder:"Nombre del producto",
    func:actualizarState,
    type: "text",
    
    },
    {name:"caracteristicas",
    placeholder:"Caracteristicas del producto",
    func:actualizarState,
    type: "text"},
    {name:"imagen",
    placeholder:"Imagen del producto",
    func:leerArchivo,
    type: "file"},
    {name:"inventario",
    placeholder:"Inventario del producto",
    func:actualizarState,
    type: "text"},
    {name:"precio",
    placeholder:"Precio del producto",
    func:actualizarState,
    type: "text"},
];



const localToken = localStorage.getItem("token");



if(localToken === ""){
    props.history.push("/iniciar-sesion");
    return null
}

// Guardar producto en la API
const almacenarProducto = async (e) =>{

    e.preventDefault();
   

    // Validar que no venga vacio el formulario
const {nombreProducto,caracteristicas,inventario,precio} = nuevoProducto;
 if(!nombreProducto.trim().length 
    || !caracteristicas.trim().length  
    || !inventario.trim().length || !precio.trim().length){


        Swal.fire(
            'Datos incompletos!',
            'Favor de llenar todos los campos!',
            'error',
            
          )
        return;
    }

const formData = new FormData();

formData.append("nombreProducto",nuevoProducto.nombreProducto);
formData.append("caracteristicas",nuevoProducto.caracteristicas);
formData.append("imagen",archivo);
formData.append("inventario",nuevoProducto.inventario);
formData.append("precio",nuevoProducto.precio);

    
try {


     //ALMACENAR IMAGEN Y DATOS EN LA BD
 const res = await   clienteAxios.post("/productos",formData,{
         headers:{
             "Content-type":"multipart/form-data",
             Authorization:`Bearer ${localToken}`
         }
     })

     if(res.status === 200){
        Swal.fire(
            'Producto agregado!',
            'El producto se agrego correctamente!',
            'success'
          )
          props.history.push("/admin/administrador/productos")
     }



} catch (error) {

    console.log(error);
    if(error.response.status == 500){
         
         localStorage.setItem("token","");
         props.history.push("/iniciar-sesion");
         return 
    }

    Swal.fire(
        'Ups!',
        'El producto no se puedo agregar!',
        'error'
      )
}
    
    
        
            
              
     
       
}







    return ( 

<Formulario
// actualizarState={actualizarState}
apifuncion={almacenarProducto}
tipoForm={formNuevoProducto}
titleForm={titleForm}
// leerArchivo={leerArchivo}

/>
     );
}
 
export default NuevoProducto;