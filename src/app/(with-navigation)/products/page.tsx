import { ProductsList } from "../../../ui/organisms/ProductsList";
import { getProducts } from "@/api/products";

export default async function Products() {
	const products = await getProducts();

	return (
		<section>
			<ProductsList products={products} />
		</section>
	);
}
