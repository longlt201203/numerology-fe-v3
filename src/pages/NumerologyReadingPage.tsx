import MainLayout from "@layouts/MainLayout";
import { Button, DatePicker, Form, Input, Layout, Tooltip, Typography } from "antd";

const { Title, Paragraph, Text } = Typography;

export default function NumerologyReadingpage() {
    return (
        <MainLayout>
            <Layout className="bg-white flex flex-col items-center gap-y-16">
                <Title className="mb-0">Xem Thần Số Học</Title>
                <Form
                    autoComplete="off"
                    className="w-full md:w-3/4 lg:w-2/4 mx-auto"
                    labelCol={{ span: 8, lg: { span: 6 } }}>
                    <Form.Item
                        label="Tên">
                        <Input placeholder="Ví dụ: A" />
                    </Form.Item>
                    <Form.Item
                        label="Họ và Tên đệm">
                        <Input placeholder="Ví dụ: Nguyễn Văn" />
                    </Form.Item>
                    <Form.Item
                        label="Ngày sinh">
                        <DatePicker className="w-full" format="DD/MM/YYYY" placeholder="Ví dụ: 20/12/2003" />
                    </Form.Item>
                    <Form.Item
                        wrapperCol={{ sm: { offset: 8 }, lg: { offset: 6 } }}>
                        <Button type="primary">Xem Kết Quả</Button>
                    </Form.Item>
                </Form>
                <div className="w-full">
                    <Title className="text-center">Kết Quả Của Bạn</Title>
                    <Tooltip title="Chỉ số tính cách" placement="topLeft">
                        <Title level={3}>Chỉ số Tính cách: 2</Title>
                    </Tooltip>
                    <Paragraph>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis consectetur laoreet sapien sit amet pellentesque. Nulla congue consectetur enim sagittis mollis. Fusce commodo, augue vel congue aliquet, lorem diam ultricies enim, ac tempor dui leo eu arcu. Nullam pharetra sodales dignissim. Curabitur dignissim scelerisque pretium. Fusce urna lorem, dictum sit amet urna quis, malesuada ornare risus. Integer vehicula, magna at ornare euismod, urna metus consectetur nisl, vel scelerisque urna odio varius leo. Morbi eget est sed eros pulvinar faucibus ut non neque. Duis dignissim sem congue vehicula elementum.
                    </Paragraph>
                    <Paragraph>
                        Nullam ut placerat sem. Mauris ac lacus eget mauris tincidunt laoreet at non nisi. Nam fringilla erat eget mauris elementum, vitae mollis elit lobortis. Nulla facilisi. Fusce vel sagittis velit. Etiam consectetur tincidunt nisi ac blandit. Maecenas mattis ex sit amet metus scelerisque malesuada. Fusce suscipit lacus in erat tempor venenatis non et nunc. Aenean ut scelerisque erat, eu accumsan eros. Phasellus non fermentum velit, nec porta erat. Pellentesque semper ex ac ligula blandit tincidunt. Nullam condimentum, nunc vel aliquet luctus, urna urna pellentesque libero, at placerat mauris nibh quis magna.
                    </Paragraph>
                    <Paragraph>
                        Fusce et risus at libero tempor commodo. Donec mollis neque eu dui ultricies laoreet. Donec ac magna nisi. Duis eu justo non ligula condimentum aliquam. Aliquam neque enim, laoreet quis bibendum sed, fermentum sit amet odio. In hac habitasse platea dictumst. Pellentesque tellus metus, eleifend quis tempus non, faucibus eu dolor.
                    </Paragraph>
                    <Tooltip title="Chỉ số Vận mệnh" placement="topLeft">
                        <Title level={3}>Chỉ số Vận mệnh: 1</Title>
                    </Tooltip>
                    <Paragraph>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis consectetur laoreet sapien sit amet pellentesque. Nulla congue consectetur enim sagittis mollis. Fusce commodo, augue vel congue aliquet, lorem diam ultricies enim, ac tempor dui leo eu arcu. Nullam pharetra sodales dignissim. Curabitur dignissim scelerisque pretium. Fusce urna lorem, dictum sit amet urna quis, malesuada ornare risus. Integer vehicula, magna at ornare euismod, urna metus consectetur nisl, vel scelerisque urna odio varius leo. Morbi eget est sed eros pulvinar faucibus ut non neque. Duis dignissim sem congue vehicula elementum.
                    </Paragraph>
                    <Paragraph>
                        Nullam ut placerat sem. Mauris ac lacus eget mauris tincidunt laoreet at non nisi. Nam fringilla erat eget mauris elementum, vitae mollis elit lobortis. Nulla facilisi. Fusce vel sagittis velit. Etiam consectetur tincidunt nisi ac blandit. Maecenas mattis ex sit amet metus scelerisque malesuada. Fusce suscipit lacus in erat tempor venenatis non et nunc. Aenean ut scelerisque erat, eu accumsan eros. Phasellus non fermentum velit, nec porta erat. Pellentesque semper ex ac ligula blandit tincidunt. Nullam condimentum, nunc vel aliquet luctus, urna urna pellentesque libero, at placerat mauris nibh quis magna.
                    </Paragraph>
                    <Paragraph>
                        Fusce et risus at libero tempor commodo. Donec mollis neque eu dui ultricies laoreet. Donec ac magna nisi. Duis eu justo non ligula condimentum aliquam. Aliquam neque enim, laoreet quis bibendum sed, fermentum sit amet odio. In hac habitasse platea dictumst. Pellentesque tellus metus, eleifend quis tempus non, faucibus eu dolor.
                    </Paragraph>
                    <Title level={3}>Chỉ số Tên</Title>
                    <Tooltip title="Chỉ số Tên đầy đủ" placement="topLeft">
                        <Title level={4}>Chỉ số Tên đầy đủ: 7</Title>
                    </Tooltip>
                    <Paragraph>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis consectetur laoreet sapien sit amet pellentesque. Nulla congue consectetur enim sagittis mollis. Fusce commodo, augue vel congue aliquet, lorem diam ultricies enim, ac tempor dui leo eu arcu. Nullam pharetra sodales dignissim. Curabitur dignissim scelerisque pretium. Fusce urna lorem, dictum sit amet urna quis, malesuada ornare risus. Integer vehicula, magna at ornare euismod, urna metus consectetur nisl, vel scelerisque urna odio varius leo. Morbi eget est sed eros pulvinar faucibus ut non neque. Duis dignissim sem congue vehicula elementum.
                    </Paragraph>
                    <Paragraph>
                        Nullam ut placerat sem. Mauris ac lacus eget mauris tincidunt laoreet at non nisi. Nam fringilla erat eget mauris elementum, vitae mollis elit lobortis. Nulla facilisi. Fusce vel sagittis velit. Etiam consectetur tincidunt nisi ac blandit. Maecenas mattis ex sit amet metus scelerisque malesuada. Fusce suscipit lacus in erat tempor venenatis non et nunc. Aenean ut scelerisque erat, eu accumsan eros. Phasellus non fermentum velit, nec porta erat. Pellentesque semper ex ac ligula blandit tincidunt. Nullam condimentum, nunc vel aliquet luctus, urna urna pellentesque libero, at placerat mauris nibh quis magna.
                    </Paragraph>
                    <Paragraph>
                        Fusce et risus at libero tempor commodo. Donec mollis neque eu dui ultricies laoreet. Donec ac magna nisi. Duis eu justo non ligula condimentum aliquam. Aliquam neque enim, laoreet quis bibendum sed, fermentum sit amet odio. In hac habitasse platea dictumst. Pellentesque tellus metus, eleifend quis tempus non, faucibus eu dolor.
                    </Paragraph>
                    <Tooltip title="Chỉ số Tên riêng" placement="topLeft">
                        <Title level={4}>Chỉ số Tên riêng: 9</Title>
                    </Tooltip>
                    <Paragraph>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis consectetur laoreet sapien sit amet pellentesque. Nulla congue consectetur enim sagittis mollis. Fusce commodo, augue vel congue aliquet, lorem diam ultricies enim, ac tempor dui leo eu arcu. Nullam pharetra sodales dignissim. Curabitur dignissim scelerisque pretium. Fusce urna lorem, dictum sit amet urna quis, malesuada ornare risus. Integer vehicula, magna at ornare euismod, urna metus consectetur nisl, vel scelerisque urna odio varius leo. Morbi eget est sed eros pulvinar faucibus ut non neque. Duis dignissim sem congue vehicula elementum.
                    </Paragraph>
                    <Paragraph>
                        Nullam ut placerat sem. Mauris ac lacus eget mauris tincidunt laoreet at non nisi. Nam fringilla erat eget mauris elementum, vitae mollis elit lobortis. Nulla facilisi. Fusce vel sagittis velit. Etiam consectetur tincidunt nisi ac blandit. Maecenas mattis ex sit amet metus scelerisque malesuada. Fusce suscipit lacus in erat tempor venenatis non et nunc. Aenean ut scelerisque erat, eu accumsan eros. Phasellus non fermentum velit, nec porta erat. Pellentesque semper ex ac ligula blandit tincidunt. Nullam condimentum, nunc vel aliquet luctus, urna urna pellentesque libero, at placerat mauris nibh quis magna.
                    </Paragraph>
                    <Paragraph>
                        Fusce et risus at libero tempor commodo. Donec mollis neque eu dui ultricies laoreet. Donec ac magna nisi. Duis eu justo non ligula condimentum aliquam. Aliquam neque enim, laoreet quis bibendum sed, fermentum sit amet odio. In hac habitasse platea dictumst. Pellentesque tellus metus, eleifend quis tempus non, faucibus eu dolor.
                    </Paragraph>
                </div>
            </Layout>
        </MainLayout>
    );
}