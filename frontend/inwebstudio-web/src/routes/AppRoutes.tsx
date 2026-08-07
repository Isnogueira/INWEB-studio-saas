import { Routes, Route } from "react-router-dom";

import Login from "@/pages/Login/Login";
import Dashboard from "@/pages/Dashboard";
import NotFound from "@/pages/NotFound";

import { AuthLayout } from "@/layouts/AuthLayout";
import AppLayout from "@/layouts/AppLayout";
import Usuarios from "@/pages/Usuarios";
import Clientes from "@/pages/Clientes";
import Projetos from "@/pages/Projetos";
import Configuracoes from "@/pages/Configuracoes";
import PublicRoute from "./PublicRoute";
import PrivateRoute from "./PrivateRoute";

export function AppRoutes() {
  return (
    // Routes é o componente que vai englobar todas as rotas da aplicação
    <Routes>
      //Route é o componente que vai definir cada rota da aplicação
      //Rotas públicas 
      <Route element={<PublicRoute />} >
          <Route element={<AuthLayout/>}>
              <Route 
                path="/login"
                element={<Login />} 
              />
          </Route>
      </Route>
      //Rotas privadas 
      <Route element={<PrivateRoute />} >
          <Route element={<AppLayout/>}>
            <Route 
                path="/"
                element={<Dashboard />} 
              />
              <Route 
                path="/users"
                element={<Usuarios />} 
              />
              <Route 
                path="/clients"
                element={<Clientes />} 
              />
              <Route 
                path="/projects"
                element={<Projetos />} 
              />
              <Route 
                path="/settings"
                element={<Configuracoes />} 
              />
          </Route>
      </Route>

      // path="*" captura todas as rotas que não foram definidas
        // e redireciona para a página de NotFound
      <Route path="*" element={<NotFound />} />

    </Routes>
    
  );
}