import React,{Fragment,useEffect,useState} from 'react';
import clienteAxios from '../../../config/axios';
import styled from '@emotion/styled';
import Swal from 'sweetalert2';




const Form = styled.form`


width: 80%;
margin: 10px auto;
background-color: #30332e;
padding: 15px;
border-radius: 10px;





div{
    display: flex;
    flex-direction: column;
    align-items: center;
    label{
        color:#fffbfc ;
        margin: 2px 0;
    }
    input{
    display: block;
    margin: 10px 0;
    padding: 5px;
    border: none;
    border-radius: 5px;
    width: 80%;
    }
}


`;




const InputSubmit = styled.input`
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

    `


const Imagen = styled.img`

width: 40%;
display: block;
margin: 15px auto;

`;


const P = styled.p`

display: block;
text-align: center;
margin: 25px 0;
font-size: 20px;
font-weight: 700;
letter-spacing: 0.10em;
`












const EditarProductos =  (props) => {

    // Obteniendo ID por params
    const {id} = props.match.params;

// State
const [producto,guardarProducto] = useState({

    nombreProducto:"",
    caracteristicas:"",
    imagen :"",
    inventario :"",
    precio :""


});


const [archivo,guardarArchivo] = useState({});



useEffect(()=>{

    const consultaApi = async ()=>{
      const consulta =  await clienteAxios.get(`/productos/${id}`);
        // console.log(consulta);
        guardarProducto(consulta.data);


    }
consultaApi();
},[]);




// Actualiza el state

const actualizarState = (e) =>{


guardarProducto({
    ...producto,
    [e.target.name] : e.target.value
})

} 


// Leer datos de imagen

const leerArchivo = e =>{
    // console.log(e.target.files[0]);
    guardarArchivo(e.target.files[0]);

}







// Guardar producto en la API


const almacenarProducto = async (e) =>{

    e.preventDefault();
   

    // Validar que no venga vacio el formulario
const {nombreProducto,caracteristicas,inventario,precio} = producto;
 if(!nombreProducto.trim().length 
    || !caracteristicas.trim().length  
    || !inventario.trim().length || !precio.trim().length){


        Swal.fire(
            'Datos incompletos!',
            'Favor de llenar todos los campos!',
            'error',
            
          )
        return;
    }

const formData = new FormData();

formData.append("nombreProducto",producto.nombreProducto);
formData.append("caracteristicas",producto.caracteristicas);
formData.append("imagen",archivo);
formData.append("inventario",producto.inventario);
formData.append("precio",producto.precio);

    
try {


     //Actualizar IMAGEN Y DATOS EN LA BD
 const res = await   clienteAxios.put(`/productos/${id}`,formData,{
         headers:{
             "Content-type":"multipart/form-data"
         }
     })

     if(res.status === 200){
        Swal.fire(
            'Producto agregado!',
            'El producto se agrego correctamente!',
            'success'
          )
          props.history.push("/admin/administrador/productos")
     }



} catch (error) {

    console.log(error);

    Swal.fire(
        'Ups!',
        'El producto no se puedo agregar!',
        'error'
      )
}
    
    
        
            
              
     
       
}









    return ( 

 <Fragment>
<P>Editar producto</P>

    <Imagen src={`http://localhost:5600/${producto.imagen}`} />
<Form
onSubmit={almacenarProducto}
>
<div>
<label>Nombre del producto</label>
<input 
type="text" 
defaultValue={producto.nombreProducto}
onChange={actualizarState}
name="nombreProducto"

/>
</div>

<div>
<label>Imagen del producto</label>
<input 
type="file" 
onChange={leerArchivo}

/>
</div>

<div>
<label>Caracteristicas</label>
<input 
type="text" 
defaultValue={producto.caracteristicas}
onChange={actualizarState}
name="caracteristicas"
/>
</div>

<div>
<label>Precio</label>
<input 
type="text"
defaultValue={producto.precio}
onChange={actualizarState}
name="precio"
 />
 </div>

<div>
<label>Inventario</label>
<input 
type="text" 
defaultValue={producto.inventario}
onChange={actualizarState}
name="inventario"
/>
</div>

<InputSubmit
type="submit"
value="Editar"
/>
</Form>
</Fragment>
     );
}
 
export default EditarProductos;