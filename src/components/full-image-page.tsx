import { clerkClient } from "@clerk/nextjs/server";
import Image from "next/image";
import { getImage } from "~/server/queries";

export default async function FullPageImageView(props: { id: number }) {
  const image = await getImage(props.id);
  const userInfo = await clerkClient.users.getUser(image.userId);
  return (
    <div className="flex h-full w-full min-w-0 items-center justify-around">
      <div className="flex-shrink border-l">
        <Image src={image.url} alt={image.name} width={520} height={520} />
      </div>

      <div className="flex w-1/2 flex-col text-white">
        <div className="text-xl font-bold">{image.name}</div>
        <div className="text-lg">Uploaded By: {userInfo.fullName}</div>
        <div className="text-lg">
          Created At: {image.createdAt.toLocaleDateString()}
        </div>
      </div>
    </div>
  );
}
