import { type Metadata } from "next";
import { notFound } from "next/navigation";
import { ProductsList } from "../../../../ui/organisms/ProductsList";
import { Title } from "@/ui/atoms/Title";
import { getProducts, getProductsTotalPages } from "@/api/products";
import { isBetween, stringToNumber } from "@/utils/general";

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
	params: { currentPage },
}: {
	params: { currentPage: string };
}) {
	const parsedCurrentPage = stringToNumber(currentPage);
	const totalPages = await getProductsTotalPages();

	if (!isBetween(parsedCurrentPage, 1, totalPages)) return notFound();

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
