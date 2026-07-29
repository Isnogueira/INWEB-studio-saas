import { useAuth } from "@/contexts/UseAuth";

export default function Dashboard() {
  const { isAuthenticated } = useAuth();

  return (
    <div>
      <h1>Dashboard</h1>

      <p>Autenticado: {String(isAuthenticated)}</p>
    </div>
  );
}