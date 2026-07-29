import { useContext } from "react";
import { AuthContext } from "./AuthContext";

// Hook personalizado para acessar o contexto de autenticação
export function useAuth() {
  const context = useContext(AuthContext);

  if(!context) {
    throw new Error("useAuth deve ser usado dentro de um AuthProvider");
  }

  return context;
}