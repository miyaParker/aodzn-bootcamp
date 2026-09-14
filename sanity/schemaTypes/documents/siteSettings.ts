import { defineField, defineType } from "sanity";

export default defineType({
  name: "bootcampSiteSettings",
  title: "Bootcamp Site Settings",
  type: "document",
  fields: [
    defineField({
      name: "navLinks",
      title: "Navigation links",
      type: "array",
      of: [{ type: "linkItem" }],
      validation: (r) => r.required().min(1),
    }),
    defineField({ name: "navCtaLabel", title: "Nav CTA label", type: "string", validation: (r) => r.required() }),
    defineField({
      name: "footerCopyrightName",
      title: "Footer copyright name",
      type: "string",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "footerLegalLinks",
      title: "Footer legal links",
      type: "array",
      of: [{ type: "linkItem" }],
    }),
  ],
  preview: {
    prepare() {
      return { title: "Bootcamp Site Settings" };
    },
  },
});
