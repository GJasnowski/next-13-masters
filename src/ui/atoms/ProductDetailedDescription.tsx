import { type ProductDetailedFragment } from "@/gql/graphql";

export const ProductDetailedDescription = ({
	product: { description, price },
}: {
	product: ProductDetailedFragment;
}) => {
	return (
		<div>
			<div className="text-justify">{description}</div>
			<div className="mt-8 flex w-full justify-center font-bold">${price}</div>
		</div>
	);
};
