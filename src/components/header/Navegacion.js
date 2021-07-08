import React from 'react';


const Navegacion = ({desactivado,estilo}) => {
    const A = estilo;
    return ( 
<div className={desactivado ? "desactivado" : "activado"}>
          <A href="/crear-usuario">registrarme</A>
          <A href="/iniciar-sesion">iniciar sesion</A>
          <A href="/admin/administrador/productos/nuevo-producto">nuevo producto</A>
          <A href="/admin/administrador/productos">productos</A>
        </div>
     );
}
 
export default Navegacion;