"use client";

import { usePathname } from "next/navigation";

import Link from "next/link";
const Menu = ({ label }) => {
  const pathname = usePathname();
<<<<<<< HEAD

=======
>>>>>>> 462c085e028c03084b21b0631dbe92da7957169d
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
