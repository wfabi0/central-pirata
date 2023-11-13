import Link from "next/link";

interface FooterLinkProps {
  href: string;
  icon?: React.ReactNode;
  text: string;
}

export default function FooterLink({ href, icon, text }: FooterLinkProps) {
  return (
    <Link
      href={href}
      className="text-[0.95rem] flex-row flex items-center text-black hover:text-[#2b92ff] transition duration-300"
    >
      {icon}
      {text}
    </Link>
  );
}
