interface ProductPageProps {
    params: { sku: string };
}

const ProductPage: React.FC<ProductPageProps> = ({ params }) => {
    const { sku } = params;

    return (
        <div className="flex items-center justify-center h-screen font-mono text-4xl">
            <h2>You are viewing SKU {sku}</h2>
        </div>
    )
}

export default ProductPage;