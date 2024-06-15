import { CloseOutlined, MenuOutlined } from "@ant-design/icons";
import { MenuItem } from "@etc/types";
import { Button, ConfigProvider, Flex, FloatButton, Layout, Menu, MenuProps, Typography } from "antd";
import { PropsWithChildren, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const { Header, Content, Footer } = Layout;
const { Text } = Typography;

const items: MenuItem[] = [
    {
        label: "Trang Chủ",
        key: ""
    },
    {
        label: "Thần Số Học",
        key: "numerology",
        children: [
            {
                label: "Xem Thần Số Học",
                key: "reading"
            },
            {
                label: "Tính năm thần số",
                key: "year-calculating"
            },
        ]
    },
    {
        label: "Tìm Hiểu",
        key: "about",
    }
];

function HorizontalNavbar() {
    const location = useLocation();
    const [currentKeys, setCurrentKeys] = useState<MenuProps["selectedKeys"]>();
    const navigate = useNavigate();

    useEffect(() => {
        const keys = location.pathname.split("/");
        keys.shift();
        setCurrentKeys(keys);
    }, [location]);

    const onClick: MenuProps["onClick"] = (e) => {
        navigate("/" + e.key);
    }

    return (
        <Menu mode="horizontal" onClick={onClick} selectedKeys={currentKeys} items={items} theme="dark" className="hidden md:flex flex-1 justify-end" />
    );
}

function VericalNavbar() {
    const location = useLocation();
    const [currentKeys, setCurrentKeys] = useState<MenuProps["selectedKeys"]>();
    const navigate = useNavigate();

    useEffect(() => {
        const keys = location.pathname.split("/");
        keys.shift();
        setCurrentKeys(keys);
    }, [location]);

    const onClick: MenuProps["onClick"] = (e) => {
        navigate("/" + e.key);
    }

    return (
        <Menu mode="inline" onClick={onClick} selectedKeys={currentKeys} items={items} theme="dark" className="block md:hidden" />
    );
}

export default function MainLayout({ children }: PropsWithChildren) {
    const [verticalMenuOpen, setVerticalMenuOpen] = useState(false);

    return (
        <Layout className="min-h-screen">
            <Header className="flex flex-col justify-center items-stretch sticky top-0 z-10 h-fit py-4 px-2">
                <Flex justify="center" align="center" className="w-full">
                    <Text className="text-white text-2xl">VnNumer</Text>
                    <HorizontalNavbar />
                    <div className="flex md:hidden flex-1 justify-end">
                        <ConfigProvider theme={{
                            token: {
                                colorText: "white"
                            },
                            components: {
                                Button: {

                                }
                            }
                        }}>
                            <Button type="text" icon={verticalMenuOpen ? <CloseOutlined /> : <MenuOutlined />} onClick={() => setVerticalMenuOpen(!verticalMenuOpen)}></Button>
                        </ConfigProvider>
                    </div>
                </Flex>
                {verticalMenuOpen && <VericalNavbar />}
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
            <FloatButton.BackTop />
        </Layout>
    );
}