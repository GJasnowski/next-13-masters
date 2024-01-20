import {
	ProductsGetListDocument,
	type ProductListItemFragment,
	type ProductDetailedFragment,
	ProductGetByIdDocument,
	ProductsGetCountDocument,
	ProductsGetListByCategorySlugDocument,
	ProductsGetCountByCategorySlugDocument,
	ProductsRelatedGetListByIdDocument,
} from "@/gql/graphql";
import { executeGraphql } from "@/utils/api";
import { pageSize as pageSizeConst } from "@/utils/constants";

type PaginationProps = {
	page?: number;
	pageSize?: number;
};

export const getProduct = async (id: string): Promise<ProductDetailedFragment> => {
	const {
		products: [result],
	} = await executeGraphql(ProductGetByIdDocument, {
		id,
	});
	return result;
};

export const getProducts = async ({
	page = 1,
	pageSize = pageSizeConst,
	filter = "",
}: PaginationProps & { filter?: string }): Promise<{
	products: ProductListItemFragment[];
	totalPages: number;
}> => {
	const offset = (page - 1) * pageSize;

	const {
		products,
		productsConnection: {
			aggregate: { count },
		},
	} = await executeGraphql(ProductsGetListDocument, {
		count: pageSize,
		skip: offset,
		filter,
	});
	const totalPages = Math.ceil(count / pageSize);
	return { products, totalPages };
};

export const getProductsCount = async (): Promise<number> => {
	const {
		productsConnection: {
			aggregate: { count },
		},
	} = await executeGraphql(ProductsGetCountDocument);
	return count;
};

export const getProductsTotalPages = async (pageSize: number = pageSizeConst): Promise<number> => {
	const count = await getProductsCount();
	return Math.ceil(count / pageSize);
};

export const getProductsByCategorySlug = async (
	categorySlug: string,
	page: number = 1,
	pageSize: number = pageSizeConst,
): Promise<ProductListItemFragment[]> => {
	const offset = (page - 1) * pageSize;

	const { products } = await executeGraphql(ProductsGetListByCategorySlugDocument, {
		count: pageSize,
		skip: offset,
		categorySlug: categorySlug,
	});
	return products;
};

export const getProductsCountByCategorySlug = async (categorySlug: string): Promise<number> => {
	const {
		productsConnection: {
			aggregate: { count },
		},
	} = await executeGraphql(ProductsGetCountByCategorySlugDocument, { categorySlug });
	return count;
};

export const getProductsTotalPagesByCategorySlug = async (
	categorySlug: string,
	pageSize: number = pageSizeConst,
): Promise<number> => {
	const count = await getProductsCountByCategorySlug(categorySlug);
	return Math.ceil(count / pageSize);
};

export const getProductsRelatedById = async (id: string): Promise<ProductListItemFragment[]> => {
	const { products } = await executeGraphql(ProductsRelatedGetListByIdDocument, { id });
	return products;
};
