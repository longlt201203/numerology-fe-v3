import Navbar from "@components/Navbar";
import { Layout, Typography } from "antd";
import { PropsWithChildren } from "react";

const { Header, Content, Footer } = Layout;
const { Text } = Typography;

export default function MainLayout({ children }: PropsWithChildren) {
    return (
        <Layout className="min-h-screen">
            <Header className="flex items-center">
                <Text className="text-white text-2xl">VnNumer</Text>
                <Navbar />
            </Header>
            <Content className="flex flex-col">
                <Layout className="container bg-white mx-auto p-8 my-auto">
                    {children}
                </Layout>
            </Content>
            <Footer>
                <Layout>
                    <Text className="text-center">&copy; 2024 - Le Thanh Long</Text>
                </Layout>
            </Footer>
        </Layout>
    );
}