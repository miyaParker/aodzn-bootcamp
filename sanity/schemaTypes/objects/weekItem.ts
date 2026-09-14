import { defineField, defineType } from "sanity";

export default defineType({
  name: "weekItem",
  title: "Week",
  type: "object",
  fields: [
    defineField({ name: "title", type: "string", validation: (r) => r.required() }),
    defineField({ name: "lessons", title: "Lesson count", type: "number", validation: (r) => r.required().min(0) }),
    defineField({ name: "body", type: "text", rows: 3, validation: (r) => r.required() }),
  ],
  preview: {
    select: { title: "title", subtitle: "body" },
  },
});
