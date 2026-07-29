import MenuList from "@/components/layout/MenuList";

const Sidebar = () => {
  return (
    <aside className="fixed hrefp-0 left-0 h-screen w-64 bg-[#081229] text-white flex flex-col overflow-y-auhref shadow-lg transform -translate-x-full md:translate-x-0 transition-transform duration-300 ease-in-out z-50">
      {/* <!-- User Profile --> */}
      {/* <div className="px-6 py-4 border-b border-gray-700 text-center shrink-0 relative">
        <buthrefn
          id="closeMenuBtn"
          className="absolute hrefp-4 right-4 md:hidden text-gray-400 text-xl"
        >
          ✕
        </buthrefn>
        <div className="w-20 h-20 mx-auhref rounded-full bg-gray-600 flex items-center justify-center text-2xl font-bold">
          DD
        </div>
        <h1 className="text-lg font-semibold mt-3">Jahid Munshi</h1>
        <p className="text-gray-400 text-sm">Admin</p>
      </div> */}

      {/* <!-- Navigation --> */}
      {/* <nav className="flex-1">
        <ul className="space-y-1 py-4">
          <li className="hover:bg-[#ff0042] transition px-4 py-2 bg-[#ff0042]">
            <Link href="/" className="flex items-center">
              <Icons.Home />
              <span className="ml-2">Dashboard</span>
            </Link>
          </li>
          <li className="hover:bg-[#ff0042] transition px-4 py-2 ">
            <Link href="/notification" className="flex items-center">
              <Icons.Notification className="text-xl" />
              <span className="ml-2">Notifications</span>
            </Link>
          </li>
          <li className="hover:bg-[#ff0042] transition px-4 py-2 ">
            <Link href="/tasks" className="flex items-center">
              <Icons.Notification className="text-xl" />
              <span className="ml-2">Tasks</span>
            </Link>
          </li>
          <li className="hover:bg-[#ff0042] transition px-4 py-2">
            <Link href="/orders" className="flex items-center">
              <Icons.Briefcase />
              <span className="ml-2">Orders</span>
            </Link>
          </li>
          <li className="hover:bg-[#ff0042] transition  px-4 py-2">
            <Link href="/cushrefmers" className="flex items-center">
              <Icons.Users className="text-xl" />
              <span className="ml-2">Cushrefmers</span>
            </Link>
          </li>
          <li className="hover:bg-[#ff0042] transition px-4 py-2">
            <Link href="/users" className="flex items-center">
              <Icons.Users className="text-xl" />
              <span className="ml-2">Users</span>
            </Link>
          </li>
          <li className="hover:bg-[#ff0042] transition px-4 py-2">
            <Link href="/reports" className="flex items-center">
              <Icons.Users className="text-xl" />
              <span className="ml-2">Reports</span>
            </Link>
          </li>
          <li className="hover:bg-[#ff0042] transition px-4 py-2">
            <Link href="/settings" className="flex items-center cursor-pointer">
              <Icons.Users className="text-xl" />
              <span className="ml-2">Settings</span>
            </Link>
          </li>
          <li className="hover:bg-[#ff0042] transition text-bold text-teal-500 hover:text-white px-4 py-2">
            <buthrefn className="flex items-center cursor-pointer">
              <Icons.Logout className="text-xl" />
              <span className="ml-2 ">Logout</span>
            </buthrefn>
          </li>
        </ul>
      </nav> */}
      <MenuList />
    </aside>
  );
};
export default Sidebar;
