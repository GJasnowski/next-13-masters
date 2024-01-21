import { getProducts } from "@/api/products";
import { Title } from "@/ui/atoms/Title";
import { ProductsList } from "@/ui/organisms/ProductsList";

export default async function Home() {
	const { products } = await getProducts({ page: 1 });

	return (
		<section>
			<Title>Top products</Title>
			<ProductsList products={products} />
		</section>
	);
}
