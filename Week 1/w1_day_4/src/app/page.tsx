"use client"

import { useState, useEffect } from 'react';

export default function Home() {
const [dateTime, setDateTime] = useState<string | null>(null)

useEffect(() => {
  const timer = setInterval(() => {setDateTime(new Date().toLocaleString())})

  return () => clearInterval(timer)
}, []);

  return (
      <div className="flex flex-col min-h-screen">
        <header>
          <nav className="flex w-screen h-20 justify-around items-center border-t">
            <h1 className="text-4xl">Tailwind CSS Homepage</h1>
            <button className="bg-[linear-gradient(45deg,transparent_25%,rgba(68,68,68,.2)_50%,transparent_75%,transparent_100%)] bg-zinc-950 relative border border-slate-900 bg-[length:250%_250%,100%_100%] bg-[position:-100%_0,0_0] bg-no-repeat shadow-2xl transition-[background-position_0s_ease] hover:bg-[position:200%_0,0_0] hover:duration-[1500ms] motion-safe:animate-bounce rounded-md text-xl text-white font-semibold p-1">Try me</button>
          </nav>
        </header>
        <main className="flex flex-col flex-grow items-center justify-center bg-mainGradient bg-cover">
          <h1 className="text-4xl m-10 text-white">Welcome to the homepage!</h1>
          <a href="#_" className="relative inline-block px-4 py-2 font-medium group">
          <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-buttonGradient group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
          <span className="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-buttonGradient group-hover:border-white"></span>
          <span className="relative text-black group-hover:text-white">Hover over me</span>
          </a>
        </main>
        <footer className="flex flex-col items-center p-4 bg-gray-100 border-t">
          <p className='mb-2'>This page taught me about animations, custom colour schemes, and theming with Tailwind CSS.</p>
          <p className='mb-2'>Done on 01-01-2025!</p>
          <p>Your time is {dateTime}</p>
        </footer>
      </div>
  );
}

