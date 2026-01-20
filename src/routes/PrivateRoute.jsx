import { Outlet, Navigate } from "react-router-dom";

const PrivateRoute = () => {
    const isAuthenticated = true;

    if (!isAuthenticated) {
        return <Navigate to={'/login'} replace />
    }

    return <Outlet />;
}

export default PrivateRoute
