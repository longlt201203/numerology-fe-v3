import NumerologyEntryItem from "@components/NumerologyItem";
import { NumerologyEntryDto } from "@dto/numerology-entry.dto";
import { CollapseItem } from "@etc/types";
import AdminLayout from "@layouts/AdminLayout";
import NumerologyService from "@services/numerology.service";
import { Collapse, Typography, message } from "antd";
import { useEffect, useState } from "react";

const { Title } = Typography;

export default function NumerologyManagementPage() {
    const [messageApi, contextHolder] = message.useMessage();
    const numerologyService = NumerologyService.getInstance();

    const updateNumerologyEntry = (dto: NumerologyEntryDto) => {
        messageApi.open({
            key: `update ${dto.number}`,
            type: "loading",
            content: "Updating...",
        });
        numerologyService
            .updateOrCreateNumerologyEntry(dto)
            .then((data) => {
                messageApi.open({
                    key: `update ${dto.number}`,
                    type: "success",
                    content: "Update successfully!",
                });
                fetchNumerologyEntries();
            })
            .catch((err) => {
                messageApi.open({
                    key: `update ${dto.number}`,
                    type: "error",
                    content: "Update failed!",
                });
                console.log(err);
            });
    }

    const [collapseItems, setCollapseItems] = useState<CollapseItem[]>(Array.from({ length: 9 }, (_, index) => ({
        key: (index+1),
        label: `Số ${index+1}`,
        children: <NumerologyEntryItem data={{ number: index+1, psychicDescription: "", destinyDescription: "", nameDescription: "" }} onSubmit={updateNumerologyEntry} />
    })));

    const fetchNumerologyEntries = async () => {
        const data = await numerologyService.getMany();
        for (const item of data) {
            const index = collapseItems.findIndex(e => item.number == e.key);
            collapseItems[index] = {
                key: (index+1),
                label: `Số ${index+1}`,
                children: <NumerologyEntryItem data={item} onSubmit={updateNumerologyEntry} />
            }
        }
        setCollapseItems(collapseItems);
    }

    useEffect(() => {
        fetchNumerologyEntries();
    }, []);

    return (
        <AdminLayout>
            {contextHolder}
            <Title>Thông tin Thần Số Học</Title>
            <Collapse items={collapseItems} />
        </AdminLayout>
    );
}