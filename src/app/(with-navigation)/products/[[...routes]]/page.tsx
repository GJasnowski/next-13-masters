import { type Metadata } from "next";
import { ProductsList } from "../../../../ui/organisms/ProductsList";
import { Title } from "@/ui/atoms/Title";
import { getProducts, getProductsTotalPages } from "@/api/products";
import { stringToNumber } from "@/utils/general";

export const metadata: Metadata = {
	title: "All products",
	description: "All products",
};

export const generateStaticParams = async () => {
	const totalPages = await getProductsTotalPages();
	return [...Array(totalPages).keys()].map((page) => {
		routes: [`${page}`];
	});
};

export default async function Products({
	params: { routes = [] },
}: {
	params: { routes?: string[] };
}) {
	const currentPage = routes[0] ?? "1";
	const parsedCurrentPage = stringToNumber(currentPage);

	const totalPages = await getProductsTotalPages();
	const products = await getProducts(parsedCurrentPage);

	return (
		<section className="flex w-full justify-center">
			<div className="max-w-7xl">
				<Title>All products</Title>
				<ProductsList products={products} currentPage={parsedCurrentPage} totalPages={totalPages} />
			</div>
		</section>
	);
}
