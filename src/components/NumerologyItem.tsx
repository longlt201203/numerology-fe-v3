import { Button, Form } from "antd";
import TextArea from "antd/es/input/TextArea";

export interface NumerologyEntryItemProps {
}

export default function NumerologyEntryItem(props: NumerologyEntryItemProps) {
    return (
        <Form labelCol={{ sm: { span: 8 }, md: { span: 8 }, lg: { span: 4 } }}>
            <Form.Item
                label="Số ngày sinh">
                <TextArea autoSize={{ minRows: 3, maxRows: 5 }}/>
            </Form.Item>
            <Form.Item
                label="Số vận mệnh">
                <TextArea autoSize={{ minRows: 3, maxRows: 5 }}/>
            </Form.Item>
            <Form.Item
                label="Số tên">
                <TextArea autoSize={{ minRows: 3, maxRows: 5 }}/>
            </Form.Item>
            <Form.Item wrapperCol={{ sm: { offset: 8 }, md: { offset: 6 }, lg:  { offset: 4 } }}>
                <Button type="primary">Lưu</Button>
            </Form.Item>
        </Form>
    );
}