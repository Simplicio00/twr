import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import {Route, BrowserRouter as Router, Switch, Redirect} from 'react-router-dom';
import Historico from './pages/Historico';
import HistoricoCompras from './pages/HistoricoCompras';
import PaginaDoProduto from './pages/PaginaDoProduto';
import Apresentacao from './pages/Apresentacao';
import Cadastro from './pages/Cadastro';
import Home from './pages/Home';
import Login from './pages/Login';
import DashboardUsuario from './pages/DashboardUsuario';
import Confirmacao from './pages/ConfirmacaoCadastro';
import Perfil from './pages/Perfil';
import alterada from './pages/SenhaAlterada';
import DashboardClassificados from './pages/DashboardClassificados';

import { usuarioAutenticado, parseJwt } from './services/auth';







const AdminAuth = ({ component : Component }) => (
    <Route
    render = {
        props => usuarioAutenticado() 
        && parseJwt().Role === 'Administrador' ? ( 
    < Component {...props} /> ) : ( <Redirect to = {{ pathname : 'login' }}/> )
}
/>
)

const ContriAuth = ({ component : Component }) => (
    <Route
    render = {
        props => usuarioAutenticado() 
        && parseJwt().Role === 'Comum' ? ( 
    < Component {...props} /> ) : ( <Redirect to = {{ pathname : 'login' }}/> )
}
/>
)








const Rota = (
    <Router>
        <div>

         {/* headers : {
         "Content-type" : "application/json",
         'Authorization' : 'Bearer' + localStorage.getItem('autenticar')
         } */}

            
            <Switch>
                <ContriAuth exact path ='/' component={Home}/>
                <ContriAuth path='/Historico' component= {Historico}/>
                <ContriAuth path='/Historico de compras' component={HistoricoCompras}/>
                <ContriAuth path='/Produto' component={PaginaDoProduto}/>                
                <ContriAuth path='/Perfil' component={Perfil}/>                                
                <Route path='/DashUsuario' component={DashboardUsuario} />
                <Route path='/DashClassificados' component={DashboardClassificados} />
                <Route path='/Cadastro' component={Cadastro} />  
                <Route path='/Bem vindo' component={Confirmacao} />               
                <Route path='/Apresentacao' component={Apresentacao}/> 
                <Route path='/Login' component={Login} />
                <Route path='/alteracao concluida' component={alterada} />

            </Switch>
        </div>
    </Router>
)

ReactDOM.render(Rota, document.getElementById('root'));

serviceWorker.unregister();
