import React from 'react';
import styled from '@emotion/styled';


const Div = styled.div`

width: 90%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
margin: 30px auto;
box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
border-radius: 10px;

@media (min-width: 768px) {
    width: 80%;
  }


img{
width: 80%;

@media (min-width: 768px) {
    width: 60%;
  }
}

p{
    margin: 0;
}

a{
    margin: 8px;
    padding: 8px;
    background-color: #62BBC1;
    color: #FFFBFC;
    border-radius: 10px;
    text-align: center;
    letter-spacing: 0.10em;
    text-decoration:none;

    &:hover{
        background-color: #72d9e0;  
    }

}


h3{
    text-align: center;
}

`

const Celular = ({celular}) => {
    return (

    <Div>
    <img src={`http://localhost:5600/${celular.imagen}`} alt={celular.nombreProducto}/>   
    <h3>{celular.nombreProducto}</h3>
    <p>{`Desde ${celular.precio}`}</p>
    <a href="#">Comprar</a>

    </Div>
      );
}
 
export default Celular;