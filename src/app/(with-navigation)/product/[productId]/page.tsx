import { type Metadata } from "next";
import { getProduct } from "@/api/products";
import { ProductShowcase } from "@/ui/organisms/ProductShowcase";

export const generateMetadata = async ({
	params: { productId },
}: {
	params: { productId: string };
}): Promise<Metadata> => {
	const product = await getProduct(productId);
	return {
		title: product.title,
		description: product.description,
	};
};

export default async function Product({
	params: { productId },
}: {
	params: { productId: string };
}) {
	const product = await getProduct(productId);
	return (
		<section>
			<ProductShowcase product={product} />
		</section>
	);
}
