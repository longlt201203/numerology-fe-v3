import { MenuItem } from "@etc/types";
import { Menu, MenuProps } from "antd";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

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
                label: "So Sánh Thần Số Học",
                key: "comparing"
            },
            {
                label: "Thần Số Học Theo Năm",
                key: "year-calculating"
            },
        ]
    },
    {
        label: "Tìm Hiểu",
        key: "about"
    }
];

export default function Navbar() {
    const location = useLocation();
    const [currentKeys, setCurrentKeys] = useState<MenuProps["selectedKeys"]>();
    const navigate = useNavigate();

    useEffect(() => {
        const keys = location.pathname.split("/");
        keys.shift();
        setCurrentKeys(keys);
    }, [location])

    const onClick: MenuProps["onClick"] = (e) => {
        navigate("/" + e.key);
    }

    return (
        <Menu mode="horizontal" onClick={onClick} selectedKeys={currentKeys} items={items} theme="dark" className="flex-1 justify-end" />
    );
}