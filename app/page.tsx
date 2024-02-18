import Image from "next/image";
import { simpleBlogCard, urlFor } from "./lib/interface";
import { client } from "./lib/sanity";
import { Card } from "@/components/ui/card";

async function getData() {
  const query = `
  *[_type == 'blog'] | order(_createdAt desc){
    title,
      smallDescription,
      "currentSlug":slug.current,
      "titleImage": titleImaage.asset._ref
  }`;

  const data = await client.fetch(query);
  return data;
}
export default async function Home() {
  const data: simpleBlogCard[] = await getData();
  console.log(data);
  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 mt-5">
      {data.map((post, idx) => (
        <Card key={idx}>
          <Image
            src={urlFor(post.titleImage).url()}
            alt={post.title}
            width={200}
            height={200}
          />
        </Card>
      ))}
    </div>
  );
}
