import { ConfigProvider } from "antd";
import { Outlet } from "react-router-dom";

export default function RootLayout() {
    return (
        <ConfigProvider theme={{
            token: {
                colorPrimary: "#0F6292",
                // colorPrimaryBg: "#E1AFD1",
                fontFamily: "Merriweather, serif"
            }
        }}>
            <Outlet />
        </ConfigProvider>
    );
}