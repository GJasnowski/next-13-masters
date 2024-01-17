import { type ProductType } from "../types";

export const ProductDetailedDescription = ({
	product: { description, price },
}: {
	product: ProductType;
}) => {
	return (
		<div>
			<div>{description}</div>
			<div className="mt-8 flex w-full justify-center font-bold">${price}</div>
		</div>
	);
};
