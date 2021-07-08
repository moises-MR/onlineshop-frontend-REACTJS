import React,{useState} from 'react';
import Formulario from './Form';
import clienteAxios from "../../config/axios";
import Swal from 'sweetalert2';



const NuevoUsuario = () => {

  // State
  const [nuevoUsuario,guardarUsuario] = useState({

    nombres:"",
    apellidos:"",
    email :"",
    password :"",
    passwordRepeat :"",
    rol:""


});



// Tipo de FORMULARIOS


const formNuevoUsuario = [
    {name:"nombres",
    placeholder:"Nombre completo",
    type: "text"  },
    {name:"apellidos",
    placeholder:"Apellidos",
    type: "text"},
    {name:"email",
    placeholder:"Email",
    type: "mail"},
    {name:"password",
    placeholder:"Contraseña",
    type: "password"},
    {name:"passwordRepeat",
    placeholder:"Repite contraseña",
    type: "password"},
    {name:"rol",
    placeholder:"Rol",
    type: "text"},
];


//titulos formulario

const titleForm = {

    titulo:"Crear usuario",
    textButton:"Crear"
}


// Actualiza el state

const actualizarState = (e) =>{


    guardarUsuario({
    ...nuevoUsuario,
    [e.target.name] : e.target.value
})

} 




// Guardar producto en la API


const almacenarProducto =  (e) =>{

    e.preventDefault();
   

    // Validar que no venga vacio el formulario
const {nombres,apellidos,email,password,passwordRepeat,rol} = nuevoUsuario;
 if(!nombres.trim().length 
    || !apellidos.trim().length || !email.trim().length 
    || !password.trim().length || !passwordRepeat.trim().length
    || !rol.trim().length){


        Swal.fire(
            'Datos incompletos!',
            'Favor de llenar todos los campos!',
            'error',
            
          )
        return;
    }


     ///Enviar peticion
    clienteAxios.post("/clientes",nuevoUsuario)
    .then(res=>{
        if(res.data.code === 11000){
            Swal.fire(
                'Ups!',
                'El usuario no se puedo agregar!',
                'error'
              )
              
         
        }else{
            Swal.fire(
                'Cliente agregado!',
                'El usuario a sido agregado exitosamente',
                'success'
              )
      
        }
       
    })
}








    return ( 

<Formulario
actualizarState={actualizarState}
apifuncion={almacenarProducto}
tipoForm={formNuevoUsuario}
titleForm={titleForm}

/>
     );
}
 
export default NuevoUsuario;