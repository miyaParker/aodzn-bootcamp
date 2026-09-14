import type { StructureResolver } from "sanity/structure";

export const structure: StructureResolver = (S) =>
  S.list()
    .title("Bootcamp Content")
    .items([
      S.listItem()
        .title("Home Page")
        .id("bootcampHomePage")
        .child(
          S.document().schemaType("bootcampHomePage").documentId("bootcampHomePage")
        ),
      S.listItem()
        .title("Site Settings")
        .id("bootcampSiteSettings")
        .child(
          S.document()
            .schemaType("bootcampSiteSettings")
            .documentId("bootcampSiteSettings")
        ),
    ]);
