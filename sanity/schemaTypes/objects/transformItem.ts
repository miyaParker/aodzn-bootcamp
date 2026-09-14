import { defineField, defineType } from "sanity";

export const TRANSFORM_ICONS = [
  { title: "Compass (frame the problem)", value: "compass" },
  { title: "People (user research)", value: "research" },
  { title: "Layout (design with confidence)", value: "layout" },
  { title: "Bolt (prototype)", value: "prototype" },
  { title: "Loop (feedback & iteration)", value: "feedback" },
  { title: "Presentation (present & defend)", value: "present" },
];

export default defineType({
  name: "transformItem",
  title: "Transform item",
  type: "object",
  fields: [
    defineField({
      name: "icon",
      type: "string",
      options: { list: TRANSFORM_ICONS },
      validation: (r) => r.required(),
    }),
    defineField({ name: "title", type: "string", validation: (r) => r.required() }),
    defineField({ name: "body", type: "text", rows: 3, validation: (r) => r.required() }),
  ],
  preview: {
    select: { title: "title", subtitle: "body" },
  },
});
