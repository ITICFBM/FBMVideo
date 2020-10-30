/** este archivo se encarga de las rutas que vamos a iportar */
import React from 'react';
/** Router permite pasar BrowserRouter->Router */
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from '../containers/Home';
import Login from '../containers/Login';
import Register from '../containers/Register';
import NotFound from '../containers/NotFound';
import Player from '../containers/Player';
/** importamos el layout */
import Layout from '../components/Layout';

const App = () => (
    //BrowserRouter encapsula todas las rutas que necesito  /
    <BrowserRouter>
        {/* encapsulamos el switch dentro del layout*/}
        <Layout>
            <Switch>
                {/* Con switch solo hae el if donde si el path es la raiz solo muestre cada uno de los elemntos */}
                {/*exatc es el mach del componente que va a revisar*/}
                <Route exact path="/" component={Home} />
                {/** Declaramos La Ruta De Login*/}
                <Route exact path="/login" component={Login} />
                {/** Declaramos La Ruta De Register*/}
                <Route exact path="/register" component={Register} />
                {/* Declaramos la ruta del player */}
                <Route exact path="/player/:id" component={Player} />
                {/* Declaramos la rote para NotFound */}
                <Route component={NotFound} />
            </Switch>
        </Layout>
    </BrowserRouter>
)

export default App; 