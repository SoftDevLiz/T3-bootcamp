"use client"

import { Carousel } from "react-responsive-3d-carousel";
import "react-responsive-3d-carousel/dist/styles.css";
import Link from "next/link";

const items = [
  <img src="/Project 1.png" />,
  <img src="/Project 1-2.png" />,
  <img src="/Project 1-3.png" />
]

const Portfolio: React.FC = () => {
    return (
      <main className="min-h-screen">
        <div className="flex flex-col gap-10 items-center mt-10">
          <h1>Portfolio</h1>
          <p className="ml-20 mr-20">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          <Carousel
          items={items}
          />
          <Link href="/contact" className="mt-5">Get in touch</Link>
        </div>
      </main> 
    );
  };
  
  export default Portfolio;