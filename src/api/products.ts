import {
	ProductsGetListDocument,
	type ProductListItemFragment,
	type ProductDetailedFragment,
	ProductGetByIdDocument,
} from "@/gql/graphql";
import { executeGraphql } from "@/utils/api";

export const getProducts = async (
	page: number = 1,
	pageSize: number = 4,
): Promise<ProductListItemFragment[]> => {
	const offset = (page - 1) * pageSize;

	const { products } = await executeGraphql(ProductsGetListDocument, {
		count: pageSize,
		skip: offset,
	});
	return products;
};

export const getProduct = async (id: string): Promise<ProductDetailedFragment> => {
	const {
		products: [result],
	} = await executeGraphql(ProductGetByIdDocument, {
		id,
	});
	return result;
};
