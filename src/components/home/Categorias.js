import React,{useState} from "react";
import styled from "@emotion/styled";
 




const Div = styled.div`
text-align: center;
padding: 10px;
background-color: #30332E;
width: 90%;
margin: 10px auto;
border-radius: 10px;
cursor: pointer;


@media (min-width: 768px) {
   display: none;
  }

&:hover{
  background-color: #3f423c;
}


p{
    color: #FFFBFC;
    font-weight: bold;
    letter-spacing: 0.50em;
    text-transform: uppercase;
    margin: 0;

}


`

const Categorias = () => {

const [activado,activarCategorias] = useState(false);


  return (
<Div
onClick={()=>{
    !activado ? activarCategorias(true) : activarCategorias(false)
}}
>
    <p>categorias</p>
    <div className={activado ? "categorias-activado" : "categorias-desactivada"}>
        <a href="#">iphone</a>
        <a href="#">samsung</a>
        <a href="#">motorola</a>
        <a href="#">huawei</a>
    </div>
</Div>
  );
};

export default Categorias;
