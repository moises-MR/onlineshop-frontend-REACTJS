import React,{useState} from 'react';
import Formulario from '../Form';
import clienteAxios from "../../../config/axios";
import Swal from 'sweetalert2';
import {withRouter} from "react-router-dom";



const Registrarse = (props) => {

  // State
  const [nuevoUsuario,guardarUsuario] = useState({

    nombres:"",
    apellidos:"",
    email :"",
    password :"",
    passwordRepeat :"",


});






//titulos formulario

const titleForm = {

    titulo:"Registro",
    textButton:"Registrarme"
}


// Actualiza el state

const actualizarState = (e) =>{


    guardarUsuario({
    ...nuevoUsuario,
    [e.target.name] : e.target.value
})

} 


// Tipo de FORMULARIOS


const formNuevoUsuario = [
    {name:"nombres",
    placeholder:"Nombre completo",
    type: "text",
    func:actualizarState
},
    {name:"apellidos",
    placeholder:"Apellidos",
    type: "text",
    func:actualizarState},
    {name:"email",
    placeholder:"Email",
    type: "mail",
    func:actualizarState},
    {name:"password",
    placeholder:"Contraseña",
    type: "password",
    func:actualizarState},
    {name:"passwordRepeat",
    placeholder:"Repite tu contraseña",
    type: "password",
    func:actualizarState},

];



// Guardar producto en la API


const almacenarProducto =  (e) =>{

    e.preventDefault();
   

    // Validar que no venga vacio el formulario
const {nombres,apellidos,email,password,passwordRepeat} = nuevoUsuario;
 if(!nombres.trim().length 
    || !apellidos.trim().length || !email.trim().length 
    || !password.trim().length || !passwordRepeat.trim().length
    ){



        Swal.fire(
            'Datos incompletos!',
            'Favor de llenar todos los campos!',
            'error',
            
          )
        return;
    }


     ///Enviar peticion
    clienteAxios.post("/crear-usuario",nuevoUsuario)
    .then(res=>{
        
        if(res.data.code === 11000){
            
            Swal.fire(
                'Ups!',
                'Hubo algun error!',
                'error'
              )
              
         
        }else{
            Swal.fire(
                'Cliente agregado!',
                'Felicidades ya estas registrado!',
                'success'
              )
              props.history.push("/iniciar-sesion")
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
 
export default withRouter(Registrarse);