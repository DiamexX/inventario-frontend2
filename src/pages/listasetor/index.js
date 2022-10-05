import React,{useState,useEffect} from "react"
import Head from "../../componentes/Head"
import Menu from "../../componentes/Menu"
import { FiEdit,FiDelete,FiFilePlus, FiTrash } from "react-icons/fi";
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
import { useNavigate,Link } from "react-router-dom"; 

export default function ListaSetor(){

        const [dados,setDados]=useState([]);
        const [row,setRow]=useState(0);
        const navigate=useNavigate();
        useEffect(()=>{

            mostrardados();

        },[])

        function editar(id){

            navigate(`/editarsetor/${id}`)

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
                        localStorage.setItem('cad-setor',JSON.stringify(dadosnovos));
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

            let lista = JSON.parse(localStorage.getItem("cad-setor")||"[]");
            setDados(lista);
            setRow(lista.length);
        }

    return(

        <div className="dashboard-container">

            <Menu />

            <div className="principal">

                <Head title = "Lista de Setores"/>

                <div className="button_new">
                    <a href="/cadastrosetor">
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