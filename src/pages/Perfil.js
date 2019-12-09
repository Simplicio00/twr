import React, { Component } from 'react';
import '../assets/css/perfil.css';
import img0 from '../assets/img/perfil.png';
import img1 from '../assets/img/lock.png';
import img2 from '../assets/img/locked-padlock (1).png';
import img3 from '../assets/img/logout.png';
import '../assets/script/transition';
import Cabecalho from '../componentes/Cabecalho';
import Rodape from '../componentes/Rodape';



class Perfil extends Component {


    constructor(props) {
        super(props);
        this.mostrar = this.mostrar.bind(this);
    }

    mostrar() {
        var y = document.getElementById("pord");
        if (y.style.display === "none") {
            y.style.display = "block";
            document.getElementById("contorno-style").style.height = "616px ";
            document.getElementById("contorno-style").style.width = "389px";
            document.getElementById("po-ord-div-3-flex-perf").style.height = "597px";
            document.getElementById("po-ord-div-3-flex-perf").style.width = "369px";
            document.getElementById("po-ord-div-2-perf").style.height = "47em";
            document.getElementById("po-ord-div-4-flex-btn-perf").style.display = "none";
        } else {
            y.style.display = "none";
            document.getElementById("contorno-style").style.height = "359px ";
            document.getElementById("contorno-style").style.width = "389px";
            document.getElementById("po-ord-div-3-flex-perf").style.height = "339px";
            document.getElementById("po-ord-div-3-flex-perf").style.width = "369px";
            document.getElementById("po-ord-div-4-flex-btn-perf").style.display = "";
        }
    }


    render(){
        return(
            <body>
                <Cabecalho/>
            <main>
        <section id="po-ord-sec-1-perf">
            
        <div id="po-ord-div-2-perf">

            <div id="contorno-style">
                <div id="po-ord-div-3-flex-perf">
                    <div id="po-ord-div-4-img-perf"><img src={img0} /></div>
                    <div id="po-ord-div-4-nome-perf"><p>nome</p></div>
                    <div id="po-ord-div-4-nomeCompleto-perf"><p>nome completo</p></div>
                    <div id="po-ord-div-4-email-perf"><p>email</p></div>
                    <div id="po-ord-div-4-hr-perf"><hr/></div>
                    <div id="pord">

                        <div id="pord-div-4-flex-perf">

                            <div id="pord-div-5-h3-txt"> <h4>Segurança</h4> <img src={img1} /></div>
                            <div id="pord-div-5-input-perf">
                                <label for="#">Nova senha</label>
                                <input required type="password" />
                                <label for="#">Confirme a nova senha</label>
                                <input required type="password" />
                            </div>
                        </div>
                        <div id="pord-div-5-btn-perf">  
                                <button>Confirmar</button> <button onClick={this.mostrar}>Cancelar</button>
                            </div>

                    </div>
                    <div id="po-ord-div-4-flex-btn-perf">
                        <button onClick={this.mostrar}>Alterar senha <div class="btn-img"><img src={img2} /></div></button> <button> Sair <div class="btn-img"><img src={img3}/></div></button>
                    </div>
                </div>
            </div>
        </div>
    </section>
</main>
            <Rodape/>
            </body>
        )
    }
}

export default Perfil;