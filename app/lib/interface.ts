import imageUrlBuilder from "@sanity/image-url";
import { client } from "./sanity";

export interface simpleBlogCard {
  title: string;
  smallDescription: string;
  currentSlug: string;
  titleImage: any;
}

const builder = imageUrlBuilder(client);

export function urlFor(source: any) {
  return builder.image(source);
}
