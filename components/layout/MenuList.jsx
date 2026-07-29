import Menu from "@/components/layout/Menu.jsx";
import { menuList } from "../../data/menuslist.js";

const MenuList = () => {
  const menus = menuList();
  return (
    <nav className="flex-1 mt-12">
      <ul className="space-y-1 py-4">
        {menus.map((item, index) => (
          <Menu label={item} key={index} />
        ))}

        <li>
          <button
            type="button"
            className="flex w-full items-center px-4 py-2 font-bold text-teal-500 transition-colors hover:bg-[#ff0042] hover:text-white"
          >
            {/* <Icons.Logout className="text-xl" /> */}
            <span className="ml-2">Logout</span>
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default MenuList;
