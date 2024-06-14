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
            label: "JSON",
            onClick: () => {
                window.open(numerologyService.getExportEntriesJSONLink(), "_blank");
            }
        }
    ];

    const fetchNumerologyEntries = async () => {
        const data = await numerologyService.getMany();
        setCollapseItems((prev) => {
            for (const item of data) {
                const index = prev.findIndex(e => item.number == e.key);
                prev[index] = {
                    ...prev[index],
                    children: <NumerologyEntryItem data={item} onSubmit={updateNumerologyEntry} />
                }
            }
            return [...prev];
        });
    }

    useEffect(() => {
        fetchNumerologyEntries();
    }, []);

    const handleImportEntries: UploadFileOnChangeHandler = (info) => {
        if (info.file.status == "uploading") {
            messageApi.open({
                key: "importEntries",
                content: "Đang tải file lên...",
                type: "loading"
            });
        }
        if (info.file.status == "done") {
            messageApi.open({
                key: "importEntries",
                content: "Cập nhật thành công!",
                type: "success"
            });
            fetchNumerologyEntries();
            // setCollapseItems((prev) => {
            //     prev[0] = {
            //         ...prev[0],
            //         children: "asjkdhasjkdhjkasjkdashjkd"
            //     }
            //     return [...prev];
            // })
        }
        if (info.file.status == "error") {
            messageApi.open({
                key: "importEntries",
                content: "Cập nhật thất bại! Kiểm tra lại định dạng file!",
                type: "error"
            })
        }
    }

    const accessToken = localStorage.getItem("accessToken");

    return (
        <AdminLayout>
            {contextHolder}
            <Title>Thông tin Thần Số Học</Title>
            <Space>
                <Upload
                    action={numerologyService.getImportEntriesLink()}
                    headers={{
                        Authorization: `Bearer ${accessToken}`
                    }}
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