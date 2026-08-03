import NavItem from "./NavItem";
import { useAuth } from "@/contexts/UseAuth";

export default function SideBar() {
    
    const { logout } = useAuth();

  return <div>
            <nav>
                <h2>INWEB Studio</h2>
                <ul>
                    <NavItem name={"Dashboard"} url={"/"} />
                    <NavItem name={"Usuários"} url={"/users"} />
                    <NavItem name={"Clientes"} url={"/clients"} />
                    <NavItem name={"Projetos"} url={"/projects"} />
                    <NavItem name={"Configurações"} url={"/settings"} />
                    <li>
                        <button onClick={logout}>Sair</button>
                    </li>
                </ul>
            </nav>
        </div>;
}
