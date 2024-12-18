import Link from "next/link";

const Homepage: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen font-mono">
      <h1 className="text-4xl font-bold">This is the homepage</h1>
      <Link href="/product" className="text-xl font-bold hover:underline">View products</Link>
    </div>
  );
};

export default Homepage;