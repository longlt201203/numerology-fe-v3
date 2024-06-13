import { useNavigate, useSearchParams } from "react-router-dom";
import AuthService from "@services/auth.service";
import { useEffect } from "react";
import { Flex, Layout, Spin, Typography } from "antd";

const { Title } = Typography;

export default function AuthLogin() {
    const authService = AuthService.getInstance();
    const [params] = useSearchParams();
    const navigate = useNavigate();

    useEffect(() => {
        const code = params.get("code");
        if (code) {
            const login = async () => {
                const data = await authService.loginWithGoogle({ code: code });
                localStorage.setItem("accessToken", data.accessToken);
                navigate("/admin/dashboard");
            }

            login();
        }
    }, []);

    return (
        <Layout className="w-screen h-screen">
            <Flex className="w-full h-full" justify="center" align="center" vertical gap="small">
                <Spin size="large"/>
                <Title>Loading...</Title>
            </Flex>
        </Layout>
    );
}