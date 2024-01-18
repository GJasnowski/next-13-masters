import {
	ProductsGetListDocument,
	type ProductListItemFragment,
	type ProductDetailedFragment,
	ProductGetByIdDocument,
	ProductsGetCountDocument,
} from "@/gql/graphql";
import { executeGraphql } from "@/utils/api";
import { pageSize as pageSizeConst } from "@/utils/constants";

export const getProducts = async (
	page: number = 1,
	pageSize: number = pageSizeConst,
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

export const getProductsCount = async (): Promise<number> => {
	const {
		productsConnection: {
			aggregate: { count },
		},
	} = await executeGraphql(ProductsGetCountDocument, {});
	return count;
};

export const getProductsTotalPages = async (pageSize: number = pageSizeConst): Promise<number> => {
	const count = await getProductsCount();
	return Math.ceil(count / pageSize);
};
