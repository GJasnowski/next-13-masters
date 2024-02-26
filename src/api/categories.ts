import {
	type CategoryDetailedFragment,
	CategoryGetBySlugDocument,
	type CategoryListItemFragment,
	CategoriesGetListDocument,
} from "@/gql/graphql";
import { executeGraphql } from "@/utils/api";

export const getCategoryBySlug = async (
	slug: string,
): Promise<CategoryDetailedFragment | undefined> => {
	const { categories } = await executeGraphql(CategoryGetBySlugDocument, { slug });
	return categories[0] ?? undefined;
};

export const getCategories = async (): Promise<CategoryListItemFragment[]> => {
	const { categories } = await executeGraphql(CategoriesGetListDocument);
	return categories;
};
