import { useState } from "react";

export default function SideBar() {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex min-h-screen">

      
      <button
        className="md:hidden fixed top-4 left-4 z-50 text-2xl "
        onClick={() => setOpen(!open)}
      >
        {open ? "✖" : "☰"}
      </button>

      
      <aside
        className={`
          fixed md:static top-0 left-0 h-full w-64 bg-gray-100 shadow-lg border-r
          transform transition-transform duration-300
          ${open ? "translate-x-0" : "-translate-x-full"}
          md:translate-x-0
        `}
      >
        <div className="pt-20 pl-6 pb-2 text-xl font-bold border-b ">
          My Dashboard
        </div>

        <nav className="p-4 space-y-2">
          <a className="block px-4 py-2 rounded-lg hover:bg-blue-500 hover:text-white">
            Home
          </a>
          <a className="block px-4 py-2 rounded-lg hover:bg-blue-500 hover:text-white">
            Users
          </a>
          <a className="block px-4 py-2 rounded-lg hover:bg-blue-500 hover:text-white">
            Projects
          </a>
          <a className="block px-4 py-2 rounded-lg hover:bg-blue-500 hover:text-white">
            Settings
          </a>
        </nav>
      </aside>

     
      <main className="flex-1 p-8">
        <h1 className="text-2xl font-bold">Main Content</h1>
        <p className="text-gray-600 mt-2">
          This is your dashboard content area.
        </p>
      </main>

    </div>
  );
}