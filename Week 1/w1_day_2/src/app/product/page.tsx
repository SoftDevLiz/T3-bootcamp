import Link from "next/link";

const Products: React.FC = () => {
    return (
        <div className="font-mono">
            <h1 className="text-4xl font-bold mt-10 text-center">Products</h1>
            <div className="flex flex-row justify-center mt-10">
                <li className="mr-5">
                    <Link href="/product/1" className="hover:underline">Product 1</Link>
                </li>
                <li className="mr-5">
                    <Link href="/product/2" className="hover:underline">Product 2</Link>
                </li>
                <li className="mr-5">
                    <Link href="/product/3" className="hover:underline">Product 3</Link>
                </li>
            </div>

        </div>
    )
}

export default Products;