import React,{Fragment,useEffect,useState,useContext} from 'react';
import styled from "@emotion/styled";
import Celular from './Celular';
import clienteAxios from '../../config/axios';
import Navlateral from './NavLateral';
import Spinner from "../layouts/Spinner";
import {withRouter} from "react-router-dom";




const H2 = styled.h2`
margin-top: 90px;

font-size: 32px;
    text-align: center;
`;




const DivP = styled.div`


display: flex;

`;

const DivS = styled.div`
width: 20%;
background-color: #30332E;
margin-right:30px;
color: #e6269f;
padding: 10px;
border-radius: 5px;
display: flex;
/* justify-content: space-around; */
/* align-items: center; */
flex-direction: column;
height: fit-content;

@media (max-width: 761px) {
        display: none;
  }

h3{
    text-align: center;
    letter-spacing: 0.05em;
    margin: 20px auto;
    
  
}
`;






























const CelularesContainer = (props) => {



 // categorias de el filtro
 
 const categoriasMarca = {
     titulo: "marca",
     cate:[
         {titulo:"samsung",
        enlace:"#"
        },
        {titulo:"motorola",
        enlace:"#"
        },
        {titulo:"huawei",
        enlace:"#"
        },
        {titulo:"iphone",
        enlace:"#"
        }
     ]
 }

 const categoriasCompañia = {
    titulo: "compañia",
    cate:[
        {titulo:"telcel",
       enlace:"#"
       },
       {titulo:"at&t",
       enlace:"#"
       },
       {titulo:"movitar",
       enlace:"#"
       },
       {titulo:"unefon",
       enlace:"#"
       }
    ]
}
const categoriasRam = {
    titulo: "MEMORIA",
    cate:[
        {titulo:"2GB RAM",
       enlace:"#"
       },
       {titulo:"3GB RAM",
       enlace:"#"
       },
       {titulo:"4GB RAM",
       enlace:"#"
       },
       {titulo:"6GB RAM",
       enlace:"#"
       }
    ]
}
const categoriasColores = {
    titulo: "colores",
    cate:[
        {titulo:"negro",
       enlace:"#"
       },
       {titulo:"azul",
       enlace:"#"
       },
       {titulo:"blanco",
       enlace:"#"
       },
       {titulo:"gris",
       enlace:"#"
       },
       {titulo:"verde",
       enlace:"#"
       },
       {titulo:"dorado",
       enlace:"#"
       }
    ]
}




















// State de los productos
const [productos,setProductos] = useState([]);



   




useEffect(()=>{

  

        const consultarApi = async ()=>{

            //  const token = localStorage.getItem("token");
             
        
        try {
            const producto = await clienteAxios.get("/productos");
            setProductos(producto.data);
        
          
        } catch (error) {
         console.log(error);
        }
        }   
        
        consultarApi();
   


    
},[])









    return ( 
    <Fragment>  
    <H2>Encuentra el celular perfecto para ti.</H2>    
    <DivP>
        <DivS>
            <h3>Categorias</h3>
        <Navlateral
        categorias={categoriasMarca}
        />
        <Navlateral
        categorias={categoriasCompañia}
        />
        <Navlateral
        categorias={categoriasRam}
        />
        <Navlateral
        categorias={categoriasColores}
        />
        </DivS>
    <div className={!Object.keys(productos).length ? "div-sin-productos" : "div-productos"}>
    {!Object.keys(productos).length ? <Spinner/> : productos.map((producto)=>(
        <Celular
        celular={producto}
        key={producto._id}
        />
    ))}
 
    </div>
    </DivP> 
    </Fragment>  
    );
}
 
export default withRouter(CelularesContainer);