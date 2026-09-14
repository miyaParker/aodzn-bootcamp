import { defineField, defineType } from "sanity";

export const TESTIMONIAL_AVATARS = [
  { title: "David", value: "avatarDavid" },
  { title: "Emily", value: "avatarEmily" },
  { title: "Ayesha", value: "avatarAyesha" },
];

export default defineType({
  name: "testimonialItem",
  title: "Testimonial",
  type: "object",
  fields: [
    defineField({
      name: "avatar",
      title: "Avatar photo",
      type: "string",
      options: { list: TESTIMONIAL_AVATARS },
      validation: (r) => r.required(),
    }),
    defineField({ name: "name", type: "string", validation: (r) => r.required() }),
    defineField({ name: "role", type: "string", validation: (r) => r.required() }),
    defineField({ name: "quote", type: "text", rows: 4, validation: (r) => r.required() }),
  ],
  preview: {
    select: { title: "name", subtitle: "role" },
  },
});
