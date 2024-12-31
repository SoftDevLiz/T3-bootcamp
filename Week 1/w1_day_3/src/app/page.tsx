export default async function Home() {

  return (
    <main>
      <nav className="p-4 flex justify-around bg-gradient-to-r from-red-500 to-orange-500 font-mono text-white">
        <h1 className="font-bold text-4xl">Tailwind Navbar</h1>
        <div className="text-2xl">
          <button className="mr-10">Dropdown 1</button>
          <button className="mr-10">Dropdown 2</button>
          <button>Dropdown 3</button>
        </div>
      </nav>
    </main>
  );
}
