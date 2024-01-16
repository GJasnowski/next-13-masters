import { type ProductType } from "../types";

export const ProductImage = ({ product: { imageSrc, description } }: { product: ProductType }) => {
	return <img className="w-64" src={imageSrc} alt={description} />;
};
