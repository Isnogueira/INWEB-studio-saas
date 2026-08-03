import Alert from "@/components/ui/Alert/Alert";
import Button from "@/components/ui/Button/Button";
import Card from "@/components/ui/Card/Card";
import Input from "@/components/ui/Input/Input";
import PasswordInput from "@/components/ui/PasswordInput/PasswordInput";
import { useAuth } from "@/contexts/UseAuth";
import { loginSchema, type LoginFormData } from "@/schemas/login.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";


export default function Login() {

const [loginError, setLoginError] = useState("");
const [loading, setLoading] = useState(false);

const {

    register,

    handleSubmit,

    formState:{ errors }

} = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema)
});
  const { login } = useAuth();


  async function onSubmit(data: LoginFormData) {
    setLoginError("");

    try {

      setLoading(true);

      await login(data.email, data.senha);

    } catch (error) {

        if (axios.isAxiosError(error)) {

            setLoginError(
                error.response?.data?.message ?? "Erro ao realizar login."
            );

        } else {

            setLoginError("Erro inesperado.");

        }

    } finally {

        setLoading(false);

    } 
  }

  return (
    <>
    <h1>INWEB Studio</h1>
    <h2>Login</h2>
    <div>
      <div>
        {loginError && (
                <Alert
                    variant="error"
                    title="Falha na autenticação"
                >
                    {loginError}
                </Alert>
              )
        }
      </div>
        <Card>
              <form onSubmit={handleSubmit(onSubmit)}>
              <Input
                type="email"
              
                label="E-mail"

                {...register("email")}

                error={errors.email?.message}
              />

              <PasswordInput

                label="Senha"

                {...register("senha")}

                error={errors.senha?.message}

              />
              <Button type="submit" disabled={loading} leftIcon={false} rightIcon={false}>
                {loading ? "Entrando..." : "Entrar"}
              </Button>
            </form>
        </Card>
      </div>
    </>
  );
}

