import { ProductDetailedDescription } from "../atoms/ProductDetailedDescription";
import { ProductImage } from "../atoms/ProductImage";
import { Title } from "../atoms/Title";
import { type ProductType } from "../types";

export const ProductShowcase = ({ product }: { product: ProductType }) => {
	return (
		<div>
			<Title>{product.title}</Title>
			<div className="flex w-full justify-center">
				<div className="grid max-w-3xl grid-cols-2 gap-6">
					<ProductDetailedDescription product={product} />
					<ProductImage product={product} className="rounded-t-xl" />
				</div>
			</div>
		</div>
	);
};
