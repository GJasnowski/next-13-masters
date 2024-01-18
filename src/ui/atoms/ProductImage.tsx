import { twMerge } from "tailwind-merge";
import { type ProductListItemFragment } from "@/gql/graphql";

export const ProductImage = ({
	product: {
		images: [image],
		name,
	},
	className,
}: {
	product: ProductListItemFragment;
	className?: string;
}) => {
	const wrapperClass = twMerge("overflow-hidden", className);

	if (!image) {
		return (
			<div className={wrapperClass}>
				<div className="h-64 bg-slate-800" />
			</div>
		);
	}

	return (
		<div className={wrapperClass}>
			<img src={image.url} alt={name} />
		</div>
	);
};
