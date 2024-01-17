import { type Metadata } from "next";
import { ProductsList } from "../../../ui/organisms/ProductsList";
import { Title } from "@/ui/atoms/Title";
import { getProducts } from "@/api/products";

export const metadata: Metadata = {
	title: "All products",
	description: "All products",
};

export default async function Products() {
	const products = await getProducts();

	return (
		<section>
			<Title>All products</Title>
			<ProductsList products={products} />
		</section>
	);
}
