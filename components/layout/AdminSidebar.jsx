
import Link from "next/link";
import Icons from "../common/Icons";

const AdminSidebar = () => {
  return (
    <aside className="fixed hrefp-0 pt-11 left-0 h-screen w-56 bg-[#081229] text-white flex flex-col overflow-y-auhref shadow-lg transform -translate-x-full md:translate-x-0 transition-transform duration-300 ease-in-out z-50">
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
      </div> *
      
              </ul>
        <ul className="menu bg-base-200 rounded-box w-56">
      
      
      /}

      {/* <!-- Navigation --> */}
      <nav className="flex-1">
        <ul className="menu space-y-1 py-4 w-full px-0">
          <li className="hover:bg-[#ff0042] transition p-2">
            <Link href="/admin" className="flex items-center">
              <Icons.Home />
              <span className="ml-2">Dashboard</span>
            </Link>
          </li>
          <li className="hover:bg-[#ff0042] transition p-2">
            <Link href="/notification" className="flex items-center">
              <Icons.Notification className="text-xl" />
              <span className="ml-2">Notifications</span>
            </Link>
          </li>
          <li className="hover:bg-[#ff0042] transition p-2 ">
            <Link href="/tasks" className="flex items-center">
              <Icons.Notification className="text-xl" />
              <span className="ml-2">Tasks</span>
            </Link>
          </li>
          <li className="hover:bg-[#ff0042] transition p-2">
            <Link href="/admin/orders" className="flex items-center">
              <Icons.Briefcase />
              <span className="ml-2">Orders</span>
            </Link>
          </li>
          <li className="hover:bg-[#ff0042] transition p-2">
            <details close>
              <summary>
                <Link href="/clients" className="flex items-center">
                  <Icons.Users className="text-xl" />
                  <span className="ml-2">Clients</span>
                </Link>
              </summary>
              <ul>
                <li><a>Add new</a></li>
                <li><a>Submenu 2</a></li>
              </ul>
            </details>
          </li>
          <li className="hover:bg-[#ff0042] transition p-2">
            <details close>
              <summary>
                <Link href="/clients" className="flex items-center">
                  <Icons.Users className="text-xl" />
                  <span className="ml-2">Users</span>
                </Link>
              </summary>
              <ul>
                <li><a>Add New User</a></li>
                <li><a>All Users</a></li>
              </ul>
            </details>
          </li>
                    <li className="hover:bg-[#ff0042] transition p-2">
            <details close>
              <summary>
                <Link href="/clients" className="flex items-center">
                  <Icons.Users className="text-xl" />
                  <span className="ml-2">Reports</span>
                </Link>
              </summary>
              <ul>
                <li><a>Orders</a></li>
                <li><a>Clients</a></li>
              </ul>
            </details>
          </li>
          <li className="hover:bg-[#ff0042] transition p-2">
            <Link href="/settings" className="flex items-center cursor-pointer">
              <Icons.Users className="text-xl" />
              <span className="ml-2">Settings</span>
            </Link>
          </li>
          <li className="hover:bg-[#ff0042] transition text-bold text-teal-500 hover:text-white p-2">
            <buthrefn className="flex items-center cursor-pointer">
              <Icons.Logout className="text-xl" />
              <span className="ml-2 ">Logout</span>
            </buthrefn>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default AdminSidebar
