import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import AuthService from "../services/auth.service";
// import { AxiosError } from "axios";

// interface AuthRouteProps {
//     // role: string;
// }

export default function AuthRoute() {
    const authService = AuthService.getInstance();
    const navigate = useNavigate();

    useEffect(() => {
        const validate = async () => {
            let ok = true;

            const accessToken = localStorage.getItem("accessToken");
            if (accessToken) {
                try {
                    await authService.getProfile();
                } catch (err) {
                    // if (err instanceof AxiosError) {

                    // }
                    ok = false;
                }
            } else {
                ok = false;
            }

            if (!ok) navigate("/auth/login");
        }

        validate();
    }, []);

    return (
        <Outlet />
    );
}