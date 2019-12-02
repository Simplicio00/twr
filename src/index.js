import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {Route, BrowserRouter as Router, Switch, Redirect} from 'react-router-dom';
import Historico from './pages/Historico';
import HistoricoCompras from './pages/HistoricoCompras';
import PaginaDoProduto from './pages/PaginaDoProduto';


const Rota = (
    <Router>
        <div>
            <Switch>
                <Route exact path ='/' component={App}/>
                <Route path='/Historico' component= {Historico}/>
                <Route path='/Historico de compras' component={HistoricoCompras}/>
                <Route path='/Produto' component={PaginaDoProduto}/>                
            </Switch>
        </div>
    </Router>
)

ReactDOM.render(Rota, document.getElementById('root'));

serviceWorker.unregister();
