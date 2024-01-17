import { twMerge } from "tailwind-merge";
import { type ProductType } from "../types";

export const ProductDescription = ({
	product: { title, description, price },
	className,
}: {
	product: ProductType;
	className?: string;
}) => {
	const wrapperClass = twMerge(
		"flex flex-col border border-slate-400 bg-slate-200 p-3 text-slate-900",
		className,
	);
	return (
		<div className={wrapperClass}>
			<h3 className="title-font self-center text-lg font-medium">{title}</h3>
			<p className="mt-2 h-20 overflow-hidden">{description}</p>
			<p className="mt-2 self-center font-bold">${price}</p>
		</div>
	);
};
