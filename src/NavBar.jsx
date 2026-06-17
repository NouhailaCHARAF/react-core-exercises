import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
 const links = ["Home", "About", "Services", "Contact"];


  return (
    <nav className="bg-white shadow-md fixed w-full top-0 left-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">

      
        <h1 className="text-xl font-bold text-blue-600">
          MyBrand
        </h1>

      
        <ul className="hidden md:flex gap-6 text-gray-700 font-medium">

            {links.map((item)=>(<li className="hover:text-blue-500 cursor-pointer">{item}</li>))}
          
          
        </ul>

        
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-3xl text-gray-700"
        >
          {open ? "✖" : "☰"}
        </button>

          <button className=" hidden md:block px-4 py-2 rounded-2xl bg-red-500 hover:bg-red-800 text-white ">Contact us</button>
      </div>

     
      {open && (
        <ul className="md:hidden flex flex-col gap-4 px-6 pb-4 text-gray-700 font-medium bg-white shadow-md">
          <li className="hover:text-blue-500 cursor-pointer">Home</li>
          <li className="hover:text-blue-500 cursor-pointer">About</li>
          <li className="hover:text-blue-500 cursor-pointer">Services</li>
          <li className="hover:text-blue-500 cursor-pointer">Contact</li>
        </ul>
      )}

    
    </nav>

  );
}