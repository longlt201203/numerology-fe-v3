import { Button, Result } from "antd";

export default function UnauthorizedErrorPage() {
    return (
        <Result
            status="403"
            title="Dừng Lại!"
            subTitle="Tài khoản của bạn không được phép đăng nhập"
            extra={<Button type="primary" onClick={() => { window.location.href = "/"; }}>Quay Lại</Button>} />
    );

}