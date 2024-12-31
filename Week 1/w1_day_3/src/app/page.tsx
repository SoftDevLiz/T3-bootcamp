"use client"

import { useState } from "react";

export default function Home() {
  const [ dropdown, setDropdown ] = useState(false)

  return (
    <main>
      <nav className="p-4 flex justify-around bg-gradient-to-r from-red-500 to-orange-500 font-mono text-white">
        <h1 className="font-bold text-4xl">Tailwind Navbar</h1>
        <div className="text-2xl text-black font-semibold">
          <button type="button" onClick={() => setDropdown(prevState => !prevState)} className="mr-10 bg-white rounded-md px-3 py-2 ring-1 shadow-sm ring-inset ring-gray-300 hover:bg-gray-50">Dropdown 1</button>
            <h4 className={dropdown ? "block" : "hidden"}>I'm in here!</h4>
          <button type="button" className="mr-10 bg-white rounded-md px-3 py-2 ring-1 shadow-sm ring-inset ring-gray-300 hover:bg-gray-50">Dropdown 2</button>
          <button type="button" className="mr-10 bg-white rounded-md px-3 py-2 ring-1 shadow-sm ring-inset ring-gray-300 hover:bg-gray-50">Dropdown 3</button>
        </div>
      </nav>
    </main>
  );
}     
  