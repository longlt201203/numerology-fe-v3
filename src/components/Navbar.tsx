import { Menu, MenuProps } from "antd";

type MenuItem = Required<MenuProps>["items"][number];

const items: MenuItem[] = [
    {
        label: "Home",
        key: "home"
    },
    {
        label: "Numerology",
        key: "numerology",
        children: [
            {
                label: "Numerology Reading",
                key: "numerologyReading"
            },
            {
                label: "Numerology Comparing",
                key: "numerologyComparing"
            },
            {
                label: "Numerology Year Calculating",
                key: "numerologyYearCalculating"
            },
        ]
    },
    {
        label: "About",
        key: "about"
    }
];

export default function Navbar() {
    return (
        <Menu mode="horizontal" items={items} theme="dark" className="flex-1 justify-end" />
    );
}