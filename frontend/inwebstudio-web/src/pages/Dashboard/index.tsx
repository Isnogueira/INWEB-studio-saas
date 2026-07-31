import Input from "@/components/ui/Input";
import PasswordInput from "@/components/ui/PasswordInput";
import TextArea from "@/components/ui/TextArea";
import { useAuth } from "@/contexts/UseAuth";
import {Search } from "lucide-react";


export default function Dashboard() {
  const { isAuthenticated } = useAuth();

  return (
    <div>
      <h1>Dashboard</h1>
      <p>Autenticado: {String(isAuthenticated)}</p>
      <Input label="Buscar" placeholder="Pesquise aqui" helperText="pesquisa" leftIcon={<Search size={18} />} rightIcon={<Search size={18} />} />
      <br></br>
      <PasswordInput label="Senha" placeholder="Senha aqui"></PasswordInput>
      <br />
      <br />
      <TextArea label="Mensagem" placeholder="Mensagem aqui" ></TextArea>
    </div>
  );
}