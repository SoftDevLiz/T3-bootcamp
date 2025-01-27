
export default async function Home() {

  return (
      <div className="flex flex-col min-h-screen">
        <nav className="flex flex-row justify-end border-2 p-5">
          <h1>View my work</h1>
          <h1 className="ml-20 mr-20">Contact me</h1>
        </nav>
        <main className="flex flex-wrap gap-4">
          <p className="w-full sm:w-[calc(50%-0.5rem)] p-4 flex items-center justify-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          <img src="/juniordev.jpg" className="w-full sm:w-[calc(50%-0.5rem)] p-4 flex items-center justify-center"></img>
          <img src="/devmeme.png" className="w-full sm:w-[calc(50%-0.5rem)] p-4 flex items-center justify-center"></img>
          <p className="w-full sm:w-[calc(50%-0.5rem)] p-4 flex items-center justify-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </main>
      </div>
  );
}
