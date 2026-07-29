import { useAuth } from "@/contexts/UseAuth";

export default function Header() {
      const { user } = useAuth();
    
  return <div>
            <h2>INWEB Studio</h2>
            <header>
                Bem Vinda, {user?.nome}!
            </header>
            <p>{user?.perfil}</p>
        </div>;
}
