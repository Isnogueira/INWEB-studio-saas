import { useAuth } from "@/contexts/UseAuth";
import { useState } from "react";

export default function Login() {

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const { login } = useAuth();

  async function handleLogin() {
    await login( email, senha);

  }

  return (
    <>
    <h1>INWEB Studio</h1>
    <h2>Login</h2>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <br />
      <br />
      <input
        type="password"
        value={senha}
        onChange={(e) => setSenha(e.target.value)}
      />
      <br />
      <br />
      <button onClick={handleLogin}>
        Entrar
      </button>
    </>
  );
}