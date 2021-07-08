import React ,{Fragment}from 'react';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import clienteAxios from '../../../config/axios';
import Swal from 'sweetalert2';




const Div = styled.div`
width: 85%;
box-shadow: rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.05) 0px 8px 32px;
margin: 20px 0;
padding: 10px;



div{
  a{
    width: 40%;
color: #010400;
text-decoration: none;
padding: 10px;
background-color: #62bbc1;
margin:  10px auto;
color: #FFFBFC;
border-radius: 10px;
text-align: center;
letter-spacing: 0.10em;
border: none;
font-size: 16px;
display: block;

&:hover{
        background-color: #72d9e0;  
    }
}


div{
  width: 40%;
color: #010400;
text-decoration: none;
padding: 10px;
background-color: rgb(221, 51, 51);
margin:  10px auto;
color: #FFFBFC;
border-radius: 10px;
text-align: center;
letter-spacing: 0.10em;
border: none;
/* font-size: 16px; */
display: block;
display: flex;
align-items: center;
justify-content: center;


&:hover{
  background-color: red;
}
}
}




p{
  font-size: 20px;
  text-align: center;
}




img{
  display: block;
  width: 40%;
  margin: 15px auto;
}

`

















const Producto = ({producto}) => {

    // console.log(producto);

    const {_id, nombreProducto,imagen,precio} = producto;



    // Eliminar cliente

  const eliminarProducto =  idProducto =>{
    Swal.fire({
      title: 'Estas seguro de borrarlo ?',
      text: "Si lo borras no se podra recuperar!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, borrar!',
      cancelButtonText:"cancelar"
    }).then((result) => {
      if (result.isConfirmed) {

        clienteAxios.delete(`/productos/${idProducto}`)
            .then(res=>{
              console.log(res);
              Swal.fire(
                'Registro borrado!',
                'El registro se a sido eliminado exitosamente.',
                'success'
              )
            })
        
      }
    })
  }



    return (
        <Div>
        <img 
        src={`http://localhost:5600/${imagen}`} 
        alt={nombreProducto}
        
        />
        <p>{nombreProducto}</p>
        <p>{`$ ${precio}`}</p>
        <div>
        <Link 
        to={`/admin/administrador/productos/editar/${_id}`}
        >Editar
        </Link>
        <div 
        type="button" 
        onClick={()=>{eliminarProducto(_id)}}
        >Eliminar
        </div>
        </div>
        </Div>
      );
}
 
export default Producto;