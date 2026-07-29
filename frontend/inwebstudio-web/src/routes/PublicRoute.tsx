import { useAuth } from "@/contexts/UseAuth";
import { Navigate, Outlet } from "react-router-dom";

export default function PublicRoute() {

    const { token } = useAuth();

    if (token) {

        return <Navigate to="/" replace />;

    }

    return <Outlet />;
}