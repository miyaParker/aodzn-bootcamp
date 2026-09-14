import { defineField, defineType } from "sanity";

const collapsibleObject = { collapsible: true, collapsed: false } as const;

export default defineType({
  name: "bootcampHomePage",
  title: "Bootcamp Home Page",
  type: "document",
  fields: [
    defineField({
      name: "hero",
      title: "Hero",
      type: "object",
      options: collapsibleObject,
      fields: [
        defineField({ name: "pillText", type: "string", validation: (r) => r.required() }),
        defineField({ name: "heading", type: "string", validation: (r) => r.required() }),
        defineField({ name: "subheading", type: "text", rows: 3, validation: (r) => r.required() }),
        defineField({ name: "primaryCtaLabel", type: "string", validation: (r) => r.required() }),
        defineField({ name: "secondaryCtaLabel", type: "string", validation: (r) => r.required() }),
        defineField({ name: "joinCohortText", type: "string", validation: (r) => r.required() }),
        defineField({
          name: "studentInitials",
          title: "Student avatar initials",
          type: "array",
          of: [{ type: "string" }],
        }),
        defineField({ name: "weekCardLabel", type: "string", validation: (r) => r.required() }),
        defineField({
          name: "weekChecklist",
          type: "array",
          of: [{ type: "string" }],
        }),
        defineField({ name: "progressCardLabel", type: "string", validation: (r) => r.required() }),
        defineField({
          name: "progressPercent",
          type: "number",
          validation: (r) => r.required().min(0).max(100),
        }),
        defineField({ name: "progressWeekLabel", type: "string", validation: (r) => r.required() }),
        defineField({
          name: "testimonialCard",
          title: "Floating testimonial card",
          type: "object",
          options: collapsibleObject,
          fields: [
            defineField({ name: "initials", type: "string", validation: (r) => r.required() }),
            defineField({ name: "name", type: "string", validation: (r) => r.required() }),
            defineField({ name: "cohortLabel", type: "string", validation: (r) => r.required() }),
            defineField({ name: "quote", type: "text", rows: 3, validation: (r) => r.required() }),
          ],
        }),
      ],
    }),
    defineField({
      name: "transform",
      title: "Transform section",
      type: "object",
      options: collapsibleObject,
      fields: [
        defineField({ name: "pillText", type: "string", validation: (r) => r.required() }),
        defineField({ name: "heading", type: "string", validation: (r) => r.required() }),
        defineField({ name: "subheading", type: "text", rows: 3, validation: (r) => r.required() }),
        defineField({
          name: "items",
          type: "array",
          of: [{ type: "transformItem" }],
          validation: (r) => r.required().min(1),
        }),
      ],
    }),
    defineField({
      name: "curriculum",
      title: "Curriculum section",
      type: "object",
      options: collapsibleObject,
      fields: [
        defineField({ name: "pillText", type: "string", validation: (r) => r.required() }),
        defineField({ name: "heading", type: "string", validation: (r) => r.required() }),
        defineField({ name: "subheading", type: "text", rows: 3, validation: (r) => r.required() }),
        defineField({
          name: "weeks",
          type: "array",
          of: [{ type: "weekItem" }],
          validation: (r) => r.required().min(1),
        }),
        defineField({ name: "bonusTitle", type: "string", validation: (r) => r.required() }),
        defineField({ name: "bonusDescription", type: "string", validation: (r) => r.required() }),
      ],
    }),
    defineField({
      name: "audience",
      title: "Audience section",
      type: "object",
      options: collapsibleObject,
      fields: [
        defineField({ name: "pillText", type: "string", validation: (r) => r.required() }),
        defineField({ name: "heading", type: "string", validation: (r) => r.required() }),
        defineField({ name: "subheading", type: "text", rows: 2, validation: (r) => r.required() }),
        defineField({
          name: "items",
          title: "Fit statements",
          type: "array",
          of: [{ type: "string" }],
          validation: (r) => r.required().min(1),
        }),
      ],
    }),
    defineField({
      name: "howItWorks",
      title: "How it works section",
      type: "object",
      options: collapsibleObject,
      fields: [
        defineField({ name: "heading", type: "string", validation: (r) => r.required() }),
        defineField({
          name: "steps",
          type: "array",
          of: [{ type: "howItWorksStep" }],
          validation: (r) => r.required().min(1),
        }),
      ],
    }),
    defineField({
      name: "pricing",
      title: "Pricing",
      type: "object",
      options: collapsibleObject,
      fields: [
        defineField({ name: "originalPrice", type: "number", validation: (r) => r.required().min(0) }),
        defineField({ name: "price", type: "number", validation: (r) => r.required().min(0) }),
        defineField({ name: "discountPercent", type: "number", validation: (r) => r.required().min(0).max(100) }),
        defineField({ name: "instalmentCount", type: "number", validation: (r) => r.required().min(1) }),
        defineField({ name: "instalmentAmount", type: "number", validation: (r) => r.required().min(0) }),
        defineField({
          name: "perks",
          type: "array",
          of: [{ type: "string" }],
          validation: (r) => r.required().min(1),
        }),
        defineField({ name: "primaryCtaLabel", type: "string", validation: (r) => r.required() }),
      ],
    }),
    defineField({
      name: "pricingBanner",
      title: "Pricing banner section",
      type: "object",
      options: collapsibleObject,
      fields: [
        defineField({ name: "heading", type: "string", validation: (r) => r.required() }),
        defineField({ name: "subheading", type: "text", rows: 3, validation: (r) => r.required() }),
      ],
    }),
    defineField({
      name: "testimonials",
      title: "Testimonials section",
      type: "object",
      options: collapsibleObject,
      fields: [
        defineField({ name: "pillText", type: "string", validation: (r) => r.required() }),
        defineField({ name: "heading", type: "string", validation: (r) => r.required() }),
        defineField({ name: "subheading", type: "text", rows: 3, validation: (r) => r.required() }),
        defineField({
          name: "items",
          type: "array",
          of: [{ type: "testimonialItem" }],
          validation: (r) => r.required().min(1),
        }),
      ],
    }),
    defineField({
      name: "mentor",
      title: "Mentor section",
      type: "object",
      options: collapsibleObject,
      fields: [
        defineField({ name: "pillText", type: "string", validation: (r) => r.required() }),
        defineField({ name: "name", type: "string", validation: (r) => r.required() }),
        defineField({ name: "bio", type: "text", rows: 5, validation: (r) => r.required() }),
        defineField({ name: "quote", type: "text", rows: 3, validation: (r) => r.required() }),
      ],
    }),
    defineField({
      name: "faq",
      title: "FAQ section",
      type: "object",
      options: collapsibleObject,
      fields: [
        defineField({ name: "heading", type: "string", validation: (r) => r.required() }),
        defineField({
          name: "items",
          type: "array",
          of: [{ type: "faqItem" }],
          validation: (r) => r.required().min(1),
        }),
      ],
    }),
    defineField({
      name: "ctaBanner",
      title: "Bottom CTA section",
      type: "object",
      options: collapsibleObject,
      fields: [
        defineField({ name: "heading", type: "string", validation: (r) => r.required() }),
        defineField({ name: "subheading", type: "text", rows: 3, validation: (r) => r.required() }),
        defineField({ name: "ctaLabel", type: "string", validation: (r) => r.required() }),
        defineField({ name: "guaranteeText", type: "string", validation: (r) => r.required() }),
      ],
    }),
  ],
  preview: {
    prepare() {
      return { title: "Bootcamp Home Page" };
    },
  },
});
