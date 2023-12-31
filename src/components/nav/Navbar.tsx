"use client";

import {
  CubeIcon,
  HomeIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import { LiaGamepadSolid } from "react-icons/lia";
import { TiShoppingCart } from "react-icons/ti";
import { usePathname } from "next/navigation";
import NavLink from "./NavLink";
import { useSound } from "@/providers/game/SoundProvider";
import { BiUser } from "react-icons/bi";
import CategoriesNav from "./CategoriesNav";
import { Suspense, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

const checkAuthentication = async () => {
  const resp = await fetch("/api/auth/auth-check", {
    headers: { "Content-Type": "application/json" },
    next: {
      revalidate: 60,
    },
  });
  const data = await resp.json();
  return {
    data: data,
    status: resp.status === 200 ? true : false,
  };
};

export default function Navbar() {
  const pathname = usePathname();
  const { data, isLoading, isError, refetch } = useQuery({
    queryKey: ["userInfo"],
    queryFn: () => checkAuthentication(),
    staleTime: 1000 * 30, // 30 seconds
  });
  useEffect(() => {
    refetch();
  }, [pathname]);
  const { toggleSom } = useSound();
  const checkPath = (path: string) =>
    pathname === path ? "border-b-2 border-white hover:border-black" : "";
  const getHash = () =>
    typeof window !== "undefined"
      ? decodeURIComponent(window.location.hash.replace("#", ""))
      : undefined;
  return (
    <nav
      className={`flex flex-col md:flex-row items-center justify-between text-white bg-[#F4B841] p-4 px-[6rem] relative md:sticky top-0 z-50 transition duration-300`}
    >
      {/* Left Section */}
      <div className="flex items-center gap-12 md:flex-grow z-10">
        <NavLink
          href={pathname === "/" ? "#top" : "/"}
          className={`px-4 py-2 determination ${checkPath("/")}`}
        >
          <HomeIcon className={`w-7 h-7 mr-1 underline`} /> Página Inicial
        </NavLink>
        <CategoriesNav />
        <NavLink
          href="/random-game"
          className={`px-4 py-2 determination ${checkPath("/random-game")}`}
        >
          <CubeIcon className="w-7 h-7 mr-1" /> Aleatório
        </NavLink>
      </div>

      {/* Center Section */}
      <button
        onClick={toggleSom}
        className="items-center absolute left-1/2 transform -translate-x-1/2 pt-12 px-10 z-20"
        title="Clique para ativar/desativar o som"
      >
        <Image
          src={"https://i.imgur.com/UCBgMJu.png"}
          width={150}
          height={150}
          alt={"Logo"}
          className="select-none transition duration-300 hover:scale-110"
        />
      </button>

      {/* Right Section */}
      <div className="flex flex-col items-center md:flex-row gap-5 z-10">
        <NavLink href="/#sale-off" className={`px-4 py-2 determination`}>
          <LiaGamepadSolid size={34} className="mr-1" /> Promoções
        </NavLink>
        <div className="relative group">
          <input
            className="determination border-2 border-black shadow-md shadow-zinc-900 bg-[#FFCB62] h-10 md:w-[18rem] px-5 pr-10 rounded-full text-sm placeholder:text-black text-black placeholder:opacity-75 placeholder:text-[1.05rem] focus:outline-none focus:border-3 focus:border-black"
            type="text"
            placeholder="Procure um jogo..."
          />
          <button className="absolute right-2 top-1/2 transform -translate-y-1/2 text-black">
            <MagnifyingGlassIcon className="w-8 h-8 group-hover:text-white transition duration-150 ease-in-out" />
          </button>
        </div>

        <NavLink href="/cart" className="px-4 py-2 flex rounded-full">
          <TiShoppingCart className="w-9 h-9 border-[3px] border-black hover:border-white transition duration-300 rounded-full" />
        </NavLink>

        <Suspense
          fallback={
            <NavLink href="/auth/login" className="px-4 py-2 flex">
              <BiUser className="w-9 h-9 border-[3px] border-black hover:border-white transition duration-300 rounded-full" />
            </NavLink>
          }
        >
          {data?.status ? (
            <NavLink href="/profile" className="px-4 py-2 flex">
              <Avatar className="rounded-full border-[3px] border-black">
                <AvatarImage
                  width={38}
                  height={38}
                  src="/statics/default-avatar.jpeg"
                  alt="profile"
                />
                <AvatarFallback>CP</AvatarFallback>
              </Avatar>
            </NavLink>
          ) : (
            <NavLink href="/auth/login" className="px-4 py-2 flex">
              <BiUser className="w-9 h-9 border-[3px] border-black hover:border-white transition duration-300 rounded-full" />
            </NavLink>
          )}
        </Suspense>
      </div>
    </nav>
  );
}
