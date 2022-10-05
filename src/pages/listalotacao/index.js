import React,{useState,useEffect} from "react"
import Head from "../../componentes/Head"
import Menu from "../../componentes/Menu"
import { FiEdit,FiDelete,FiFilePlus, FiTrash } from "react-icons/fi";
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
import { useNavigate,Link } from "react-router-dom"; 

export default function ListaLotacao(){

        const [dados,setDados]=useState([]);
        const [row,setRow]=useState(0);
        const navigate=useNavigate();
        useEffect(()=>{

            mostrardados();

        },[])

        function editar(id){

            navigate(`/editarlotacao/${id}`)

        }

        function formatardata(dataf){

            var dataInput = dataf;

            let data = new Date(dataInput);
            return  data.toLocaleDateString('pt-BR', {timeZone: 'UTC'});

        }

        function mostrarnomeusuario(id){
            let lista=[];
            let cadastro=[];
            lista.JSON.parse(localStorage.getItem("cad-usuarios")||"[]");
            cadastro=lista.filter(item=>item.id==id);
            return cadastro[0].nome;
        }

        function mostrarnome(id,posicao){

            let lista=[];
            let cadastro=[];
            
            if(posicao==1){
                lista=JSON.parse(localStorage.getItem("cad-usuarios")||"[]");
            }
            if(posicao==2){
                lista=JSON.parse(localStorage.getItem("cad-empresas")||"[]");
            }
            if(posicao==3){
                lista=JSON.parse(localStorage.getItem("cad-patrimonio")||"[]");
            }
            if(posicao==4){
                lista=JSON.parse(localStorage.getItem("cad-setor")||"[]");
            }
            cadastro=lista.filter(item=>item.id===id);
            if(cadastro.length>0){
            return cadastro[0].nome;
            }
           
        }
            
        function limparLotacao(){
            localStorage.removeItem('cad-lotacao');
            alert("Lotacao limpa")
        }

       

        function excluir(id){ 
       
            confirmAlert({
              title: 'Excluir Cadastro',
              message: 'Deseja realmente excluir?',
              buttons: [
                {
                  label: 'Sim',
                  onClick: () => {
                        let dadosnovos = [];
                        dadosnovos = dados.filter(item=>item.id!=id);
                        setDados(dadosnovos);
                        localStorage.setItem('cad-lotacao',JSON.stringify(dadosnovos));
                        setRow(dadosnovos.length);
                  }
                },
                {
                  label: 'Não',
                  onClick: () => alert('Click No')
                }
              ]
            });
          };

        function mostrardados(){

            let lista = JSON.parse(localStorage.getItem("cad-lotacao")||"[]");
            setDados(lista);
            
            setRow(lista.length);
        }

    return(

        <div className="dashboard-container">

            <Menu />

            <div className="principal">

                <Head title = "Lista de Lotação"/>

                <div className="button_new">
                    <a href="/cadastrolotacao">
                        <FiFilePlus
                            size={24}
                            color="green"
                            cursor="pointer"
                        />
                    </a>
                   
                        <FiTrash
                            size={24}
                            color="green"
                            cursor="pointer"
                            onClick={limparLotacao}
                        />
                    
                </div>

                <table>

                    <tr>
                        <th>Id</th>
                        <th>Idusu</th>
                        <th>Idemp</th>
                        <th>IdPat</th>
                        <th>IdSet</th>
                        <th>Data Lotação</th>
                        <th></th>
                        <th></th>
                    </tr>
                    {
                       dados.map((lot)=>{
                           return(
                               <tr key={lot.toString()}>
                                    <td>{lot.id}</td>
                                    <td>{(lot.idusu,1)}</td>
                                    <td>{mostrarnome(lot.idemp,2)}</td>
                                    <td>{mostrarnome(lot.idpat,3)}</td>
                                    <td>{mostrarnome(lot.idset,4)}</td>
                                    <td>{formatardata(lot.datalotacao)}</td>
                                    <td></td>
                                    <td>

                                        <FiEdit 
                                            color="blue"
                                            size={18}
                                            cursor="pointer"
                                            onClick={(e)=>editar(lot.id)}
                                        />

                                    </td>
                                    <td>

                                        <FiTrash
                                            color="red"
                                            size={18}
                                            cursor="pointer"
                                            onClick={(e)=>excluir(lot.id)}
                                        />

                                    </td>
                               </tr>
                           )
                       }) 
                    }
                    <tr>
                        <td colSpan={5} style={{textAlign:"right",fontWeight:"bold"}}>Total</td>
                        <td colSpan={2} style={{fontWeight:"bold"}}>{row}</td>
                    </tr>

                </table>
                

           </div>

        </div>

    )   
}