import { MenuItem } from "./types";

const navbarItems: MenuItem[] = [
    {
        label: "Trang Chủ",
        key: ""
    },
    {
        label: "Thần Số Học",
        key: "numerology",
        theme: "dark",
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

export default navbarItems;