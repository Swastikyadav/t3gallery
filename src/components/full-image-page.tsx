import Image from "next/image";
import { getImage } from "~/server/queries";

export default async function FullPageImageView(props: { id: number }) {
  const image = await getImage(props.id);
  return (
    <div className="flex h-full w-full min-w-0 items-center justify-around">
      <div className="flex-shrink border-l">
        <Image src={image.url} alt={image.name} width={520} height={520} />
      </div>

      <div className="flex w-48 flex-shrink-0 flex-col">
        <div className="text-xl font-bold text-white">{image.name}</div>
      </div>
    </div>
  );
}
