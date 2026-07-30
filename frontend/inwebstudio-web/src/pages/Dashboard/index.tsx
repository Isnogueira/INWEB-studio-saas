import Input from "@/components/ui/Input";
import PasswordInput from "@/components/ui/PasswordInput";
import { useAuth } from "@/contexts/UseAuth";
import {Eye, Search } from "lucide-react";


export default function Dashboard() {
  const { isAuthenticated } = useAuth();

  return (
    <div>
      <h1>Dashboard</h1>
      <p>Autenticado: {String(isAuthenticated)}</p>
      <Input label="Buscar" placeholder="Pesquise aqui" helperText="pesquisa" leftIcon={<Search size={18} />} rightIcon={<Search size={18} />} />
      <br></br>
      <PasswordInput label="Senha"></PasswordInput>
    </div>
  );
}