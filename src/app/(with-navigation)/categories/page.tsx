import { type Metadata } from "next";
import { getCategories } from "@/api/categories";
import { Title } from "@/ui/atoms/Title";
import { CategoriesSelectionList } from "@/ui/organisms/CategoriesSelectionList";

export const metadata: Metadata = {
	title: "Categories",
};

export default async function Categories() {
	const categories = await getCategories();

	return (
		<section className="flex w-full justify-center">
			<div className="max-w-7xl">
				<Title>All categories</Title>
				<CategoriesSelectionList categories={categories} />
			</div>
		</section>
	);
}
