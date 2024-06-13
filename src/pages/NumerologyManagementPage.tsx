import { DownloadOutlined, UploadOutlined } from "@ant-design/icons";
import NumerologyEntryItem from "@components/NumerologyItem";
import { NumerologyEntryDto } from "@dto/numerology-entry.dto";
import { CollapseItem, MenuItem, UploadFileOnChangeHandler } from "@etc/types";
import AdminLayout from "@layouts/AdminLayout";
import NumerologyService from "@services/numerology.service";
import { Button, Collapse, Dropdown, Flex, Space, Typography, Upload, message } from "antd";
import { useEffect, useState } from "react";

const { Title } = Typography;

export default function NumerologyManagementPage() {
    const [messageApi, contextHolder] = message.useMessage();
    const numerologyService = NumerologyService.getInstance();

    const updateNumerologyEntry = (dto: NumerologyEntryDto) => {
        messageApi.open({
            key: `update ${dto.number}`,
            type: "loading",
            content: "Đang cập nhật...",
        });
        numerologyService
            .updateOrCreateNumerologyEntry(dto)
            .then((data) => {
                messageApi.open({
                    key: `update ${dto.number}`,
                    type: "success",
                    content: "Cập nhật thành công!",
                });
                fetchNumerologyEntries();
            })
            .catch((err) => {
                messageApi.open({
                    key: `update ${dto.number}`,
                    type: "error",
                    content: "Cập nhật thất bại!",
                });
                console.log(err);
            });
    }

    const [collapseItems, setCollapseItems] = useState<CollapseItem[]>(Array.from({ length: 9 }, (_, index) => ({
        key: (index + 1),
        label: `Số ${index + 1}`,
        children: <NumerologyEntryItem data={{ number: index + 1, psychicDescription: "", destinyDescription: "", nameDescription: "", yearDescription: "" }} onSubmit={updateNumerologyEntry} />
    })));

    const exportMenuItems: MenuItem[] = [
        {
            key: "exportExcel",
            label: "Excel"
        },
        {
            key: "exportJSON",
            label: <a href={numerologyService.getExportEntriesJSONLink()} target="_blank">JSON</a>
        }
    ];

    const fetchNumerologyEntries = async () => {
        const data = await numerologyService.getMany();
        for (const item of data) {
            const index = collapseItems.findIndex(e => item.number == e.key);
            collapseItems[index] = {
                key: (index + 1),
                label: `Số ${index + 1}`,
                children: <NumerologyEntryItem data={item} onSubmit={updateNumerologyEntry} />
            }
        }
        setCollapseItems(collapseItems);
    }

    useEffect(() => {
        fetchNumerologyEntries();
    }, []);

    const handleImportEntries: UploadFileOnChangeHandler = (info) => {
        if (info.file.status == "done") {
            messageApi.success("Cập nhật thành công!");
        }
    }

    return (
        <AdminLayout>
            {contextHolder}
            <Title>Thông tin Thần Số Học</Title>
            <Space>
                <Upload
                    action={numerologyService.getImportEntriesLink()}
                    accept="application/json"
                    maxCount={1}
                    onChange={handleImportEntries}
                    showUploadList={false}>
                    <Button type="primary" icon={<UploadOutlined />}>Nạp dữ liệu</Button>
                </Upload>
                <Dropdown menu={{ items: exportMenuItems }}>
                    <Button icon={<DownloadOutlined />}>Xuất Dữ liệu</Button>
                </Dropdown>
            </Space>
            <Collapse items={collapseItems} className="mt-4" />
        </AdminLayout>
    );
}