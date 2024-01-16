import { type ProductType } from "../types";
import { ProductImage } from "../atoms/ProductImage";
import { ProductDescription } from "../atoms/ProductDescription";

export const ProductListItem = ({ product }: { product: ProductType }) => {
	return (
		<li className="col-span-1 flex flex-col divide-y divide-gray-200 rounded-lg bg-slate-900 text-center shadow">
			<div className="flex w-full justify-center">
				<ProductImage product={product} />
			</div>
			<div className="rounded-b-lg bg-white">
				<ProductDescription product={product} />
			</div>
		</li>
	);
};
