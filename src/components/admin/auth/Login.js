import React ,{Fragment,useState,useContext}from 'react';
import styled from '@emotion/styled';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import Swal from "sweetalert2";
import clienteAxios from "../../../config/axios";
import {CRMContext} from "../../context/CRMContext";


const Button = styled.input`
  display: flex;
  padding: 10px;
  margin-top: 10px;
  margin-left: auto;
  width: 40%;
  border-radius: 10px;
  background-color: #62bbc1;
  letter-spacing: 0.1em;
  color: #fffbfc;
  border: none;
  text-transform: uppercase;
  justify-content: center;
  align-items: center;

  &:hover {
    background-color: #72d9e0;
  }
`;


const FormHtml = styled.form`
width: 90%;

display: flex;
flex-direction: column;
margin: 30px auto;
letter-spacing: 0.25em;

p{
    text-align: center;
    font-size: x-large;
}


label{
    margin: 5px 0;

}


a{
    text-align: center;
    margin-top: 60px;
    color: #000;
    text-decoration: none;
    &:hover{
    text-decoration: underline;
    }
}


`;

const A = styled.a`


    text-transform: uppercase;
    color: #C04693 !important;
    text-align: center;
    margin-top: 15px !important;

    

`;





const Login = (props) => {


// Auth y guardarAuth Context

const [auth,guardarAuth] = useContext(CRMContext);



//  State de las credenciales
const[credenciales,guardarCredenciales] = useState({});



// Guardar datos en cuando el input le ocurra un cambio
const handleChange = (e) =>{

    guardarCredenciales({
    ...credenciales,
    [e.target.name] : e.target.value

    });
    
}



// Al hacer submit iniciar sesion con el servidor

const iniciarSesion = async (e) => {

    e.preventDefault();

    // Autenticar al usuario 
     const respuesta = await clienteAxios.post("/iniciar-sesion",credenciales);

    try {

        // Alertas validacion
        if(respuesta.data.id === 401){
            Swal.fire({
                icon: 'error',
                title: 'Hubo un error',
                text: respuesta.data.mensaje,
                footer: `<a href="" class="spacing uppercase">${respuesta.data.mensaje2}</a>`
              })
                return;
        }
        if(respuesta.data.id === 200){
            Swal.fire({
                icon: 'success',
                showConfirmButton: false,
                timer: 2000,
                title:"Iniciaste Sesion"              
                })
             
        }

            // Guardar datos en localStorage
        const {token} = respuesta.data;
         localStorage.setItem("token",token);
      

        // guardar token en el state Context

            guardarAuth({
                token,
                auth:true
            })  

            // Redireccionar
             props.history.push("/admin/administrador/productos");
       
    } catch (error) {
         console.log(error);
           
    }


}


    return (
<Fragment>
        <FormHtml
        onSubmit={iniciarSesion}
        >
            <p>Iniciar Sesion</p>
            <label>Email</label>
            <Form.Control 
            className="spacing" 
            type="email" 
            placeholder="Ingresa tu email" 
            required
            onChange={handleChange}
            name="email"
            />
            <label>Password</label>
            <Form.Control
            className="spacing" 
            type="password" 
            placeholder="Ingresa tu Password"
            required
            onChange={handleChange}
            name="password"
            />
            <Button 
            type="submit"
            />
            <a href="#">¿Olvidaste tu contraseña?</a>
            <A href="#">registrate</A>
        </FormHtml>

        
        </Fragment>
      );
}
 
export default Login;