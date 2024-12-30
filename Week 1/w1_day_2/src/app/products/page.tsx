interface Product {
    id: number;
    name: string;
}

interface ProductsPageProps {
    products: Product[];
}

const fetchProducts = async (): Promise<Product[]> => {
    const products: Product[] = [
        { id: 1, name: "Silicone wafer" },
        { id: 2, name: "Thermal paste" },
        { id: 3, name: "Deep clean gift voucher" }
    ];

    return products;
}

const ProductPage: React.FC<ProductsPageProps> = async () => {
    const products = await fetchProducts();

    return (
        <div>
            <h1>Product List</h1>
                <ul>
                    {products.map((product) => (
                        <li key={product.id}>{product.name}</li>
                    ))}
                </ul>
        </div>
    );
};

export default ProductPage;