import React,{useState,useEffect} from 'react';
import Head from "../../componentes/Head"
import Menu from "../../componentes/Menu"
import { useNavigate,useParams } from "react-router-dom";

export default function EditarPatrimonio(){

    const navigate = useNavigate(); 
    const {id} = useParams();  
    const [nome,setNome]=useState("");
    const [Data_Aquisicao,setData_Aquisicao]=useState("");
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
            let emp = lista.filter(item=>item.id==id);
            setNome(emp[0].nome);
            setData_Aquisicao(emp[0].Data_Aquisicao);
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
            let dadosnovos=[];
            let lista = JSON.parse(localStorage.getItem("cad-patrimonio")||"[]");
            dadosnovos=lista.map((function(item){
                if(item.id==id){
                                     return {
                                             id:id,
                                             nome:nome,
                                             Data_Aquisicao:Data_Aquisicao,
                                             }
                                    }else{
                                            return{
                                                   id:item.id,
                                                   nome:item.nome,
                                                   Data_Aquisicao:Data_Aquisicao,

                                              }        
                                          }
                 }));

        
            
            localStorage.setItem("cad-patrimonio",JSON.stringify(dadosnovos));
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

              <Head title=" Editar  Patrimônio" />

                <section className="form-cadastro">

                    <form onSubmit={salvardados} >

                        <label>Nome</label>
                        
                        <input placeholder="Nome" value={nome} 
                        onChange={e=>setNome(e.target.value)}
                        />

                        <label>Data_Aquisicão</label>

                        <input type="date" value={Data_Aquisicao} 
                        onChange={e=>setData_Aquisicao(e.target.value)}
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