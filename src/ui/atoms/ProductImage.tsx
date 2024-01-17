import { twMerge } from "tailwind-merge";
import { type ProductType } from "../types";

export const ProductImage = ({
	product: { imageSrc, description },
	className,
}: {
	product: ProductType;
	className?: string;
}) => {
	const wrapperClass = twMerge("h-64 overflow-hidden", className);
	return (
		<div className={wrapperClass}>
			<img src={imageSrc} alt={description} />
		</div>
	);
};
