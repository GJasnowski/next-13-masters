import { Paginator } from "../molecules/Paginator";
import { ProductListItem } from "../molecules/ProductListItem";
import { type ProductListItemFragment } from "@/gql/graphql";

export const ProductsList = ({
	products,
	currentPage,
	totalPages,
	hidePaginator = false,
	hrefBase = "/products",
}: {
	products: ProductListItemFragment[];
	currentPage: typeof hidePaginator extends true ? never : number;
	totalPages: typeof hidePaginator extends true ? never : number;
	hidePaginator: boolean;
	hrefBase: string;
}) => {
	return (
		<div>
			{hidePaginator ? (
				<></>
			) : (
				<div className="flex w-full justify-end pb-4">
					<Paginator hrefBase={hrefBase} currentPage={currentPage} totalPages={totalPages} />
				</div>
			)}
			<ul
				className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
				data-testid="products-list"
			>
				{products.map((product) => (
					<ProductListItem key={product.id} product={product} />
				))}
			</ul>
		</div>
	);
};
