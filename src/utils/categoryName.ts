import { FaRegUser } from "react-icons/fa";
import { LuSwords, LuUsers } from "react-icons/lu";
import { TbUsersGroup } from "react-icons/tb";
import { PiUsersThreeBold } from "react-icons/pi";

export function categoryName(str: string) {
  const categories = {
    action: "ação",
    aventure: "aventura",
    anime: "anime",
    animation: "animação",
    fight: "luta",
    fantasy: "fantasia",
    rpg: "rpg",
    soulslike: "soulslike",
    shot: "tiro",
    ninja: "ninja",
    "open-world": "mundo aberto",
  }[str.toLowerCase()];
  return categories;
}

export function categoryMode(str: string) {
  const categories = {
    coop: "Cooperativo",
    "coop-on": "Coop online",
    pvp: "PVP",
    solo: "Um jogador",
    multi: "Multijogador",
  }[str];
  return categories;
}

export function categoryModeIcon(str: string) {
  const categories = {
    coop: LuUsers,
    "coop-on": TbUsersGroup,
    pvp: LuSwords,
    solo: FaRegUser,
    multi: PiUsersThreeBold,
  }[str];
  return categories;
}
