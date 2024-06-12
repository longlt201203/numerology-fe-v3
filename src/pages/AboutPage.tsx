import { NumerologyEntryDto } from "@dto/numerology-entry.dto";
import MainLayout from "@layouts/MainLayout";
import NumerologyService from "@services/numerology.service";
import { Typography } from "antd";
import { useEffect, useState } from "react";

const { Title, Paragraph, Text } = Typography;

export default function AboutPage() {
    const numerologyService = NumerologyService.getInstance();
    const [entries, setEntries] = useState<NumerologyEntryDto[]>([]);

    const fetchNumerologyEntries = async () => {
        const data = await numerologyService.getMany();
        setEntries(data);
    }

    useEffect(() => {
        fetchNumerologyEntries();
    }, []);
    
    return (
        <MainLayout>
            <Title>Thần số học là gì?</Title>
            <Title>Ý nghĩa của những con số</Title>
            {entries.map((entry) => (
                <div key={entry.id}>
                    <Title level={2}>Số {entry.number}</Title>
                    <Title level={3}>Số tâm linh {entry.number}</Title>
                    {entry.psychicDescription.split("\n").map(item => (<Paragraph>{item}</Paragraph>))}
                    <Title level={3}>Số vận mệnh {entry.number}</Title>
                    {entry.destinyDescription.split("\n").map(item => (<Paragraph>{item}</Paragraph>))}
                    <Title level={3}>Số tên {entry.number}</Title>
                    {entry.nameDescription.split("\n").map(item => (<Paragraph>{item}</Paragraph>))}
                </div>
            ))}
        </MainLayout>
    );
}