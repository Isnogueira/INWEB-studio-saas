import Button from "@/components/ui/Button/Button";
import Input from "@/components/ui/Input/Input";
import PasswordInput from "@/components/ui/PasswordInput/PasswordInput";
import { useAuth } from "@/contexts/UseAuth";
import { loginSchema, type LoginFormData } from "@/schemas/login.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";


export default function Login() {

const {

    register,

    handleSubmit,

    formState:{ errors }

} = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema)
});
  const { login } = useAuth();


  async function onSubmit(data: LoginFormData) {
    await login(data.email, data.senha);
  }

  return (
    <>
    <h1>INWEB Studio</h1>
    <h2>Login</h2>
    <div style={{ width: "50%", padding: "20px", border: "1px solid #ccc", borderRadius: "5px" }}>
      <div style={{ marginBottom: "10px" }}>
        <Input
          type="email"
        
          label="E-mail"

          {...register("email")}

          error={errors.email?.message}
        />
      </div>
      <div style={{ marginBottom: "10px" }}>
        <PasswordInput

          label="Senha"

          {...register("senha")}

          error={errors.senha?.message}

        />
      </div>
      <div style={{ marginBottom: "10px" }}>
        <Button onClick={handleSubmit(onSubmit)} disabled={false} lefticon={false} righticon={false}>
          Entrar
        </Button>
      </div>
    </div>
    
    </>
  );
}