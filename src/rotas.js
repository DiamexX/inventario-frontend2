import React from "react";
import {BrowserRouter,Route,Routes} from "react-router-dom";
import CadastroUsuario from "./pages/cadastroUsuario";
import CadastroSetor from "./pages/cadastrosetor";
import EditarSetor from "./pages/editarsetor";
import ListaSetor from "./pages/listasetor";
import ListaEmpresas from "./pages/listaEmpresas";
import EditarUsuario from "./pages/editarUsuario";
import ListaUsuarios from "./pages/listaUsuarios";
import CadastroPatrimonio from "./pages/cadastropatrimonio";
import ListaPatrimonio from "./pages/listaPatrimonio";
import CadastroEmpresas from "./pages/cadastroempresas";
import EditarEmpresa from "./pages/editarEmpresas"
import Dashboard from "./pages/dashboard";
import ListaLotacao from "./pages/listalotacao";
import EditarLotacao from "./pages/editarlotacao";
import CadastroLotacao from "./pages/cadastrolotacao";
import EditarPatrimonio from "./pages/editarPatrimonio";
import Logon from "./pages/logon";



export default function Rotas(){
    return(

<BrowserRouter>
        <Routes>
            <Route path="/"  element={<Logon/>} />
            <Route path="/listausuarios" element={<ListaUsuarios/>} />
            <Route path="/listaempresas" element={<ListaEmpresas/>} />
            <Route path="/listasetor" element={<ListaSetor/>} />
            <Route path="/listapatrimonio" element={<ListaPatrimonio/>} />
            <Route path="/listalotacao" element={<ListaLotacao/>} />
            <Route path="/cadastropatrimonio" element={<CadastroPatrimonio/>} />
            <Route path="/cadastrousuario" element={<CadastroUsuario/>} />
            <Route path="/cadastrolotacao" element={<CadastroLotacao/>} />
            <Route path="/cadastroSetor" element={<CadastroSetor/>} />
            <Route path="/cadastroempresas" element={<CadastroEmpresas/>} />
            <Route path="/editarusuario/:id" element={<EditarUsuario/>} />
            <Route path="/editarempresa/:id" element={<EditarEmpresa/>} />
            <Route path="/editarsetor/:id" element={<EditarSetor/>} />
            <Route path="/editarlotacao/:id" element={<EditarLotacao/>} />
            <Route path="/editarpatrimonio/:id" element={<EditarPatrimonio/>} />
            <Route path="/dashboard" element={<Dashboard/>} />
        </Routes>
</BrowserRouter>

    )
}