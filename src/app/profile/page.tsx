import Image from "next/image";
import Link from "next/link";

export default function ProfilePage() {
  return (
    <main>
      <h1 className="text-black">Você está logado.</h1>
      <Link href={"/api/auth/logout"}>
        <Image
          src={"/api/static/img/default-avatar.jpeg"}
          alt="Logo"
          width={150}
          height={150}
        />
      </Link>
    </main>
  );
}
