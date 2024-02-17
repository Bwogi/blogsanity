import { createClient } from "next-sanity";

export const client = createClient({
  apiVersion: "2024-02-17",
  dataset: "production",
  projectId: "5sdqfrsn",
  useCdn: false,
});
