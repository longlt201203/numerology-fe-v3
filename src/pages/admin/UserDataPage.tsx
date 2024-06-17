import NumerologyReadingRecordResponseDto from "@dto/numerology-reading-record-response.dto";
import AdminLayout from "@layouts/AdminLayout";
import NumerologyService from "@services/numerology.service";
import { Button, Flex, Space, Table, TableProps, message } from "antd";
import dayjs from "dayjs";
import { useEffect, useState } from "react";

const columns: TableProps<NumerologyReadingRecordResponseDto>["columns"] = [
    {
        title: "ID",
        key: "id",
        dataIndex: "id",
        render: (id: number) => <>{id}</>
    },
    {
        title: "Tên",
        key: "firstName",
        dataIndex: "firstName",
        render: (firstName: string) => <>{firstName}</>
    },
    {
        title: "Họ và Tên đệm",
        key: "lsName",
        dataIndex: "lsName",
        render: (lsName: string) => <>{lsName}</>
    },
    {
        title: "Ngày sinh",
        key: "dob",
        dataIndex: "dob",
        render: (dob: string) => <>{dayjs(dob).format("DD/MM/YYYY")}</>
    },
]

export default function UserDataPage() {
    const numerologyService = NumerologyService.getInstance();
    const [userData, setUserData] = useState<NumerologyReadingRecordResponseDto[]>([]);
    const [messageApi, contextHolder] = message.useMessage();

    const fetchUserData = async () => {
        messageApi.open({
            key: "fetchUserData",
            content: "Đang tải dữ liệu người dùng...",
            type: "loading"
        });
        try {
            const data = await numerologyService.getNumerologyReadingRecords();
            setUserData(data);
            messageApi.open({
                key: "fetchUserData",
                content: "Tải dữ liệu người dùng thành công!",
                type: "success"
            });
        } catch (err) {
            messageApi.open({
                key: "fetchUserData",
                content: "Xảy ra lỗi trong quá trình tải dữ liệu người dùng! Vui lòng thử lại sau.",
                type: "error"
            });
        }
    }

    useEffect(() => {
        fetchUserData();
    }, []);

    return (
        <AdminLayout>
            {contextHolder}
            <Flex vertical gap="middle">
                <Space>
                    <Button type="primary" onClick={() => fetchUserData()}>Làm mới</Button>
                </Space>
                <Table columns={columns} dataSource={userData} />
            </Flex>
        </AdminLayout>
    );
}