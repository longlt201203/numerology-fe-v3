import { BookOutlined, DashboardOutlined } from "@ant-design/icons";
import { MenuItem } from "@etc/types";
import { Layout, Menu, MenuProps, Typography, theme } from "antd";
import { PropsWithChildren, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const { Sider, Header, Content, Footer } = Layout;
const { Text } = Typography;

const menuItems: MenuItem[] = [
    {
        label: "Quản lý chung",
        key: "dashboard",
        icon: <DashboardOutlined />
    },
    {
        label: "Thần số học",
        key: "numerology",
        icon: <BookOutlined />
    }
];

export default function AdminLayout({ children }: PropsWithChildren) {
    const { token: { colorBgContainer, borderRadiusLG } } = theme.useToken();
    const location = useLocation();
    const [currentKeys, setCurrentKeys] = useState<MenuProps["selectedKeys"]>();
    const navigate = useNavigate();

    useEffect(() => {
        const keys = location.pathname.split("/");
        keys.shift();
        setCurrentKeys(keys);
    }, [location]);

    const onClick: MenuProps["onClick"] = (e) => {
        navigate("/admin/" + e.key);
    }

    return (
        <Layout className="min-h-screen">
            <Sider collapsible>
                <Menu theme="dark" items={menuItems} selectedKeys={currentKeys} onClick={onClick} />
            </Sider>
            <Layout>
                <Header style={{ backgroundColor: colorBgContainer }}></Header>
                <Content className="my-8">
                    <div style={{ backgroundColor: colorBgContainer, borderRadius: borderRadiusLG }} className="min-h-full mx-8 p-4">
                        {children}
                    </div>
                </Content>
                <Footer>
                    <Layout>
                        <Text className="text-center">&copy; 2024 - Le Thanh Long</Text>
                    </Layout>
                </Footer>
            </Layout>
        </Layout>
    );
}