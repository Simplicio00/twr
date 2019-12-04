import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import {Route, BrowserRouter as Router, Switch, Redirect} from 'react-router-dom';
import Historico from './pages/Historico';
import HistoricoCompras from './pages/HistoricoCompras';
import PaginaDoProduto from './pages/PaginaDoProduto';
import Apresentacao from './pages/Apresentacao';
import Login from './pages/Login';
import Home from './pages/Home';

const Rota = (
    <Router>
        <div>
            <Switch>
                <Route exact path ='/' component={Home}/>
                <Route path='/Historico' component= {Historico}/>
                <Route path='/Historico de compras' component={HistoricoCompras}/>
                <Route path='/Produto' component={PaginaDoProduto}/>                
                <Route path='/Apresentacao' component={Apresentacao}/> 
                <Route path='/Login' component={Login} />               
            </Switch>
        </div>
    </Router>
)

ReactDOM.render(Rota, document.getElementById('root'));

serviceWorker.unregister();
