"use client";

import { usePathname } from "next/navigation";

import Link from "next/link";
const Menu = ({ label }) => {
  const pathname = usePathname();

  return (
    <li
      className={`hover:bg-[#ff0042] transition px-4 py-2 ${pathname === "/" + label.name ? "bg-[#ff0042]" : ""}`}
    >
      <Link href={`/${label.name.toLowerCase()}`} className="flex items-center">
        {/* <Icons.Home /> */}
        {/* {menu.icon} */}
        <span className="ml-2 capitalize">{label.name}</span>
      </Link>
    </li>
  );
};

export default Menu;
