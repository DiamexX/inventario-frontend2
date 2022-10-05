import React,{useState,useEffect} from 'react';
import Head from "../../componentes/Head"
import Menu from "../../componentes/Menu"
import { useNavigate } from "react-router-dom";

export default function Cadastroempresas(){

    const navigate = useNavigate();   
    const [nome,setNome]=useState("");
    const [responsavel,setResponsavel]=useState("");
    const [contato,setContato]=useState("");
    const [msg,setMsg]=useState([]);
    const [dados,setDados]=useState([]);
 

    // function validaremail(){
        
    //     var re = /\S+@\S+\.\S+/;
    //     return re.test(email);
       
    // }

        useEffect(()=>{

            mostrardados();

        },[])
    
    function mostrardados(){

            let lista = JSON.parse(localStorage.getItem("cad-empresas")||"[]");
            setDados(lista);
    }



    function salvardados(e){
        e.preventDefault();
        let i=0;
        let errorMsg=[];

        if(nome.length<3){

            errorMsg.push("Campo nome tem menos que 3 caracteres\n");
            i++;

        }




        
        
        if(i==0)
        {

            
            setMsg("");
            let lista = JSON.parse(localStorage.getItem("cad-empresas")||"[]");
            lista.push(

                {
                    id:Date.now().toString(36)+Math.floor(Math.pow(10,12)+Math.random()*9*Math.pow(10,12)).toString(36),
                    nome:nome,
                    responsavel:responsavel,
                    contato:contato
                }

            )
            localStorage.setItem("cad-empresas",JSON.stringify(lista));
            alert("Dados salvos com sucesso!");
            navigate("/listaempresas");

        }else{

            setMsg(errorMsg);  

        }
        
    } 

    return(

    <div className="dashboard-container">
        <Menu />

         <div className="principal">

              <Head title=" Cadastro de empresas" />

                <section className="form-cadastro">

                    <form onSubmit={salvardados} >

                        <label>Nome da Empresa</label>
                        
                        <input placeholder="Nome" value={nome} 
                        onChange={e=>setNome(e.target.value)}
                        />
                        <label>Responsável</label>

                        <input  value={responsavel} 
                        onChange={e=>setResponsavel(e.target.value)}
                        
                        />
                        <label>Contato</label>

                        <input type="text" value={contato} 
                        onChange={e=>setContato(e.target.value)}
                        />
                    

                        <button className="button_save" type="submit">
                            Salvar
                        </button>
                     
                       

                    </form>

                </section>

         </div>

    </div>

 ) 

}