import Link from "next/link";
import { db } from "~/server/db";

const mockUrls = [
  "https://utfs.io/f/57244d28-5a81-46f9-af3f-366f42091d59-4lzlcb.png",
  "https://utfs.io/f/7c982d13-f977-4185-ad58-312f04ee9e5f-nx87bq.png",
  "https://utfs.io/f/244e1572-96fb-466e-84bf-ce058eb6a665-xurllj.png",
  "https://utfs.io/f/ec0b6f6d-d33c-4772-9094-660290a0cb84-3z6fzt.png",
  "https://utfs.io/f/6fce132a-6572-4ba1-85d9-bcb505e8c3bb-1e.png",
  "https://utfs.io/f/d93d527d-ac78-4c12-a978-2d7a528b1746-su2ff4.png",
  "https://utfs.io/f/f7f78570-ee78-4389-9dc0-f5a31008cb53-fouqxk.jpg",
];

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url,
}));

export default async function HomePage() {
  const posts = await db.query.posts.findMany();
  console.log(posts, "All Posts++");

  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {posts.map((post) => (
          <div key={post.id} className="w-48">
            <p>{post.name}</p>
          </div>
        ))}
        {mockImages.map((image) => (
          <div key={image.id} className="w-48">
            <img src={image.url} />
          </div>
        ))}
      </div>
    </main>
  );
}
