import { useAuth } from "@/contexts/UseAuth";


export default function Dashboard() {
  const { isAuthenticated } = useAuth();

  return (
    <div>
      <h1>Dashboard</h1>
      <p>Autenticado: {String(isAuthenticated)}</p>
      {/* <Input label="Buscar" placeholder="Pesquise aqui" helperText="pesquisa" leftIcon={<Search size={18} />} rightIcon={<Search size={18} />} />
      <br></br>
      <PasswordInput label="Senha" placeholder="Senha aqui"></PasswordInput>
      <br />
      <br />
      <TextArea label="Mensagem" placeholder="Mensagem aqui" ></TextArea>
      <br />
      <br />
      <Select
          label="Perfil"
          placeholder="Selecione um perfil"
          options={[
              {
                  label: "Administrador",
                  value: "ADMIN"
              },
              {
                  label: "Cliente",
                  value: "CLIENTE"
              },
              {
                  label: "Colaborador",
                  value: "COLLABORADOR"
              }
          ]}
      /> */}
    </div>
  );
}