import { NumerologyEntryDto } from "@dto/numerology-entry.dto";
import { Button, Form, FormProps } from "antd";
import TextArea from "antd/es/input/TextArea";

export interface NumerologyEntryItemProps {
    data?: NumerologyEntryDto;
    onSubmit?: FormProps<NumerologyEntryDto>["onFinish"];
}

export default function NumerologyEntryItem(props: NumerologyEntryItemProps) {
    return (
        <Form<NumerologyEntryDto> labelCol={{ sm: { span: 8 }, md: { span: 8 }, lg: { span: 4 } }} initialValues={props.data} onFinish={props.onSubmit}>
            <Form.Item<NumerologyEntryDto> name="number" hidden/>
            <Form.Item<NumerologyEntryDto>
                name="psychicDescription"
                label="Số ngày sinh">
                <TextArea autoSize={{ minRows: 3, maxRows: 5 }} />
            </Form.Item>
            <Form.Item<NumerologyEntryDto>
                name="destinyDescription"
                label="Số vận mệnh">
                <TextArea autoSize={{ minRows: 3, maxRows: 5 }} />
            </Form.Item>
            <Form.Item<NumerologyEntryDto>
                name="nameDescription"
                label="Số tên">
                <TextArea autoSize={{ minRows: 3, maxRows: 5 }} />
            </Form.Item>
            <Form.Item wrapperCol={{ sm: { offset: 8 }, md: { offset: 6 }, lg:  { offset: 4 } }}>
                <Button type="primary" htmlType="submit">Lưu</Button>
            </Form.Item>
        </Form>
    );
}