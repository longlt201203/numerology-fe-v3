import NumerologyCalculateResultDto from "@dto/numerology-calculate-result.dto";
import ReadNumerologyRequestDto from "@dto/read-numerology.dto";
import { FormOnFinishHandler } from "@etc/types";
import MainLayout from "@layouts/MainLayout";
import NumerologyService from "@services/numerology.service";
import { Button, DatePicker, Form, FormProps, Input, Layout, Tooltip, Typography, message } from "antd";
import dayjs, { Dayjs } from "dayjs";
import { useState } from "react";

const { Title, Paragraph } = Typography;

const initVal: ReadNumerologyRequestDto = {
    firstName: "",
    lsName: "",
    dob: dayjs()
}

export default function NumerologyReadingpage() {
    const [messageApi, contextHolder] = message.useMessage();
    const numerologyService = NumerologyService.getInstance();
    const [result, setResult] = useState<NumerologyCalculateResultDto>();

    const onFinish: FormOnFinishHandler<ReadNumerologyRequestDto> = (values) => {
        messageApi.open({
            key: "reading",
            content: "Chờ kết quả...",
            type: "loading"
        });
        numerologyService
            .readNumerology(values)
            .then((data) => {
                messageApi.open({
                    key: "reading",
                    content: "Xong!",
                    type: "success"
                });
                setResult(data);
            })
            .catch((err) => {
                messageApi.open({
                    key: "reading",
                    content: "Lỗi!",
                    type: "error"
                });
                console.log(err);
            });
    };

    return (
        <MainLayout>
            {contextHolder}
            <Layout className="bg-white flex flex-col items-center gap-y-16">
                <Title className="mb-0">Xem Thần Số Học</Title>
                <Form<ReadNumerologyRequestDto>
                    autoComplete="off"
                    className="w-full md:w-3/4 lg:w-2/4 mx-auto"
                    labelCol={{ span: 8, lg: { span: 6 } }}
                    onFinish={onFinish}
                    initialValues={initVal}>
                    <Form.Item<ReadNumerologyRequestDto>
                        label="Tên"
                        name="firstName">
                        <Input placeholder="Ví dụ: A" />
                    </Form.Item>
                    <Form.Item<ReadNumerologyRequestDto>
                        label="Họ và Tên đệm"
                        name="lsName">
                        <Input placeholder="Ví dụ: Nguyễn Văn" />
                    </Form.Item>
                    <Form.Item<ReadNumerologyRequestDto>
                        label="Ngày sinh"
                        name="dob">
                        <DatePicker<Dayjs> className="w-full" format="DD/MM/YYYY" placeholder="Ví dụ: 20/12/2003" />
                    </Form.Item>
                    <Form.Item
                        wrapperCol={{ sm: { offset: 8 }, lg: { offset: 6 } }}>
                        <Button type="primary" htmlType="submit">Xem Kết Quả</Button>
                    </Form.Item>
                </Form>
                {result && (
                    <div className="w-full">
                        <Title className="text-center">Kết Quả Của Bạn</Title>
                        <Tooltip title="Chỉ số Tâm linh" placement="topLeft">
                            <Title level={3}>Chỉ số Tâm linh: {result.psychicNumber}</Title>
                        </Tooltip>
                        {result.psychicDescription.split("\n").map((item, index) => (
                            <Paragraph key={index}>
                                {item}
                            </Paragraph>
                        ))}
                        <Tooltip title="Chỉ số Vận mệnh" placement="topLeft">
                            <Title level={3}>Chỉ số Vận mệnh: {result.destinyNumber}</Title>
                        </Tooltip>
                        {result.destinyDescription.split("\n").map((item, index) => (
                            <Paragraph key={index}>
                                {item}
                            </Paragraph>
                        ))}
                        <Title level={3}>Chỉ số Tên</Title>
                        <Tooltip title="Chỉ số Tên đầy đủ" placement="topLeft">
                            <Title level={4}>Chỉ số Tên đầy đủ: {result.fullNameNumber}</Title>
                        </Tooltip>
                        {result.fullNameDescription.split("\n").map((item, index) => (
                            <Paragraph key={index}>
                                {item}
                            </Paragraph>
                        ))}
                        <Tooltip title="Chỉ số Tên riêng" placement="topLeft">
                            <Title level={4}>Chỉ số Tên riêng: {result.firstNameNumber}</Title>
                        </Tooltip>
                        {result.firstNameDescription.split("\n").map((item, index) => (
                            <Paragraph key={index}>
                                {item}
                            </Paragraph>
                        ))}
                    </div>
                )}
            </Layout>
        </MainLayout>
    );
}