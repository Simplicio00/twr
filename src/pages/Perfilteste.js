import React, { Component } from 'react';

// import { usuarioAutenticado, parseJwt } from '../services/auth';
// import Axios from 'axios';
// import { usuarioAutenticado } from '../services/auth';



class Perfilteste extends Component {


    constructor(props){
        super(props);
        this.state = {
            gUser : [],
            nomeUsuario : '',
            nomeCompleto: '',
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
        this.setState({ gUser : data })
        this.setState({ loading : false });
        })
        .catch((erro) => console.log(erro))
        }


    componentDidMount(){
        this.userLogado();
    }



    render(){
        console.log(this.state.gUser)
        return(
            <body>
            <main>
            <div key={this.state.gUser}>
                <div><p>{this.state.gUser.nomeUsuario}</p></div>
                <div><p>{this.state.gUser.nomeCompleto}</p></div>

            </div>
            
            
            </main>
            </body>
        )
    }
}

export default Perfilteste;