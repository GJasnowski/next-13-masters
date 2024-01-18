import { twMerge } from "tailwind-merge";
import { type ProductListItemFragment } from "@/gql/graphql";

export const ProductBasicData = ({
	product: { name, price },
	className,
}: {
	product: ProductListItemFragment;
	className?: string;
}) => {
	const wrapperClass = twMerge(
		"flex flex-col border border-slate-400 bg-slate-200 p-3 text-slate-900",
		className,
	);
	return (
		<div className={wrapperClass}>
			<h3 className="title-font self-center text-lg font-medium">{name}</h3>
			<p className="mt-2 self-center text-sm">${price}</p>
		</div>
	);
};
