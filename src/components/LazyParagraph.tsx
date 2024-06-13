import { Typography } from "antd";

const { Paragraph } = Typography;

export interface LazyParagraphProps {
    content?: string;
}

export default function LazyParagraph({ content }: LazyParagraphProps) {
    return (
        <>
            {content && content.split("\n").map((item, index) => (
                <Paragraph key={index}>
                    {item}
                </Paragraph>
            ))}
        </>
    );
}