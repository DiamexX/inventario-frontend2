import React,{useState,useEffect} from 'react';
import Head from "../../componentes/Head"
import Menu from "../../componentes/Menu"
import { useNavigate, useParams } from "react-router-dom";

export default function CadastroLotacao(){

    const navigate = useNavigate();  
    const [idusu,setIdusu]=useState("");
    const [idemp,setEmp]=useState("");
    const [idset,setSet]=useState("");
    const [idpat,setPat]=useState("");
    const [msg,setMsg]=useState([]);
    const [usuarios,setUsuarios]=useState([]);
    const [empresa,setEmpresa]=useState([]);
    const [setor,setSetor]=useState([]);
    const [patrimonio,setPatrimonio]=useState([]);
    const [datalotacao,setDatalotacao]=useState([]);
 

        useEffect(()=>{

            mostrardados();

        },[])
    
     function mostrardados(){

            let lista =JSON.parse(localStorage.getItem("cad-lotacao")||"[]");
            setUsuarios(JSON.parse(localStorage.getItem("cad-usuarios")||"[]"));
            setEmpresa(JSON.parse(localStorage.getItem("cad-empresas")||"[]"));
            setPatrimonio(JSON.parse(localStorage.getItem("cad-patrimonio")||"[]"));
            setSetor(JSON.parse(localStorage.getItem("cad-setor")||"[]"));
          
    
            
    }    



    function salvardados(e){

        e.preventDefault();

    
       if(idemp.length!==0 && idpat.length!==0 && idset.length!==0 && idusu.length!==0)
        
       {

            setMsg("");

            let lista = JSON.parse(localStorage.getItem("cad-lotacao")||"[]");
            lista.push(

                {
                    id:Date.now().toString(36)+Math.floor(Math.pow(10,12)+Math.random()*9*Math.pow(10,12)).toString(36),
                    idusu:idusu,
                    idset:idset,
                    idpat:idpat,
                    idemp:idemp,
                    datalotacao:datalotacao
                    
                   
                }
                

            )
      
           
            localStorage.setItem("cad-lotacao",JSON.stringify(lista));
            alert("Dados salvos com sucesso!");
            navigate("/listalotacao");

       }else{

          alert("Preencha todos os campos!!!")

        }
        
    } 

    return(

                    <div className="dashboard-container">
                             <Menu />

                             <div className="principal">

                                    <Head title=" Cadastro Lotação" />

                                            <section className="form-cadastro">

                                                <form onSubmit={salvardados} >

                                                 <label>Usuário</label>
                        

                                                 <select onChange={(e)=>setIdusu(e.target.value)}>
                                                       <option value=""> </option>
                                                     {
                                                
                                                        usuarios.map((usu)=>{
                                                         return(
                                                                  <option value={usu.id}>{usu.nome}</option>
                                                               )
                                                        })
                                                     }
                            
                                                 </select>

                                                 <label>Empresa</label>
                        

                                                 <select onChange={(e)=>setEmp(e.target.value)}>
                                                    <option value=""> </option>
                                                    {
                                                         empresa.map((emp)=>{
                                                             return(
                                                                      <option value={emp.id}>{emp.nome}</option>
                                                                   )
                                                        })
                                                    }
                            
                                                 </select>

                                                 <label>Setor</label>
                        

                                                     <select onChange={(e)=>setSet(e.target.value)}>
                                                         <option value=""> </option>
                                                             {
                                                                 setor.map((set)=>{
                                                                    return(
                                                                             <option value={set.id}>{set.nome}</option>
                                                                          )
                                                               })
                                                            }
                            
                                                      </select>

                                                      <label>Patrimonio</label>

                                                      <select onChange={(e)=>setPat(e.target.value)}>
                                                           <option value=""> </option>
                                                              {
                                                                  patrimonio.map((pat)=>{
                                                                      return(
                                                                                  <option value={pat.id}>{pat.nome}</option>
                                                                            )
                                                                    })
                                                               }
                            
                                                       </select>

                                                        <input type="Date" 
                                                         value={datalotacao} 
                                                          onChange={(e)=>setDatalotacao(e.target.value)}
                                                        />
                                                        <button className="button_save" type="submit">Salvar</button>
                    
                                                 {/* <p>{msg[0]}</p>
                                                  <pre>{idusu}</pre>
                                                  <pre>{idpat}</pre>
                                                  <pre>{idemp}</pre>
                                                  <pre>{idset}</pre> */}
                     
                       

                                            </form>

                </section>

         </div>

    </div>

 ) 

}