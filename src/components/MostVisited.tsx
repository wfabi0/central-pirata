import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import Link from "next/link";

interface MostVisitedProps {
  imageUrl: string | StaticImport;
  title: string;
}

export default function MostVisited({ imageUrl, title }: MostVisitedProps) {
  return (
    <div>
      <Link
        href={"/game/" + encodeURIComponent(title)}
        className="flex relative w-[14rem] h-[21rem] border-4 border-[#F4B741] transition duration-300 hover:scale-105"
      >
        {/* <Link href={"/game/" + title} className=""> */}
        <Image
          src={imageUrl}
          alt={title}
          fill
          sizes="100%"
          style={{ objectFit: "cover" }}
        />
        {/* </Link> */}
      </Link>
      <div className="items-center text-center text-white determination text-[1.5rem] truncate w-[14rem]" title={title}>
        <Link href={"/game/" + title}>{title}</Link>
      </div>
    </div>
  );
}
