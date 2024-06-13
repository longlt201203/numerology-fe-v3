import siteContent from "@contents/site.content";
import CalculateNumerologyYearRequestDto from "@dto/calculate-numerology-year-request.dto";
import CalculateNumerologyYearResultDto from "@dto/calculate-numerology-year-result.dto";
import { FormOnFinishHandler } from "@etc/types";
import MainLayout from "@layouts/MainLayout";
import NumerologyService from "@services/numerology.service";
import { Button, DatePicker, Form, Layout, Tooltip, Typography, message } from "antd";
import dayjs from "dayjs";
import { useState } from "react";

const { Title, Paragraph } = Typography;

export default function NumerologyCalculatingPage() {
    const [messageApi, contextHolder] = message.useMessage();
    const numerologyService = NumerologyService.getInstance();
    const initVal: CalculateNumerologyYearRequestDto = {
        dob: dayjs(),
        year: dayjs()
    }
    const [result, setResult] = useState<CalculateNumerologyYearResultDto>();

    const onFinish: FormOnFinishHandler<CalculateNumerologyYearRequestDto> = (values) => {
        messageApi.open({
            key: "reading",
            content: "Chờ kết quả...",
            type: "loading"
        });
        numerologyService
            .calculateNumerologyYear(values)
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
    }

    return (
        <MainLayout>
            {contextHolder}
            <Layout className="bg-white flex flex-col items-center gap-y-16">
                <Title className="mb-0">Xem Năm Thần Số</Title>
                <Form<CalculateNumerologyYearRequestDto>
                    autoComplete="off"
                    className="w-full md:w-3/4 lg:w-2/4 mx-auto"
                    labelCol={{ span: 8, lg: { span: 6 } }}
                    initialValues={initVal}
                    onFinish={onFinish}>
                    <Form.Item<CalculateNumerologyYearRequestDto>
                        name="dob"
                        label="Ngày sinh"
                        rules={[{ required: true, message: "Vui lòng nhập ngày sinh" }]}>
                        <DatePicker className="w-full" format="DD/MM/YYYY" placeholder="Ví dụ: 20/12/2003" />
                    </Form.Item>
                    <Form.Item<CalculateNumerologyYearRequestDto>
                        name="year"
                        label="Năm cần xem"
                        rules={[{ required: true, message: "Vui lòng nhập năm cần xem" }]}>
                        <DatePicker className="w-full" picker="year" placeholder="Ví dụ: 2024" />
                    </Form.Item>
                    <Form.Item
                        wrapperCol={{ sm: { offset: 8 }, lg: { offset: 6 } }}>
                        <Button type="primary" htmlType="submit">Xem Kết Quả</Button>
                    </Form.Item>
                </Form>
                {result && (
                    <div className="w-full">
                        <Title className="text-center">Kết Quả Của Bạn</Title>
                        <Tooltip title={siteContent.numerology.numberTypes.year.shortDescription} placement="topLeft">
                            <Title level={3}>Năm thần số của bạn: {result.yearNumber}</Title>
                        </Tooltip>
                        {result.yearDescription.split("\n").map((item, index) => (
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