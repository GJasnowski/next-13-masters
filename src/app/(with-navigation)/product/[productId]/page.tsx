import { type Metadata } from "next";
import { notFound } from "next/navigation";
import { getProduct } from "@/api/products";
import { ProductShowcase } from "@/ui/organisms/ProductShowcase";

export const generateMetadata = async ({
	params: { productId },
}: {
	params: { productId: string };
}): Promise<Metadata> => {
	const product = await getProduct(productId);
	if (!product) return notFound();

	return {
		title: product.name,
		description: product.description,
	};
};

export default async function Product({
	params: { productId },
}: {
	params: { productId: string };
}) {
	const product = await getProduct(productId);
	if (!product) return notFound();

	return (
		<section>
			<ProductShowcase product={product} />
		</section>
	);
}
