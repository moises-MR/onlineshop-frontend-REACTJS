import React, { Fragment } from "react";
import Categorias from "./Categorias";
import PromoPrincipal from "./Promo-principal";
import CelularesContainer from "./CelularesContainer";

const Home = () => {




const categorias = {

  titulo: "categorias",
  listado :[
    {cat:"iPhone"},
    {cat:"samsung"},
    {cat:"motorola"},
    {cat:"huawei"},
  ]
}









  return (
    <Fragment>
      <Categorias 
      categorias={categorias}
      />
      <PromoPrincipal />
      <CelularesContainer />
    </Fragment>
  );
};

export default Home;
