import { ProductListItem } from "../molecules/ProductListItem";
import { type ProductType } from "../types";

export const ProductsList = ({ products }: { products: ProductType[] }) => {
	return (
		<ul
			className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
			data-testid="products-list"
		>
			{products.map((product) => (
				<ProductListItem key={product.id} product={product} />
			))}
		</ul>
	);
};
