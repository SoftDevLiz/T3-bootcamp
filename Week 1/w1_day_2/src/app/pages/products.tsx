import { getStaticProps } from "next/dist/build/templates/pages";

interface Product {
    id: number;
    name: string;
}

interface ProductsPageProps {
    products: Product[];
}

export const ownGetStaticProps: typeof getStaticProps<Props> = async () => {
    const products: Product[] = [
        { id: 1, name: "Path of Exile 2" },
        { id: 2, name: "Wrench" },
        { id: 3, name: "Hot sauce" },
    ];

    return {
        props: { products }
    };
};