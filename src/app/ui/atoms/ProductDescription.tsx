import { type ProductType } from "../types";

export const ProductDescription = ({
	product: { name, description, price },
}: {
	product: ProductType;
}) => {
	return (
		<div className="flex h-32 flex-col text-slate-900">
			<h3 className="title-font text-lg font-medium">{name}</h3>
			<p className="mt-2 flex-grow">{description}</p>
			<p className="mb-1 mt-2">${price}</p>
		</div>
	);
};
