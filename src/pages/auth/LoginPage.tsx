import { DashboardOutlined, GoogleOutlined, LockOutlined, UserOutlined } from "@ant-design/icons";
import AuthService from "@services/auth.service";
import { Button, Divider, Form, Input, Layout, Typography } from "antd";

const { Title } = Typography;
const { Content } = Layout;

export default function LoginPage() {
    const authService = AuthService.getInstance();

    const handleLoginGoogle = async () => {
        const uri = await authService.getAuthUri({ provider: "google", callbackMode: "login" });
        window.location.href = uri;
    }

    return (
        <Layout className="w-screen h-screen">
            <Content className="flex flex-col justify-center items-center">
                <Title>VnNumer Admin <DashboardOutlined /></Title>
                <Form
                    labelCol={{ span: 4 }}
                    className="bg-white w-full sm:w-3/4 md:w-2/4 lg:w-1/4 p-8 rounded-lg">
                    <Form.Item>
                        <Input prefix={<UserOutlined />} placeholder="Email" />
                    </Form.Item>
                    <Form.Item>
                        <Input.Password prefix={<LockOutlined />} placeholder="Password" />
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit" className="w-full">Đăng Nhập</Button>
                    </Form.Item>
                    <Divider>Hoặc</Divider>
                    <Form.Item>
                        <Button icon={<GoogleOutlined />} className="w-full" onClick={handleLoginGoogle}>Đăng nhập với Google</Button>
                    </Form.Item>
                </Form>
            </Content>
        </Layout>
    )
}