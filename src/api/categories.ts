import {
	type CategoryDetailedFragment,
	CategoryGetBySlugDocument,
	type CategoryListItemFragment,
	CategoriesGetListDocument,
} from "@/gql/graphql";
import { executeGraphql } from "@/utils/api";

export const getCategoryBySlug = async (slug: string): Promise<CategoryDetailedFragment> => {
	const {
		categories: [result],
	} = await executeGraphql(CategoryGetBySlugDocument, { slug });
	return result;
};

export const getCategories = async (): Promise<CategoryListItemFragment[]> => {
	const { categories } = await executeGraphql(CategoriesGetListDocument, {});
	return categories;
};
