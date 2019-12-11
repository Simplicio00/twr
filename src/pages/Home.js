import React, {Component} from 'react';
import '../App.css';
import img from '../assets/img/macbook.png';
import pd1 from '../assets/img/buffer.png';
import pd2 from '../assets/img/laptop.png';
import pd3 from '../assets/img/dollar-symbol.png';
import Cabecalho from '../componentes/Cabecalho';
import Rodape from '../componentes/Rodape';


class Home extends Component{
    constructor(props){
      super(props);
        this.state ={
          listaClassificados : [],
          preco: '',
          avaliacao: '',
          loading : false
        }
        this.listagemHome.bind(this);
      }

      listagemHome(){
        this.setState({loading : true});
        fetch('https://localhost:5001/api/Classificado')
        .then(resposta => resposta.json())  
        .then(data =>{this.setState({listaClassificados : data})
        this.setState({loading : false});
      })
      .catch((erro) => console.log(erro))
      }

      componentDidMount(){
        this.listagemHome();
      }
    

    render(){
        return(
<div>

<body>
  <Cabecalho/>

<section className="banner-home">
<div className="imagem-banner-home">              </div>
</section>


<section className="home_filtro">
<div className="home_filtro_box_bottom_box1_box">
  <div className="home_filtro_box_bottom_box1_box_1">
    <div className="home-circulo-filtro-um">
      <img src={pd1}/>
    </div>
    <a href="" className="linkagem-filtro-home"><p className="paragrafo-filtro-home">Ordenar por categoria</p></a>
    <i className="fas fa-chevron-down" className="icone-flecha"></i>
  </div>
  <div className="barra-serapacao-filtro"></div>
  
  <div className="home_filtro_box_bottom_box1_box_1">
    <div className="home-circulo-filtro-dois">
      <img src={pd2} />
    </div>
    <a href="" className="linkagem-filtro-home"><p className="paragrafo-filtro-home">Ordenar por marca</p></a>
    <i className="fas fa-chevron-down" className="icone-flecha"></i>
  </div>
  <div className="barra-serapacao-filtro"></div>
  
  <div className="home_filtro_box_bottom_box1_box_1">
    <div className="home-circulo-filtro-tres">
      <img src={pd3}/>
    </div>
    <a href="" className="linkagem-filtro-home"><p className="paragrafo-filtro-home">Ordenar por preço</p></a>
    <i className="fas fa-chevron-down" className="icone-flecha"></i>
  </div>
</div>
</section>



<main>
<section className="home-inicio-apresentacao">






<div className="home-notebook-apresentacao">
<div className="home-notebook-box">
      {this.state.listaClassificados.map(function(Classificado){
        return(  
<div className="home-cards-separacao-notebooks">

<div className="home_produto_desk_box_box_card">
<div className="home-guardar-notebooks"><img src={img}/></div>

<div className="home_produto_desk_box_box_card_bottom">

            <div key={Classificado.idClassificado} className="home-descricao-notebooks">
              {Classificado.idEquipamentoNavigation.nomeEquipamento}


                                                                             </div>
      
      
      
      <div className="home-carrinhos-cards">
      <div className="home-precos-cards-left">
      <div className="home-precos-cards-bottom">
      <div style={{color:"white"}} key={Classificado.idClassificado} className="home-borda-preco-notebooks">
        {Classificado.preco}  <br/>
                                                </div>
                                                </div>
                                                </div>
              <div className="home-cards-configuracao-carrinhos">
              <div className="home-produto-interesse-notebook">
              <div className="home-carrinhos-box">
              <i className="fas fa-shopping-cart">

                                                </i>
                                                </div>
                                                </div>
                                                </div>
                                                </div>




                                                </div>
                                                </div>




                                    









                                                
                                                </div>
)})}








      
                                                </div>
                                                </div>




</section>
</main>
  <Rodape/>

</body>

            
            </div>
        )
    }
  }

export default Home;