import React from 'react';


const Hamburguesa = ({desactivado,activarMenu}) => {


    
    return (  


        <div className="contenedor">
            <div
              onClick={() => {
                desactivado ? activarMenu(false) : activarMenu(true);
              }}
              className="menu"
            >
              <div className="hamburguesa">
                <div
                  className={desactivado ? "linea" : "linea rotar1 blanco"}
                ></div>
                <div
                  className={desactivado ? "linea" : "linea desaparecer"}
                ></div>
                <div
                  className={desactivado ? "linea" : "linea rotar2 blanco"}
                ></div>
              </div>
            </div>
          </div>
    );
}
 
export default Hamburguesa;