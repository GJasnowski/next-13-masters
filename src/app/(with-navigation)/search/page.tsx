import { type Metadata } from "next";
import { Title } from "@/ui/atoms/Title";
import { getProducts, getProductsTotalPages } from "@/api/products";
import { ProductsList } from "@/ui/organisms/ProductsList";

export const metadata: Metadata = {
	title: "All products",
	description: "All products",
};

export const generateStaticParams = async () => {
	const totalPages = await getProductsTotalPages();
	return [...Array(totalPages).keys()].map((page) => ({
		params: { currentPage: `${page}` },
	}));
};

export default async function SearchProducts({
	searchParams: { query },
}: {
	searchParams: { query: string };
}) {
	const { products } = await getProducts({ needle: query });

	return (
		<section className="flex w-full justify-center">
			<div className="max-w-7xl">
				<Title>Results for the phrase: &quot;{query}&quot;</Title>
				<ProductsList products={products} />
			</div>
		</section>
	);
}
