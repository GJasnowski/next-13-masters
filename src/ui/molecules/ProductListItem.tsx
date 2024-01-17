import Link from "next/link";
import { type ProductType } from "../types";
import { ProductImage } from "../atoms/ProductImage";
import { ProductDescription } from "../atoms/ProductDescription";

export const ProductListItem = ({ product }: { product: ProductType }) => {
	return (
		<li className="rounded-lgtext-center col-span-1 flex flex-col shadow transition-all hover:scale-105">
			<Link href={`/products/${product.id}`}>
				<div className="flex justify-center">
					<ProductImage product={product} className="h-64 rounded-t-xl" />
				</div>
				<div className="rounded-b-lg ">
					<ProductDescription product={product} className="rounded-b-xl" />
				</div>
			</Link>
		</li>
	);
};
