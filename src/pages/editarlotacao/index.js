import React,{useState,useEffect} from 'react';
import Head from "../../componentes/Head";
import Menu from "../../componentes/Menu";
import { useNavigate,useParams } from "react-router-dom";

export default function Editarlotacao(){
    const navigate = useNavigate();
    const {id} = useParams();
    const [datalotacao,setDatalotacao] = useState();
    const [idusu,setIdusu] = useState("");
    const [idemp,setEmp] = useState("");
    const [idset,setSet] = useState("");
    const [idpat,setPat] = useState("");
    const [msg,setMsg]=useState([]);
    const [usuarios,setUsuarios]=useState([]);
    const [empresa,setEmpresa]=useState([]);
    const [setor,setSetor]=useState([]);
    const [patrimonio,setPatrimonio]=useState([]);

        useEffect(()=>{

            mostrardados();

        },[])
    
        function mostrardados(){
            let lista =JSON.parse(localStorage.getItem("cad-lotacao")||"[]");
            let lot = lista.filter(item=>item.id==id);
            setIdusu(lot[0].idusu);
            setEmp(lot[0].idemp);
            setPat(lot[0].idpat);
            setSet(lot[0].idset);
            setDatalotacao(lot[0].datalotacao);
            setUsuarios(JSON.parse(localStorage.getItem("cad-usuarios")||"[]"));
            setEmpresa(JSON.parse(localStorage.getItem("cad-empresas")||"[]"));
            setPatrimonio(JSON.parse(localStorage.getItem("cad-patrimonio")||"[]"));
            setSetor(JSON.parse(localStorage.getItem("cad-setor")||"[]"));
            
        }

  

        function salvardados(e){
            e.preventDefault();
            let i=0;
            let errorMsg=[];
    
            
            if(idemp.length!==0 && idpat.length!==0 && idset.length!==0 && idusu.length!==0)
            {
    
                setMsg("");
                let lista = JSON.parse(localStorage.getItem("cad-lotacao")||"[]");
                lista.push(
                    {
                      id:id,
                      idusu:idusu,
                      idset:idset,
                      idpat:idpat,
                      idemp:idemp,
                      datalotacao:datalotacao
                    }
                )
                localStorage.setItem("cad-lotacao",JSON.stringify(lista));
                alert("Dados Salvos com Sucesso!");
                navigate("/listalotacao");
            }else{
                setMsg("Verifique todos os campos!!!!!!");
            }
            
        }
     return(
    <div className="dashboard-container">
        <Menu />
        <div className="principal">
                <Head title="Editar Usuário" />
                <section className="form-cadastro">
                    <form onSubmit={salvardados} >
                    <label>Usuário</label>
                        <select
                        value={idusu}
                        onChange={(e) => setIdusu(e.target.value)}
                        >
                        {
                        usuarios.map((usu)=>{
                              return(
                                <option value={usu.id}> {usu.nome} </option>
                              )
                              })
                        }
                        </select>
    
                        <label>Empresa</label>
                        <select
                        value={idemp}
                        onChange={(e) => setEmp(e.target.value)}
                        >
                        {
                        empresa.map((emp)=>{
                              return(
                                <option value={emp.id}> {emp.nome} </option>
                              )
                              })
                        }
                        </select>  
                        <label>Patrimônio</label>
                        <select
                        value={idpat}
                        onChange={(e) => setPat(e.target.value)}
                        >
                        {
                        patrimonio.map((pat)=>{
                              return(
                                <option value={pat.id}> {pat.nome} </option>
                              )
                              })
                        }
                        </select>  
                        <label>Setor</label>
                        <select
                        value={idset}
                        onChange={(e) => setSet(e.target.value)}
                        >
                        {
                        setor.map((set)=>{
                              return(
                                <option value={set.id}> {set.nome} </option>
                              )
                              })
                        }
                        </select>  
                        <input 
                                type="Date"
                                value={datalotacao}
                                onChange={(e) => setDatalotacao(e.target.value)}
                        />                 
                        <button className="button_save"  type="submit">
                            Salvar
                        </button>
                        <pre>{msg[0]}</pre>
                        <pre>usuario{idusu}</pre>
                        <pre>{idemp}</pre>
                        <pre>{idpat}</pre>
                        <pre>{idset}</pre>
        
        
                    </form>
                </section>
        </div>
    </div>
    
     )   
    }