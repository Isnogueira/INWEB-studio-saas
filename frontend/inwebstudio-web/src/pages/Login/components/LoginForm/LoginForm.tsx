import Alert from "@/components/ui/Alert";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card/Card";
import Input from "@/components/ui/Input";
import PasswordInput from "@/components/ui/PasswordInput";
import { useAuth } from "@/contexts/UseAuth";
import {loginSchema, type LoginFormData } from "@/schemas/login.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import styles from "./LoginForm.module.css";
import { LockKeyholeIcon, Mail } from "lucide-react";
import GoogleIcon from "@/assets/images/google.svg?react";
import Checkbox from "@/components/ui/Checkbox";

export default function LoginForm() {

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
        <div className={styles.loginFormContainer}>
            <Card className={styles.loginForm}>

                <h2>Seja bem-vindo(a)!</h2>
                <p>Faça login para continuar</p>

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
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Input
                        type="email"
                        label="E-mail"
                        placeholder="seu@email.com"
                        fullWidth
                        leftIcon={<Mail size={20} />}
                        {...register("email")}
                        error={errors.email?.message}
                    />

                    <PasswordInput

                        label="Senha"
                        {...register("senha")}
                        placeholder="sua senha"
                        leftIcon={<LockKeyholeIcon size={20} />}
                        fullWidth
                        error={errors.senha?.message}

                    />
                   <div className={styles.loginFormOptions}>

                        <Checkbox label="Lembrar de mim" />
            
                        <a className={styles.loginForgotPassword}>
                            Esqueci minha senha
                        </a>

                    </div>

                    <div className={styles.loginFormButtonEntrar}>
                        <Button type="submit"
                            variant="accent"
                            size="md"
                            fullWidth={true}
                            disabled={loading} 
                        >
                            {loading ? "Entrando..." : "Entrar"}
                        </Button>
                    </div>
                    <div className={styles.loginFormDivider}>
                        <span>ou</span>
                    </div>
                    <div className={styles.loginFormButtonGoogle}>
                        <Button 
                            type="submit" 
                            variant="secondary"
                            size="md"
                            fullWidth={true}
                            disabled={loading}
                            leftIcon={<GoogleIcon />}
                        >
                            Entrar com o Google
                    </Button>
                    </div>
                </form>
                <p>Não tem conta? <a>Cadastre-se aqui</a></p>
            </Card>
        </div>
     </>
    );
}