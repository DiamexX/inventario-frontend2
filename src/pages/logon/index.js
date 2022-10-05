import React, {useState} from "react";
import logo from "../../assets/imagens/logo.webp"
import './styles.css';
import { useNavigate } from "react-router-dom"; 


export default function Logon(){

const [dados,setDados]=useState([]);
const navigate = useNavigate();
const [email,setEmail]=useState("");
const [senha,setSenha]=useState("");

function logar(e){
    
    e.preventDefault();
   
    let dadosnovos = [];
    let lista = JSON.parse(localStorage.getItem("cad-usuarios")||"[]");
    dadosnovos = lista.filter(item=>item.email==email && item.senha==senha);



    
    if(dadosnovos.length>0){

        navigate("/dashboard");

    }else{

        alert("Email ou Senha invalidos!");

    }
    

    }
 return(

        <div className="logon-container">
            
            <section className="form">

                <form onSubmit={logar}>

                    <h1>Faça o seu login</h1>
                    <input placeholder="Email" 
                    value={email} 
                    onChange={e=>setEmail(e.target.value)}
                    />
                    <input placeholder="senha" 
                    type="password" 
                    value={senha}
                    onChange={e=>setSenha(e.target.value)}
                    />
                    <button className="button_login" type="submit">Entrar
                    </button>

                </form>

            </section>
            <section className="div-imagem">

                <img src={logo} width={150}/>
                <h1>Sistema de Inventário</h1>

            </section>

        </div>

 )   
}