import type { Perfil } from "@/types/perfil";
import { createContext } from "react";

//tipo  usuário
export interface Usuario{
    id: string;
    nome: string;
    email: string;
    perfil: Perfil;
}

//tipo do contexto de autenticação - representa tudo que o contexto de autenticação vai fornecer para os componentes que o utilizarem
interface AuthContextData {
  user: Usuario | null;
  token: string | null;
  isAuthenticated: boolean;

  login: (email: string, senha: string) => Promise<void>;
  logout: () => void;
}
// contexto de autenticação - cria o contexto de autenticação com o tipo AuthContextData
export const AuthContext = createContext<AuthContextData | undefined>(undefined)

