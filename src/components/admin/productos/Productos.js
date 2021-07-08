import React,{useEffect,useState,Fragment,useContext} from 'react';
import styled from '@emotion/styled';
import clienteAxios from "../../../config/axios";
import Producto from './Producto';
import { Link } from 'react-router-dom';
import {CRMContext} from "../../context/CRMContext";

const DivPrincipal = styled.div`

width: 90%;

display: flex;
flex-direction:column;
justify-content: center;
align-items: center;
margin: 15px auto;



  @media (min-width: 568px) {
        display: grid;
        grid-template-columns: repeat(2,1fr);
  }

  @media (min-width: 768px) {
        display: grid;
        grid-template-columns: repeat(3,1fr);
  }

p{
    
    margin: 20px;
    font-weight: 900;
    letter-spacing: 0.10em;


}







`

const Div = styled.div`

    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 40px auto;
   


a{
color: #010400;
text-decoration: none;
padding: 10px;
background-color: #62bbc1;
margin:  100px auto;
color: #FFFBFC;
border-radius: 10px;
text-align: center;
letter-spacing: 0.10em;
border: none;
font-size: 16px;
display: inline;

&:hover{
        background-color: #72d9e0;  
    }
}
`


const H3 = styled.h3`

    letter-spacing: 0.10em;
text-align: center;

`

const Productos =  (props) => {

    //State para guardar datos de la api
    const [productosApi,guardarProductosApi] = useState([]);

    // State Context
    const [auth,guardarAuth] = useContext(CRMContext);

    // token extraido de local Storage
    const localToken = localStorage.getItem("token");
 
   

useEffect(()=>{



    if(localToken !==""){
     
     
 
//Consultar a la API
const consulatarApi = async ()=>{

    try {
    const productosApi = await clienteAxios.get("/admin/productos",{
                headers:{
                    Authorization:`Bearer ${localToken}`
                }
            });
    guardarProductosApi(productosApi.data);
    // console.log(productosApi.data);
    } catch (error) {
        console.log(error);
        if(error.response.status == 500){
             props.history.push("/iniciar-sesion");
        }
    }

}

consulatarApi();
    }else{
      

         props.history.push("/iniciar-sesion");
        
    }





    },[]);

if(auth.auth===false){
//   props.history.push("/iniciar-sesion");
}

    
    return (  
        <Fragment>
            <H3>Mis productos</H3>
    <DivPrincipal className={ productosApi.length === 0 ? "flex" : ""}>
        
        {productosApi.length === 0 
        ? 
        <Div>
        <h3>No hay productos</h3>
        <Link to={"/admin/administrador/productos/nuevo-producto"}>Agregar Producto</Link>    
        </Div> 
        :
        productosApi.map(producto=>(
        <Producto
        key={producto._id}
        producto={producto}
        />
        ))}
    </DivPrincipal>
    </Fragment>

    );
}
 
export default Productos;


