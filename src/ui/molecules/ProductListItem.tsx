import Link from "next/link";
import { ProductImage } from "../atoms/ProductImage";
import { ProductBasicData } from "../atoms/ProductBasicData";
import { type ProductListItemFragment } from "@/gql/graphql";

export const ProductListItem = ({ product }: { product: ProductListItemFragment }) => {
	return (
		<li className="col-span-1 flex flex-col rounded-lg text-center shadow transition-all hover:scale-105">
			<Link href={`/product/${product.id}`}>
				<div className="flex items-end justify-center">
					<ProductImage product={product} className="h-64 rounded-t-xl bg-slate-800" />
				</div>
				<div className="rounded-b-lg">
					<ProductBasicData product={product} className="rounded-b-xl" />
				</div>
			</Link>
		</li>
	);
};
