import LazyParagraph from "@components/LazyParagraph";
import siteContent from "@contents/site.content";
import NumerologyCalculateResultDto from "@dto/numerology-calculate-result.dto";
import ReadNumerologyRequestDto from "@dto/read-numerology.dto";
import { FormOnFinishHandler } from "@etc/types";
import MainLayout from "@layouts/MainLayout";
import NumerologyService from "@services/numerology.service";
import { Button, DatePicker, Form, Input, Layout, Tooltip, Typography, message } from "antd";
import dayjs, { Dayjs } from "dayjs";
import { useState } from "react";

const { Title } = Typography;

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
                <Title className="mb-0" level={2}>Xem Thần Số Học</Title>
                <Form<ReadNumerologyRequestDto>
                    autoComplete="off"
                    className="w-full md:w-3/4 lg:w-2/4 mx-auto"
                    labelCol={{ span: 8, lg: { span: 6 } }}
                    onFinish={onFinish}
                    initialValues={initVal}>
                    <Form.Item<ReadNumerologyRequestDto>
                        label="Tên"
                        name="firstName"
                        rules={[{ required: true, message: "Vui lòng nhập tên" }]}>
                        <Input placeholder="Ví dụ: A" />
                    </Form.Item>
                    <Form.Item<ReadNumerologyRequestDto>
                        label="Họ và Tên đệm"
                        name="lsName"
                        rules={[{ required: true, message: "Vui lòng nhập họ và tên đệm" }]}>
                        <Input placeholder="Ví dụ: Nguyễn Văn" />
                    </Form.Item>
                    <Form.Item<ReadNumerologyRequestDto>
                        label="Ngày sinh"
                        name="dob"
                        rules={[{ required: true, message: "Vui lòng nhập ngày sinh" }]}>
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
                        <Tooltip title={siteContent.numerology.numberTypes.psychic.shortDescription} placement="topLeft">
                            <Title level={3}>Chỉ số Tâm linh: {result.psychicNumber}</Title>
                        </Tooltip>
                        <LazyParagraph content={result.psychicDescription} />
                        <Tooltip title={siteContent.numerology.numberTypes.destiny.shortDescription} placement="topLeft">
                            <Title level={3}>Chỉ số Vận mệnh: {result.destinyNumber}</Title>
                        </Tooltip>
                        <LazyParagraph content={result.destinyDescription} />
                        <Title level={3}>Chỉ số Tên</Title>
                        <Tooltip title={siteContent.numerology.numberTypes.name.fullName.shortDescription} placement="topLeft">
                            <Title level={4}>Chỉ số Tên đầy đủ: {result.fullNameNumber}</Title>
                        </Tooltip>
                        <LazyParagraph content={result.fullNameDescription} />
                        <Tooltip title={siteContent.numerology.numberTypes.name.firstName.shortDescription} placement="topLeft">
                            <Title level={4}>Chỉ số Tên riêng: {result.firstNameNumber}</Title>
                        </Tooltip>
                        <LazyParagraph content={result.firstNameDescription} />
                    </div>
                )}
            </Layout>
        </MainLayout>
    );
}