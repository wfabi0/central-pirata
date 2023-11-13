"use client";

import Image from "next/image";
import Link from "next/link";
import { IoShareSocialOutline } from "react-icons/io5";
import { BsInstagram, BsTwitter, BsDiscord } from "react-icons/bs";
import { FaVolumeMute, FaVolumeUp } from "react-icons/fa";
import { BiSupport } from "react-icons/bi";
import { useSound } from "@/providers/SomProvider";
import FooterLink from "./FooterLink";

export default function Footer() {
  const { someState, toggleSom } = useSound();
  return (
    <footer className={`bg-[#F4B841] determination mt-auto`}>
      <div className="flex flex-row justify-center self-center items-center gap-2">
        <div className="flex-row flex text-center">
          <Image
            src={"https://i.imgur.com/LpmJJeM.png"}
            width={140}
            height={140}
            alt="Logo3"
            className=""
          />
          <div className="text-[1.4rem] flex self-center m-4 flex-col">
            <div className="items-center flex-row flex">
              CENTRAL PIRATA
              <div className="text-[1rem] ml-1.5">© 2023</div>
            </div>
            <div className="flex-col text-[0.95rem] self-start text-start">
              <div className="flex">Todos os direitos reservados.</div>
              <div className="flex">
                Imagens geradas por
                <Link
                  className="ml-1 hover:text-[#2b92ff] transition duration-300"
                  href={"https://www.bing.com/images/create"}
                >
                  Microsoft Bing
                </Link>
                .
              </div>
              <div className="flex">
                Desenvolvido por
                <Link
                  className="ml-1 hover:text-[#2b92ff] transition duration-300"
                  href={"https://github.com/wfabi0"}
                >
                  wfabi0
                </Link>
                .
              </div>
            </div>
          </div>
        </div>
        <div className="h-32 bg-white w-[1.5px] self-center rounded-full flex" />
        <div className="m-[2.20rem] flex-col" id="Redes Sociais">
          <div className="flex items-center flex-row text-[1.2rem] -ml-1">
            <IoShareSocialOutline className="mr-1" />
            Redes Sociais
          </div>
          <div className="flex flex-col gap-y-0.5 pt-1">
            <FooterLink
              icon={<BsInstagram className="mr-1" />}
              text="Instagram"
              href={"#"}
            />
            <FooterLink
              icon={<BsTwitter className="mr-1" />}
              text="Twitter"
              href={"#"}
            />
            <FooterLink
              icon={<BsDiscord className="mr-1" />}
              text="Discord"
              href={"#"}
            />
          </div>
        </div>
        <div className="h-32 bg-white w-[1.5px] self-center rounded-full flex" />
        <div className="m-[2.20rem] flex-col" id="Contato">
          <div className="flex items-center flex-row text-[1.2rem] -ml-1">
            <BiSupport className="mr-1" />
            Contato
          </div>
          <div className="flex flex-col gap-y-0.5 pt-1">
            <FooterLink text="Termos de Uso" href={"/terms-of-use"} />
            <FooterLink
              text="Política e Privacidade"
              href={"/privacity-policy"}
            />
            <FooterLink
              text="Procon-MG"
              href="https://www.mpmg.mp.br/portal/menu/areas-de-atuacao/cidadania/consumidor/"
            />
          </div>
        </div>
        <div className="h-32 bg-white w-[1.5px] self-center rounded-full flex" />
        <div className="m-[2.20rem] text-start flex self-center" id="Dados">
          <div className="items-center flex-col text-[0.95rem] -ml-1">
            <div className="text-end">
              Central Pirata Ltda. - CPNJ 00.000.000/0000-00
            </div>
            <div className="text-end">
              Rua Exemplo, n° 000 - Centro - Ipatinga, MG.
            </div>
            <div className="text-end">35160-004</div>
            <div className="justify-end pt-2 flex">
              <button onClick={toggleSom} className="justify-end flex">
                {!someState ? <FaVolumeUp /> : <FaVolumeMute />}
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
