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
import Confirmacao from './pages/ConfirmacaoCadastro';
import Perfil from './pages/Perfil';
import Perfilteste from './pages/Perfilteste';
import alterada from './pages/SenhaAlterada';
import DashboardUsuario from './pages/DashboardUsuario';
import DashboardClassificados from './pages/DashboardClassificados';
import DashboardCadastrarCategoria from './pages/DashboardCadastrarCategoria';
import DashboardListarCategoria from './pages/DashboardListarCategoria';
import { usuarioAutenticado, parseJwt } from './services/auth';

import DashboardListarCadastrarClassificado from './pages/DashboardCadastrarClassificado';








const AdminAuth = ({ component : Component }) => (
    <Route
    render = {
        props => usuarioAutenticado() 
        && parseJwt().Roles === 'Administrador' ? ( 
    < Component {...props} /> ) : ( <Redirect to = {{ pathname : 'login' }}/> )
}
/>
)

const ContriAuth = ({ component : Component }) => (
    <Route
    render = {
        props => usuarioAutenticado() 
        && parseJwt().Roles === 'Comum' ? ( 
    < Component {...props} /> ) : ( <Redirect to = {{ pathname : 'login' }}/> )
}
/>
)

const Ambos = ({ component : Component }) => (
    <Route
    render = {
        props => usuarioAutenticado() 
        && parseJwt().Roles === 'Comum' | parseJwt().Roles === 'Administrador' ? ( 
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

                <Ambos exact path ='/' component={Home}/>
                <ContriAuth path='/Historico' component= {Historico}/>
                <ContriAuth path='/Historico de compras' component={HistoricoCompras}/>
                <ContriAuth path='/Produto' component={PaginaDoProduto}/>                
                <AdminAuth path='/PerfilTeste' component={Perfilteste}/>                                
                <Ambos path='/Perfil' component={Perfil}/>    
                <Route path='/DashUsuario' component={DashboardUsuario} />
                <Route path='/DashClassificados' component={DashboardClassificados} />
                <Route path='/Cadastro' component={Cadastro} />  
                <Route path='/Bem vindo' component={Confirmacao} />               
                <Route path='/Apresentacao' component={Apresentacao}/> 
                <Route path='/Login' component={Login} />
                <Route path='/alteracao concluida' component={alterada} />
                <Route path='/cadastrarCategoria' component={DashboardCadastrarCategoria} />
                <Route path='/listarCategoria' component={DashboardListarCategoria} />
                <Route path='/cadastrarClassificado' component={DashboardListarCadastrarClassificado} />

                
            </Switch>
        </div>
    </Router>
)

ReactDOM.render(Rota, document.getElementById('root'));

serviceWorker.unregister();