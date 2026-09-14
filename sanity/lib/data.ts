import { cache } from "react";
import { client } from "./client";
import { homePageQuery, siteSettingsQuery } from "./queries";
import type { HomePageData, SiteSettingsData } from "./types";

export const getHomePageData = cache(async (): Promise<HomePageData> => {
  const data = await client.fetch<HomePageData | null>(homePageQuery);
  if (!data) {
    throw new Error(
      "No `bootcampHomePage` document found in Sanity. Run the seed script or create one in the Studio at /studio."
    );
  }
  return data;
});

export const getSiteSettingsData = cache(async (): Promise<SiteSettingsData> => {
  const data = await client.fetch<SiteSettingsData | null>(siteSettingsQuery);
  if (!data) {
    throw new Error(
      "No `bootcampSiteSettings` document found in Sanity. Run the seed script or create one in the Studio at /studio."
    );
  }
  return data;
});
