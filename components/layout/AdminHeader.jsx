const AdminHeader = () => {
  return (
    <header className="w-full bg-[#081229] shadow-sm p-4 flex items-center justify-between z-100 fixed top-0 left-0">
      <span className="text-xl text-white">
        Welcome to Proghive Task Management System
      </span>

      <div className="flex items-center space-x-4">
        {/* Menu button (mobile only) */}
        <button id="openMenuBtn" className="md:hidden text-gray-300 text-2xl">
          ☰
        </button>
      </div>
    </header>
  );
};

export default AdminHeader
