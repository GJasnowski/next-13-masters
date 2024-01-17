import { type ProductType } from "@/ui/types";

type ProductDtoType = {
	id: string;
	title: string;
	price: number;
	description: string;
	longDescription: string;
	image: string;
	category: string;
	rating: {
		rate: number;
		count: number;
	};
};

const dtoToProduct = (dto: ProductDtoType): ProductType => {
	return {
		id: dto.id,
		title: dto.title,
		price: dto.price,
		description: dto.description,
		imageSrc: dto.image,
	};
};

export const getProducts = async (page: number = 1) => {
	const pageSize = 20;
	const offset = (page - 1) * pageSize;
	const res = await fetch(
		`https://naszsklep-api.vercel.app/api/products?take=${pageSize}&offset=${offset}`,
	);
	const productsResponse = (await res.json()) as ProductDtoType[];
	return productsResponse.map(dtoToProduct);
};
