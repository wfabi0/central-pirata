import Link from "next/link";

interface NavLinkProps {
  href: string;
  className?: string;
  children: React.ReactNode;
}

export default function NavLink({ href, className, children }: NavLinkProps) {
  let classNames =
    "text-black text-[1.2rem] flex items-center hover:text-white transition duration-300 ease-in-out";
  if (className) classNames += className;
  return (
    <Link href={href} className={classNames}>
      {children}
    </Link>
  );
}
