import Input from "@/components/ui/Input";
import { useAuth } from "@/contexts/UseAuth";
import {Eye, Search } from "lucide-react";


export default function Dashboard() {
  const { isAuthenticated } = useAuth();

  return (
    <div>
      <h1>Dashboard</h1>
      <p>Autenticado: {String(isAuthenticated)}</p>
      <Input label="Buscar" placeholder="Pesquise aqui" helperText="pesquisa" leftIcon={<Search size={18} />} rightIcon={<Eye size={18} />} />
    </div>
  );
}