import { NumerologyEntryDto } from "@dto/numerology-entry.dto";
import Service from "./service";

export default class NumerologyService extends Service {
    private static instance: NumerologyService;
    static getInstance() {
        if (!this.instance) this.instance = new NumerologyService();
        return this.instance;
    }
    
    constructor() {
        super("/numerology");
    }

    getMany() {
        const apiUri = this.getApiUri("/");
        return this.get<NumerologyEntryDto[]>(apiUri.toString());
    }

    updateOrCreateNumerologyEntry(dto: NumerologyEntryDto) {
        const apiUri = this.getApiUri("/update-or-create-entry");
        return this.put<NumerologyEntryDto>(apiUri.toString(), dto);
    }
}