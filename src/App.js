import React, { Fragment,useContext } from "react";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
/**Routing */
import{BrowserRouter as Router,Route,Switch} from "react-router-dom";
import Home from "./components/home/Home";
import NuevoProducto from "./components/admin/productos/NuevoProducto";
import NuevoUsuario from "./components/admin/NuevoUsuario";
import Registrarse from "./components/admin/auth/Registrarse";
import Productos from "./components/admin/productos/Productos";
import EditarProducto from "./components/admin/productos/EditarProducto";
import Login from "./components/admin/auth/Login";


import {CRMContext,CRMProvider} from "./components/context/CRMContext";




function App() {

  // Utilizar context en el compoente
  const [auth,guardarAuth] = useContext(CRMContext);

  return (
    <Router>

      <Fragment>
<CRMProvider value={[auth,guardarAuth]}>
      <Header />

      <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/admin/administrador/productos/nuevo-producto" component={NuevoProducto} />
      <Route exact path="/admin/administrador/nuevo-usuario" component={NuevoUsuario} />
      <Route exact path="/crear-usuario" component={Registrarse} />
      <Route exact path="/admin/administrador/productos" component={Productos} />
      <Route exact path="/admin/administrador/productos/editar/:id" component={EditarProducto} />
      <Route exact path="/iniciar-sesion" component={Login} />

      </Switch>

      <Footer />
</CRMProvider>
      </Fragment>

    </Router>
  );
}

export default App;
