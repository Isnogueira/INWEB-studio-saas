import { api } from "@/config/axios";
import type { Perfil } from "@/types/perfil";
import type { AxiosResponse } from "axios";

export interface LoginRequest {
  email: string;
  senha: string;
}

export interface LoginResponse {
  token: string;
  nome: string;
  email: string;
  perfil: Perfil;
}

class AuthService {

    async login(data: LoginRequest): Promise<LoginResponse> {

        const response: AxiosResponse<LoginResponse> =
        await api.post("/auth/login", data);

        return response.data;
    }
    

}

export const authService = new AuthService();
