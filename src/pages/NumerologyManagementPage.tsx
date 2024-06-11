import NumerologyEntryItem from "@components/NumerologyItem";
import { CollapseItem } from "@etc/types";
import AdminLayout from "@layouts/AdminLayout";
import { Button, Collapse } from "antd";

const collapseItems: CollapseItem[] = [
    {
        key: "1",
        label: "Số 1",
        children: <NumerologyEntryItem/>
    },
    {
        key: "2",
        label: "Số 2",
        children: <NumerologyEntryItem/>
    }
];

export default function NumerologyManagementPage() {
    return (
        <AdminLayout>
            <Button type="primary">Lưu</Button>
            <Collapse items={collapseItems} className="my-4" />
            <Button type="primary">Lưu</Button>
        </AdminLayout>
    );
}