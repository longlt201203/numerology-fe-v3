import numerologyContent, { NumerologyContent } from "./numerology.content"

export type SiteContent = {
    numerology: NumerologyContent;
}

const siteContent: SiteContent = {
    numerology: numerologyContent
}

export default siteContent;