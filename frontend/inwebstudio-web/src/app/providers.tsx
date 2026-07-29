import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import type { ReactNode } from "react";
import { AuthProvider } from "@/contexts/AuthProvider";

// O QueryClient é o objeto que gerencia o cache, requisições, sincronização e atualizações do React Query.
const queryClient = new QueryClient();

interface ProvidersProps {
  // Children é o conteúdo que será renderizado dentro do componente Providers.
  children: ReactNode;
}

export function Providers({ children }: ProvidersProps) {
  //BrowserRouter é o componente que habilita o roteamento no React, permitindo a navegação entre diferentes páginas da aplicação.

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <AuthProvider>
          {children}
        </AuthProvider>
      </BrowserRouter>
    </QueryClientProvider>
  );
}