import { type ProductType } from "../types";

export const ProductDetailedDescription = ({
	product: { longDescription, price },
}: {
	product: ProductType;
}) => {
	return (
		<div>
			<div>{longDescription}</div>
			<div className="mt-8 flex w-full justify-center font-bold">${price}</div>
		</div>
	);
};
