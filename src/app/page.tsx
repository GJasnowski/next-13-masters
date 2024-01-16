import { ProductsList } from "./ui/organisms/ProductsList";
import { type ProductType } from "./ui/types";

const products: ProductType[] = [
	{
		id: 1,
		name: "Gone With the Wind",
		description: "A movie from 1939 about the Civil War",
		imageSrc: "gone_with_the_wind.jpg",
		price: 25,
	},
	{
		id: 2,
		name: "The Wizard of Oz",
		description: "A movie from 1939 about the magical land of Oz",
		imageSrc: "the_wizard_of_oz.jpg",
		price: 20,
	},
	{
		id: 3,
		name: "Citizen Kane",
		description: "A movie from 1941 about a newspaper tycoon",
		imageSrc: "citizen_kane.jpg",
		price: 30,
	},
	{
		id: 4,
		name: "Casablanca",
		description: "A movie from 1942 about a nightclub owner",
		imageSrc: "casablanca.jpg",
		price: 22.5,
	},
];

export default function Home() {
	return (
		<section className="p-8">
			<ProductsList products={products} />
		</section>
	);
}
