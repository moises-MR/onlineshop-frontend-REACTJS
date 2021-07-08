import React,{useState,useEffect} from 'react';
import styled from '@emotion/styled';

import LogoLogin from "./IconLogin";
import Form from 'react-bootstrap/Form'
import 'bootstrap/dist/css/bootstrap.min.css';
import {withRouter} from "react-router-dom";
import Dropdown from 'react-bootstrap/Dropdown';
import clienteAxios from "../../config/axios";



const Div = styled.div`

width: 100%;
display: flex;
justify-content: center;
align-items: center;

@media(max-width: 768px){
    display: none;
}



a{
margin-right: 60px;
}
`;



const InputSubmit = styled.input`

    /* padding: 8px; */
    background-color: #FFF;
    color:black;
    /* border-radius: 10px; */
    text-align: center;
    letter-spacing: 0.10em;
    text-decoration:none;
    margin-right: 40px;
    border-bottom-right-radius:8px;
border-top-right-radius:8px;
    border: none;
    &:hover{
        background-color: #72d9e0;  
    }


    


`


const DivSerch = styled.div`
display: flex;
width: 100%;
justify-content: center;
align-items: center;
`

const DivLogin = styled.div`


display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin: 8px 0;


label{
    color: #FFFBFC;
}

`






const Nav = (props) => {

// funcion para navegar al dar click en el logo
const navegar = (nav)=>{

    props.history.push(nav);

}


const [usuario, guardarUsuario] = useState({});

const user = localStorage.getItem("token");



useEffect(()=>{
if(user){

  const consultarApi = async ( ) => {

    const usuario = clienteAxios.get("/usuarios")

  }



}




},[]);









    return (
      <Div>
          <DivSerch>
      <Form.Control className="input-serch" type="text" placeholder="Buscar..." />
        {/* <InputSubmit 
        type="submit" 
        value="🔎"
        /> */}
        </DivSerch>

 
        <DivLogin>
        <LogoLogin
        onClick={()=>{navegar("/iniciar-sesion")}}
        />
</DivLogin>  

<Dropdown className="dropdown">
  <Dropdown.Toggle variant="success" id="dropdown-basic">
    Mas
  </Dropdown.Toggle>
  <Dropdown.Menu >
    <Dropdown.Item href="/crear-usuario">Registrarme</Dropdown.Item>
    <Dropdown.Item href="/iniciar-sesion">Iniciar sesion</Dropdown.Item>
    <Dropdown.Item href="/admin/administrador/productos/nuevo-producto">Nuevo producto</Dropdown.Item>
    <Dropdown.Item href="/admin/administrador/productos">Productos</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>

       
      
      </Div>
    );
}
 
export default withRouter(Nav);