import React,{useState,useEffect} from "react"
import Head from "../../componentes/Head"
import Menu from "../../componentes/Menu"
import { FiEdit,FiDelete,FiFilePlus, FiTrash } from "react-icons/fi";
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
import { useNavigate,Link } from "react-router-dom"; 

export default function ListaEmpresas(){

        const [dados,setDados]=useState([]);
        const [row,setRow]=useState(0);
        const navigate=useNavigate();
        useEffect(()=>{

            mostrardados();

        },[])

        function editar(id){

            navigate(`/editarempresa/${id}`)

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
                        localStorage.setItem('cad-empresas',JSON.stringify(dadosnovos));
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

            let lista = JSON.parse(localStorage.getItem("cad-empresas")||"[]");
            setDados(lista);
            setRow(lista.length);
        }

    return(

        <div className="dashboard-container">

            <Menu />

            <div className="principal">

                <Head title = "Lista de Empresas"/>

                <div className="button_new">
                    <a href="/cadastroempresas">
                        <FiFilePlus
                            size={24}
                            color="green"
                            cursor="pointer"
                        />
                    </a>
                </div>

                <table>

                    <tr>
                        <th>Id</th>
                        <th>Nome</th>
                        <th>Responsavel</th>
                        <th>Contato</th>
                        <th></th>
                        <th></th>
                        <th></th>
                    </tr>
                    {
                       dados.map((usu)=>{
                           return(
                               <tr key={usu.toString()}>
                                    <td>{usu.id}</td>
                                    <td>{usu.nome}</td>
                                    <td>{usu.responsavel}</td>
                                    <td>{usu.contato}</td>
                                    <td>

                                        <FiEdit 
                                            color="blue"
                                            size={18}
                                            cursor="pointer"
                                            onClick={(e)=>editar(usu.id)}
                                        />

                                    </td>
                                    <td>

                                        <FiTrash
                                            color="red"
                                            size={18}
                                            cursor="pointer"
                                            onClick={(e)=>excluir(usu.id)}
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