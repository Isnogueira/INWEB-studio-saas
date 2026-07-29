import axios from "axios";

// axios create permite configurar uma instância do axios com configurações padrão, como baseURL, timeout e headers. Isso facilita o gerenciamento de requisições HTTP em toda a aplicação, garantindo consistência e evitando repetição de código.

export const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    headers: {
        "Content-Type": "application/json",
    },
});