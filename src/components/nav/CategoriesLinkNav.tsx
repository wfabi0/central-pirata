import Link from "next/link";

interface CategoriesLinkNavProps {
  title: string;
  icon: React.ReactNode;
  href: string;
}

export default function CategoriesLinkNav({
  title,
  icon,
  href,
}: CategoriesLinkNavProps) {
  return (
    <Link
      href={href}
      className={
        "px-4 py-2 text-sm text-gray-700 flex-row items-center flex text-start truncate hover:text-[#2b92ff] hover:bg-zinc-200 transition duration-300"
      }
    >
      {icon}
      {title}
    </Link>
  );
}
