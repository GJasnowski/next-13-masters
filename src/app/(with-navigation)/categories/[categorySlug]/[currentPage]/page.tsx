import { notFound } from "next/navigation";
import { type Metadata } from "next";
import { getProductsByCategorySlug, getProductsTotalPagesByCategorySlug } from "@/api/products";
import { Title } from "@/ui/atoms/Title";
import { isBetween, stringToNumber } from "@/utils/general";
import { ProductsList } from "@/ui/organisms/ProductsList";
import { getCategories, getCategoryBySlug } from "@/api/categories";

export const generateMetadata = async ({
	params: { categorySlug },
}: {
	params: { categorySlug: string };
}): Promise<Metadata> => {
	const category = await getCategoryBySlug(categorySlug);
	return {
		title: category?.name,
	};
};

export const generateStaticParams = async () => {
	const categories = await getCategories();
	return categories.map((category) => ({
		params: { categorySlug: category.slug, currentPage: "1" },
	}));
};

export default async function Category({
	params: { categorySlug, currentPage },
}: {
	params: { categorySlug: string; currentPage: string };
}) {
	const category = await getCategoryBySlug(categorySlug);
	if (!category) return notFound();

	const parsedCurrentPage = stringToNumber(currentPage);
	const totalPages = await getProductsTotalPagesByCategorySlug(categorySlug);

	if (!isBetween(parsedCurrentPage, 1, totalPages)) return notFound();

	const products = await getProductsByCategorySlug(categorySlug, parsedCurrentPage);

	return (
		<section>
			<Title>{category.name}</Title>
			<ProductsList
				products={products}
				currentPage={parsedCurrentPage}
				totalPages={totalPages}
				hrefBase={`/categories/${categorySlug}`}
			/>
		</section>
	);
}
