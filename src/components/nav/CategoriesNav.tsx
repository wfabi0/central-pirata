"use client";

import { TagIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import { FaRegNewspaper, FaMedal } from "react-icons/fa";
import CategoriesLinkNav from "./CategoriesLinkNav";

interface CategoriaesNavProps {
  children?: React.ReactNode;
}

const Categories = [
  {
    name: "Mais Visitados",
    href: "/#most-visited",
    icon: <FaMedal className="w-4 h-4 mr-1" />,
  },
  {
    name: "Lançamentos",
    href: "/#releases",
    icon: <FaRegNewspaper className="w-4 h-4 mr-1" />,
  },
];

export default function CategoriesNav() {
  const [dropdown, setDropdown] = useState(false);
  return (
    <div
      className="inline-block text-black text-[1.2rem] items-center cursor-default hover:text-white transition duration-300 ease-in-out"
      onMouseEnter={() => setDropdown(true)}
      onMouseLeave={() => setDropdown(false)}
    >
      <div
        className={`px-4 py-2 determination relative transition duration-300 ease-in-out`}
      >
        <div className="flex items-center">
          <TagIcon className="w-7 h-7 mr-1" />
          Categorias
        </div>
        {dropdown && (
          <div
            className="absolute mt-2 bg-white border border-gray-300 divide-y divide-gray-300 rounded-md shadow-lg"
            onMouseEnter={() => setDropdown(true)}
            onMouseLeave={() => setDropdown(false)}
          >
            {Categories.map((category, index) => (
              <CategoriesLinkNav
                title={category.name}
                href={category.href}
                icon={category.icon}
                key={index}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
