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

export const getProduct = async (id: string): Promise<ProductDetailedFragment | undefined> => {
	const { product } = await executeGraphql(ProductGetByIdDocument, {
		id,
	});
	return product ?? undefined;
};

export const getProducts = async ({
	page = 1,
	pageSize = pageSizeConst,
	needle = "",
}: PaginationProps & { needle?: string }): Promise<{
	products: ProductListItemFragment[];
	totalPages: number;
}> => {
	const offset = (page - 1) * pageSize;

	const { products, productsCount } = await executeGraphql(ProductsGetListDocument, {
		count: pageSize,
		skip: offset,
		needle,
	});
	const totalPages = Math.ceil(productsCount / pageSize);
	return { products, totalPages };
};

export const getProductsCount = async (): Promise<number> => {
	const { productsCount } = await executeGraphql(ProductsGetCountDocument);
	return productsCount;
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
	const { productsCount } = await executeGraphql(ProductsGetCountByCategorySlugDocument, {
		categorySlug,
	});
	return productsCount;
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
