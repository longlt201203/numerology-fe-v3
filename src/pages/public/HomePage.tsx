import { CloseOutlined, MenuOutlined } from "@ant-design/icons";
import navbarItems from "@etc/navbar-items";
import { Button, ConfigProvider, Layout, Menu, MenuProps, Space, Typography } from "antd";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const { Header, Content, Footer } = Layout;
const { Text, Title } = Typography;

export default function HomePage() {
    const location = useLocation();
    const [currentKeys, setCurrentKeys] = useState<MenuProps["selectedKeys"]>();
    const navigate = useNavigate();
    const [verticalMenuOpen, setVerticalMenuOpen] = useState(false);

    useEffect(() => {
        const keys = location.pathname.split("/");
        keys.shift();
        setCurrentKeys(keys);
    }, [location]);

    const onClick: MenuProps["onClick"] = (e) => {
        navigate("/" + e.key);
    }

    return (
        <ConfigProvider theme={{
            token: {
                colorTextHeading: "white",
                fontSizeHeading1: 56,
            },
            components: {
                Menu: {
                    itemColor: "white",
                    itemHoverColor: "white",
                    horizontalItemSelectedColor: "white"
                }
            }
        }}>
            <Layout className="w-screen h-screen">
                <video autoPlay muted loop className="object-cover absolute right-0 bottom-0 min-w-full min-h-full bg-[url(/home-page.jpg)] bg-cover bg-center bg-fixed brightness-50 blur-0">
                    <source src="/home-page.mp4" type="video/mp4" />
                </video>
                <Header className="bg-transparent h-fit p-3 sm:p-0">
                    <Menu
                        mode="horizontal"
                        items={navbarItems}
                        className="bg-transparent flex-1 justify-center hidden sm:flex"
                        onClick={onClick}
                        selectedKeys={currentKeys} />

                    <div className="w-full flex justify-end items-center sm:hidden">
                        <div className=" absolute top-0 p-3 left-0 w-full">
                            <Title className="text-center" level={4} style={{ marginBottom: 0 }}>VnNumer</Title>
                        </div>
                        <ConfigProvider theme={{
                            token: {
                                colorText: "white"
                            },
                        }}>
                            <Button type="text" icon={verticalMenuOpen ? <CloseOutlined /> : <MenuOutlined />} onClick={() => setVerticalMenuOpen(!verticalMenuOpen)}></Button>
                        </ConfigProvider>
                    </div>

                    {verticalMenuOpen && (
                        <Menu
                            mode="inline"
                            items={navbarItems}
                            onClick={onClick}
                            selectedKeys={currentKeys}
                            theme="dark"
                            className="sm:hidden" />
                    )}
                </Header>
                <Content className="z-10 flex flex-col justify-center items-center">
                    <div className="flex flex-col justify-center items-center w-full gap-3 mb-16">
                        <Text className="text-white text-center">Khám phá con số của bạn.</Text>
                        <Title className="text-white font-bold text-center hidden sm:block" style={{ marginTop: 0, marginBottom: 0 }}>VnNumer</Title>
                        <ConfigProvider theme={{}}>
                            <Button type="primary" size="large" onClick={() => navigate("/reading")} className="mb-10 sm:mb-0 px-8 h-14 text-xl">Xem ngay</Button>
                        </ConfigProvider>
                    </div>
                </Content>
                <Footer className="bg-transparent z-10">
                    <Text className="text-white text-center block">Copyright &copy; 2024 - Lê Thành Long</Text>
                </Footer>
            </Layout>
        </ConfigProvider>
    );
}