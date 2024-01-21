import { type Metadata } from "next";
import { notFound } from "next/navigation";
import { getProduct, getProductsRelatedById } from "@/api/products";
import { ProductShowcase } from "@/ui/organisms/ProductShowcase";
import { ProductsList } from "@/ui/organisms/ProductsList";
import { Subtitle } from "@/ui/atoms/Subtitle";

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

	const relatedProducts = await getProductsRelatedById(product.id);

	return (
		<div>
			<section>
				<ProductShowcase product={product} />
			</section>
			<section className="mt-16">
				<Subtitle>Related products</Subtitle>
				<ProductsList products={relatedProducts} testId="related-products" />
			</section>
		</div>
	);
}
