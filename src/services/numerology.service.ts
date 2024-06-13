import { NumerologyEntryDto } from "@dto/numerology-entry.dto";
import Service from "./service";
import ReadNumerologyRequestDto from "@dto/read-numerology.dto";
import NumerologyCalculateResultDto from "@dto/numerology-calculate-result.dto";
import CalculateNumerologyYearRequestDto from "@dto/calculate-numerology-year-request.dto";
import CalculateNumerologyYearResultDto from "@dto/calculate-numerology-year-result.dto";

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

    readNumerology(dto: ReadNumerologyRequestDto) {
        const apiUri = this.getApiUri("/read");
        return this.post<NumerologyCalculateResultDto>(apiUri.toString(), { ...dto, dob: dto.dob.toISOString() });
    }

    getExportEntriesJSONLink() {
        const apiUri = this.getApiUri("/export-entries-json")
        return apiUri.toString();
    }

    getImportEntriesLink() {
        const apiUri = this.getApiUri("/import-entries")
        return apiUri.toString();
    }

    calculateNumerologyYear(dto: CalculateNumerologyYearRequestDto) {
        const apiUri = this.getApiUri("/calculate-year");
        return this.post<CalculateNumerologyYearResultDto>(apiUri.toString(), { dob: dto.dob.toISOString(), year: dto.year.year() });
    }
}