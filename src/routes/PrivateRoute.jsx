import { Outlet, Navigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const PrivateRoute = () => {
    const isAuthenticated = useContext(AuthContext).loggedIn;

    if (!isAuthenticated) {
        return <Navigate to={'/login'} replace />
    }

    return <Outlet />;
}

export default PrivateRoute
