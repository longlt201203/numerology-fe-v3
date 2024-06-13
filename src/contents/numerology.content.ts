export type NumberMeaningItem = {
    number: number;
    description: {
        psychic: string;
        destiny: string;
        name: string;
        year: string;
    }
}

export type NumberTypeContent = {
    longDescription: string;
    shortDescription: string;
}

export type NumberTypes = {
    psychic: NumberTypeContent;
    destiny: NumberTypeContent;
    year: NumberTypeContent;
    name: {
        fullName: NumberTypeContent;
        firstName: NumberTypeContent;
    }
}

export type NumerologyContent = {
    introduction: string;
    numberTypes: NumberTypes;
    numberMeanings: NumberMeaningItem[];
}

const numerologyContent: NumerologyContent = {
    introduction: "",
    numberTypes: {
        psychic: {
            longDescription: "",
            shortDescription: ""
        },
        destiny: {
            longDescription: "",
            shortDescription: ""
        },
        year: {
            longDescription: "",
            shortDescription: ""
        },
        name: {
            firstName: {
                longDescription: "",
                shortDescription: ""
            },
            fullName: {
                longDescription: "",
                shortDescription: ""
            }
        }
    },
    numberMeanings: [
        {
            number: 1,
            description: {
                psychic: "",
                destiny: "",
                name: "",
                year: ""
            }
        },
        {
            number: 2,
            description: {
                psychic: "",
                destiny: "",
                name: "",
                year: ""
            }
        },
        {
            number: 3,
            description: {
                psychic: "",
                destiny: "",
                name: "",
                year: ""
            }
        },
        {
            number: 4,
            description: {
                psychic: "",
                destiny: "",
                name: "",
                year: ""
            }
        },
        {
            number: 5,
            description: {
                psychic: "",
                destiny: "",
                name: "",
                year: ""
            }
        },
        {
            number: 6,
            description: {
                psychic: "",
                destiny: "",
                name: "",
                year: ""
            }
        },
        {
            number: 7,
            description: {
                psychic: "",
                destiny: "",
                name: "",
                year: ""
            }
        },
        {
            number: 8,
            description: {
                psychic: "",
                destiny: "",
                name: "",
                year: ""
            }
        },
        {
            number: 9,
            description: {
                psychic: "",
                destiny: "",
                name: "",
                year: ""
            }
        }
    ]
};

export default numerologyContent;