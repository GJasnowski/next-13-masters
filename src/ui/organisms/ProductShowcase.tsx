import { ProductDetailedDescription } from "../atoms/ProductDetailedDescription";
import { ProductImage } from "../atoms/ProductImage";
import { Title } from "../atoms/Title";
import { type ProductDetailedFragment } from "@/gql/graphql";

export const ProductShowcase = ({ product }: { product: ProductDetailedFragment }) => {
	return (
		<div>
			<Title>{product.name}</Title>
			<div className="flex w-full justify-center">
				<div className="grid max-w-3xl grid-cols-2 gap-6">
					<ProductDetailedDescription product={product} />
					<div>
						<ProductImage product={product} className="rounded-xl" />
					</div>
				</div>
			</div>
		</div>
	);
};
