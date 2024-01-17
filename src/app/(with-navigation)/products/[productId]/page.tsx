export default function Product({ params: { productId } }: { params: { productId: string } }) {
	return (
		<section>
			<h1>Product {productId}</h1>
		</section>
	);
}
