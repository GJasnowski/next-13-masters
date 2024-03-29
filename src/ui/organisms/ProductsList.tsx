import { Paginator } from "../molecules/Paginator";
import { ProductListItem } from "../molecules/ProductListItem";
import { type ProductListItemFragment } from "@/gql/graphql";

export const ProductsList = ({
	products,
	currentPage,
	totalPages,
	hrefBase = "/products",
	testId = "products-list",
}:
	| {
			products: ProductListItemFragment[];
			currentPage?: undefined;
			totalPages?: undefined;
			hrefBase?: string;
			testId?: string;
	  }
	| {
			products: ProductListItemFragment[];
			currentPage: number;
			totalPages: number;
			hrefBase?: string;
			testId?: string;
	  }) => {
	return (
		<div>
			{currentPage !== undefined && (
				<div className="flex w-full justify-end pb-4">
					<Paginator hrefBase={hrefBase} currentPage={currentPage} totalPages={totalPages} />
				</div>
			)}
			<ul
				className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
				data-testid={testId}
			>
				{products.map((product) => (
					<ProductListItem key={product.id} product={product} />
				))}
			</ul>
		</div>
	);
};
