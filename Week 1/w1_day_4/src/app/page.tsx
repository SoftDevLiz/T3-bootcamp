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
          <nav className="flex w-screen h-20 justify-around items-center border-2 border-black">
            <h1 className="text-4xl">Tailwind CSS Homepage</h1>
            <button className="motion-safe:animate-bounce border-2 border-black rounded-md hover:bg-gray-200 text-xl font-semibold">Try me</button>
          </nav>
        </header>
        <main className="flex flex-col flex-grow items-center justify-center bg-mainGradient bg-cover">
          <h1 className="text-4xl m-10">Welcome to the homepage!</h1>
          <button className="border-2 border-black rounded-md hover:bg-gray-200 text-xl font-semibold">Hover over me</button>
        </main>
        <footer className="flex flex-col items-center p-4 bg-gray-100 border-t">
          <p className='mb-2'>This page taught me about animations, custom colour schemes, and theming with Tailwind CSS.</p>
          <p className='mb-2'>Done on 01-01-2025!</p>
          <p>Your time is {dateTime}</p>
        </footer>
      </div>
  );
}

