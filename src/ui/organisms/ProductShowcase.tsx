import { ProductDetailedDescription } from "../atoms/ProductDetailedDescription";
import { ProductImage } from "../atoms/ProductImage";
import { ProductVariantSelector } from "../atoms/ProductVariantSelector";
import { Title } from "../atoms/Title";
import { type ProductDetailedFragment } from "@/gql/graphql";

export const ProductShowcase = ({ product }: { product: ProductDetailedFragment }) => {
	return (
		<div>
			<Title>{product.name}</Title>
			<div className="flex w-full justify-center">
				<div className="grid max-w-3xl grid-cols-2 gap-6">
					<div>
						<div className="mb-4 w-full">
							<ProductVariantSelector product={product} />
						</div>
						<ProductDetailedDescription product={product} />
					</div>
					<div>
						<ProductImage product={product} className="rounded-xl" />
					</div>
				</div>
			</div>
		</div>
	);
};
