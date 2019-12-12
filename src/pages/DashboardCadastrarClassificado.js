// import React, {Component} from 'react';
// import {apiFormDataClassificado} from '../services/Apimg';




// class DashboardCadastrarClassificado extends Component{


//     constructor(props){
//         super(props);
//         this.state = {
            
//             CodigoClassificado: '',
//             Preco: '',
//             NumeroDeSerie: '',
//             Avaliacao: '',
//             FimDeVidaUtil: '',
//             DataFabricacao: '',
//             SoftwaresInclusos: '',
//             // imagemClassificado: React.createRef()
//         }

//         this.atualizarCodigoClassificado = this.atualizarCodigoClassificado.bind(this);
//         this.atualizarPreco = this.atualizarPreco.bind(this);
//         this.atualizarNumeroDeSerie = this.atualizarNumeroDeSerie.bind(this);
//         this.atualizarAvaliacao = this.atualizarAvaliacao.bind(this);
//         this.atualizarFimDeVidaUtil = this.atualizarFimDeVidaUtil.bind(this);
//         this.atualizarDataFabricacao = this.atualizarDataFabricacao.bind(this);
//         this.atualizarSoftWaresInclusos = this.atualizarSoftWaresInclusos.bind(this);  
//         // this.atualizarImagem = this.atualizarImagem.bind(this); 
//     }



//     cadastrarClassificado(event){
//         event.preventDefault();
//         fetch('https://localhost:5001/api/Classificado', {
//             method: 'POST',
//             body: JSON.stringify({
//                 CodigoClassificado : this.state.CodigoClassificado,
//                 Preco : this.state.Preco,
//                 NumeroDeSerie : this.state.NumeroDeSerie,
//                 Avaliacao : this.state.Avaliacao,
//                 FimDeVidaUtil : this.state.FimDeVidaUtil,
//                 DataFabricacao : this.state.DataFabricacao,
//                 SoftwaresInclusos : this.state.SoftwaresInclusos,
//                 imagemClassificado : this.state.imagemClassificado
//             })
//         })
//     }



//     render(){
//         return(

//             <div>

//                 <div>


//                 <form onSubmit={this.cadastrarClassificado} >

                


//                 <input
//                 value={this.state.CodigoClassificado} 
//                 onChange={this.atualizarCodigoClassificado}
//                 placeholder="Codigo classificado"/>

//                 <input 
//                 value={this.state.Preco} 
//                 onChange={this.atualizarPreco}
//                 placeholder="Preço"/>
                
//                 <input 
//                 value={this.state.NumeroDeSerie} 
//                 onChange={this.atualizarNumeroDeSerie}
//                 placeholder="Número de série"/>
                
//                 <input 
//                 value={this.state.Avaliacao} 
//                 onChange={this.atualizarAvaliacao}
//                 placeholder="Avaliação"/>
                
//                 <input 
//                 value={this.state.FimDeVidaUtil} 
//                 onChange={this.atualizarFimDeVidaUtil}
//                 placeholder="Fim de vida útil"/>
                
//                 <input 
//                 value={this.state.DataFabricacao} 
//                 onChange={this.atualizarDataFabricacao}
//                 placeholder="data de fabricação"/>
                
//                 <input 
//                 value={this.state.SoftwaresInclusos} 
//                 onChange={this.atualizarSoftWaresInclusos}
//                 placeholder="Softwares inclusos"/>
                
//                 <input 
//                 value={this.state.idEquipamento}
//                 placeholder="equipamento"/>
                
// {/* 
//                 <input 
//                 accept="image/*"
//                 value={this.state.imagemClassificado}
//                 onChange={this.state.imagemClassificado} */}
//                 />

//                     <button onClick="cadastrar">Cadastrar</button>

//                     </form>


//                 </div>





//             </div>
            


//         )
//     }
// }

// export default DashboardCadastrarClassificado;