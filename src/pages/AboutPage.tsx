import LazyParagraph from "@components/LazyParagraph";
import siteContent from "@contents/site.content";
import MainLayout from "@layouts/MainLayout";
import { Typography } from "antd";

const { Title } = Typography;

export default function AboutPage() {
    return (
        <MainLayout>
            <Title>Thần số học là gì?</Title>
            <LazyParagraph content={siteContent.numerology.introduction} />
            <Title>Ý nghĩa của những con số</Title>
            <Title level={3}>Các chỉ số ảnh hưởng lên bạn</Title>
            <Title level={4}>Chỉ số tâm linh</Title>
            <LazyParagraph content={siteContent.numerology.numberTypes.psychic.longDescription} />
            <Title level={4}>Chỉ số vận mệnh</Title>
            <LazyParagraph content={siteContent.numerology.numberTypes.destiny.longDescription} />
            <Title level={4}>Chỉ số tên đầy đủ</Title>
            <LazyParagraph content={siteContent.numerology.numberTypes.name.fullName.longDescription} />
            <Title level={4}>Chỉ số tên riêng</Title>
            <LazyParagraph content={siteContent.numerology.numberTypes.name.firstName.longDescription} />
            <Title level={3}>Xem thần số cho năm</Title>
            <LazyParagraph content={siteContent.numerology.numberTypes.year.longDescription} />
            <Title level={3}>Chi tiết từng con số</Title>
            {siteContent.numerology.numberMeanings.map((item, index) => (
                <div key={index}>
                    <Title level={4}>Số {item.number}</Title>
                    <Title level={5}>Chỉ số tâm linh {item.number}</Title> 
                    <LazyParagraph content={item.description.psychic} />
                    <Title level={5}>Chỉ số vận mệnh {item.number}</Title>
                    <LazyParagraph content={item.description.destiny} />
                    <Title level={5}>Chỉ số tên {item.number}</Title>
                    <LazyParagraph content={item.description.name} />
                    <Title level={5}>Năm số {item.number}</Title>
                    <LazyParagraph content={item.description.year} />
                </div>
            ))}
        </MainLayout>
    );
}