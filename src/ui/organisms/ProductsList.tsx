import { Paginator } from "../molecules/Paginator";
import { ProductListItem } from "../molecules/ProductListItem";
import { type ProductType } from "../types";
import { productsPagesCount } from "@/utils/constants";

export const ProductsList = ({
	products,
	currentPage,
}: {
	products: ProductType[];
	currentPage: number;
}) => {
	return (
		<div>
			<div className="flex w-full justify-end pb-2">
				<Paginator
					hrefBase={`/products`}
					currentPage={currentPage}
					totalPages={productsPagesCount}
				/>
			</div>
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
