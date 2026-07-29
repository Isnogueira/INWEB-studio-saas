import { useState } from "react";
import { AuthContext, type Usuario } from "./AuthContext";
import { authService } from "@/services/authService";


// componente provedor de autenticação - fornece o contexto de autenticação para os componentes filhos
export function AuthProvider({ children }: { children: React.ReactNode }) {

    const [user, setUser] = useState<Usuario | null>(() => 
        localStorage.getItem("user")
        ? JSON.parse(localStorage.getItem("user") as string)
        : null
    );

    const [token, setToken] = useState<string | null>(() =>
        localStorage.getItem("token")
    );

   
    // o !! operador de negação dupla (!!) é usado para converter o valor de token em um booleano.
    const isAuthenticated = !!token;

    async function login(email: string, senha: string) {
        const response = await authService.login({
                email, 
                senha 
        });

        setUser({

            id: "",

            nome: response.nome,

            email: response.email,

            perfil: response.perfil

        });

        setToken(response.token);

        localStorage.setItem("token", response.token);
        
        localStorage.setItem(

            "user",

            JSON.stringify({

                nome: response.nome,

                email: response.email,

                perfil: response.perfil

            })

        );
    }

    function logout() {
        setUser(null);
        setToken(null);

        localStorage.removeItem("token");
        localStorage.removeItem("user");
    }

    return (
        <AuthContext.Provider
            value={{
                user,
                token,
                isAuthenticated,
                login,
                logout
            }}
        >
            {children}
        </AuthContext.Provider>
    );
}
