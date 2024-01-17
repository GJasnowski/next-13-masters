import { getProduct } from "@/api/products";
import { ProductShowcase } from "@/ui/organisms/ProductShowcase";

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
