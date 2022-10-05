import {FiUser, FiTruck, FiArchive, FiHome} from "react-icons/fi"

export default function Menu(){
    return(
        <div className="menu">

            <p>Menu</p>
            <a href="/listausuarios"><FiUser/>Usuários</a>
            <a href="/listaempresas"><FiTruck/>Empresas</a>
            <a href="/listapatrimonio"><FiArchive/>Patrimônio</a>
            <a href="/listasetor"><FiHome/>Setor</a>
            <a href="/listalotacao"><FiHome/>Lotação</a>

        </div>
    )
}