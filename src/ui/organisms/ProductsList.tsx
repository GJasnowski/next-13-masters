import { Paginator } from "../molecules/Paginator";
import { ProductListItem } from "../molecules/ProductListItem";
import { type ProductListItemFragment } from "@/gql/graphql";
import { productsPagesCount } from "@/utils/constants";

export const ProductsList = ({
	products,
	currentPage,
	hidePaginator = false,
}: {
	products: ProductListItemFragment[];
	currentPage: number;
	hidePaginator?: boolean;
}) => {
	return (
		<div>
			{hidePaginator ? (
				<></>
			) : (
				<div className="flex w-full justify-end pb-4">
					<Paginator
						hrefBase={`/products`}
						currentPage={currentPage}
						totalPages={productsPagesCount}
					/>
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
