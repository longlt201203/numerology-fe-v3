import { ConfigProvider } from "antd";
import { Outlet } from "react-router-dom";

export default function RootLayout() {
    return (
        <ConfigProvider theme={{
            token: {
                colorPrimary: "#AD88C6",
                colorPrimaryBg: "#E1AFD1"
            }
        }}>
            <Outlet />
        </ConfigProvider>
    );
}