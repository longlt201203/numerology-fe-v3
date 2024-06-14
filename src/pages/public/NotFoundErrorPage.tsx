import { Button, Result } from "antd";
import { useNavigate } from "react-router-dom";

export default function NotFoundErrorPage() {
    const navigate = useNavigate();

    return (
        <Result
            status="404"
            title="404"
            subTitle="Không tìm thấy trang mà bạn muốn tới"
            extra={<Button type="primary" onClick={() => {
                if (window.history && window.history.length > 1) {
                    window.history.back();
                } else {
                    navigate("/");
                }
            }}>Quay Lại</Button>}/>
    );
}