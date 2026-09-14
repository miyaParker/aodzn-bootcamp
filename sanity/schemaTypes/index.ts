import type { SchemaTypeDefinition } from "sanity";

import linkItem from "./objects/linkItem";
import transformItem from "./objects/transformItem";
import weekItem from "./objects/weekItem";
import howItWorksStep from "./objects/howItWorksStep";
import faqItem from "./objects/faqItem";
import testimonialItem from "./objects/testimonialItem";
import homePage from "./documents/homePage";
import siteSettings from "./documents/siteSettings";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    // documents
    homePage,
    siteSettings,
    // objects
    linkItem,
    transformItem,
    weekItem,
    howItWorksStep,
    faqItem,
    testimonialItem,
  ],
};
