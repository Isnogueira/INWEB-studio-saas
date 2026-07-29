import NavItem from "./NavItem";

export default function SideBar() {
    
  return <div>
            <nav>
                <h2>INWEB Studio</h2>
                <ul>
                    <NavItem name={"Dashboard"} url={"/"} />
                    <NavItem name={"Usuários"} url={"/users"} />
                    <NavItem name={"Clientes"} url={"/clients"} />
                    <NavItem name={"Projetos"} url={"/projects"} />
                    <NavItem name={"Configurações"} url={"/settings"} />
                </ul>
            </nav>
        </div>;
}
