import React, { Fragment, useState } from "react";
import styled from "@emotion/styled";
import Logo from "./Logo";

import Hamburguesa from "./Hamburguesa";
import Navegacion from "./Navegacion";
import Nav from "./Nav";
import {withRouter} from "react-router-dom";

// Estilos con StyledComponents
const DivPrincipal = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
`;

const A = styled.a`
  margin: 10px auto;
  color: #fffbfc;
  font-size: 25px;
  padding: 10px 20px;
  border-radius: 10px;
  text-decoration: none;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  &:hover {
    background-color: #fff;
    color: #000;
    text-decoration: none;
  }
`;



const Header = styled.header`

background-color: #30332E;
margin-bottom: 90px;
`


const HeaderComponent = (props) => {
  const [desactivado, activarMenu] = useState(true);
  return (
    <Header>
      <Navegacion 
      desactivado={desactivado} 
      estilo={A} 
      />
      <DivPrincipal>
        <Logo 
        clase="logo-svg" 
        desactivado={desactivado} 
        onClick={()=>{
          props.history.push("/");
        }}
        />
        <Hamburguesa
          desactivado={desactivado}
          activarMenu={activarMenu}
          estilo={A}
        />
    <Nav/>
      
      </DivPrincipal>
    </Header>
  );
};

export default withRouter(HeaderComponent);
