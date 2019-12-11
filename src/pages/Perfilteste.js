import React, { Component } from 'react';

// import { usuarioAutenticado, parseJwt } from '../services/auth';
// import Axios from 'axios';
// import { usuarioAutenticado } from '../services/auth';



class Perfilteste extends Component {


    constructor(props){
        super(props);
        this.state = {
            user : [],
            idUsuario : parseInt,
            nomeUsuario : '',
            loading : false 
        }
        this.userLogado = this.userLogado.bind(this);
    }

    userLogado(){
        this.setState({loading : true});        
        fetch('https://localhost:5001/api/Usuario/gUser', {     
        headers: { "Content-Type" : "application/json", 
        'authorization' : 'Bearer ' + localStorage.getItem('autenticarlogin')}
        })
        .then(resposta => resposta.json())
        .then(data => {
        this.setState({ user : data })
        this.setState({ loading : false });
        })
        .catch((erro) => console.log(erro))
        }


    componentDidMount(){
        this.userLogado();
    }



    render(){
        console.log(this.state.user)
        return(
            <body>
            <main>
            {this.state.user.map(Usuario =>{
                return(
            <div key={Usuario.idUsuario}>
                <div><p>{Usuario.nomeUsuario}</p></div>
            </div>
            
                )})}
            
            </main>
            </body>
        )
    }
}

export default Perfilteste;