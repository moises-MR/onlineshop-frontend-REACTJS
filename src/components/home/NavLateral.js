import React,{useState} from "react";
import styled from "@emotion/styled";
import {Link} from "react-router-dom"; 




const Div = styled.div`
text-align: center;
padding: 2px;
background-color: #30332E;
width: 90%;
margin: 60px 0;

cursor: pointer;

&:hover{
  background-color: #3f423c;
}


p{
    color: #FFFBFC;
    font-weight: bold;
    letter-spacing: 0.30em;
    text-transform: uppercase;
    

}


div{
  a{
    color: #e6269f;
  }
}


`

const Navlateral = ({categorias}) => {


    const {titulo,cate} = categorias;

const [activado,activarCategorias] = useState(false);


  return (
<Div
onClick={()=>{
    !activado ? activarCategorias(true) : activarCategorias(false)
}}
>
    <p>{`${titulo} ▼`}</p>
    <div className={activado ? "categorias-activado" : "categorias-desactivada"}>
        {cate.map((categoria)=>{
            return <Link to={categoria.enlace}>
                {categoria.titulo}</Link>
        })}
    </div>
</Div>
  );
};

export default Navlateral;