import React,{useState,useEffect} from 'react';
import Head from "../../componentes/Head"
import Menu from "../../componentes/Menu"
import { useNavigate } from "react-router-dom";

export default function Cadastropatrimonio(){

    const navigate = useNavigate();   
    const [nome,setNome]=useState("");
    const [data_aquisicao,setData_aquisicao]=useState("");
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

            let lista = JSON.parse(localStorage.getItem("cad-patrimonio")||"[]");
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
            let lista = JSON.parse(localStorage.getItem("cad-patrimonio")||"[]");
            lista.push(

                {
                    id:Date.now().toString(36)+Math.floor(Math.pow(10,12)+Math.random()*9*Math.pow(10,12)).toString(36),
                    nome:nome,
                    Data_Aquisicao:data_aquisicao,
                   
                }

            )
        
         localStorage.setItem("cad-patrimonio",JSON.stringify(lista));
            
            alert("Dados salvos com sucesso!");
            navigate("/listapatrimonio");

        }else{

            setMsg(errorMsg);  

        }
        
    } 

    return(

    <div className="dashboard-container">
        <Menu />

         <div className="principal">

              <Head title=" Cadastro de Patrimônio" />

                <section className="form-cadastro">

                    <form onSubmit={salvardados} >

                        <label>Nome do Patrimonio</label>
                        
                        <input placeholder="Nome" value={nome} 
                        onChange={e=>setNome(e.target.value)}
                        />
                        <label>Data da Aquisição</label>

                        <input  value={data_aquisicao} type="date"
                        onChange={e=>setData_aquisicao(e.target.value)}
                        
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