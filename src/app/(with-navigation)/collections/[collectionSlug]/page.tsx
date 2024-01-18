import { notFound } from "next/navigation";
import { type Metadata } from "next";
import { Title } from "@/ui/atoms/Title";
import { ProductsList } from "@/ui/organisms/ProductsList";
import { getCollectionBySlug, getCollections } from "@/api/collections";

export const collectionSlugz = async ({
	params: { collectionSlug },
}: {
	params: { collectionSlug: string };
}): Promise<Metadata> => {
	const collection = await getCollectionBySlug(collectionSlug);
	return {
		title: collection.name,
	};
};

export const generateStaticParams = async () => {
	const collections = await getCollections();
	return collections.map((collection) => ({
		params: { collectionSlug: collection.slug },
	}));
};

export default async function Category({
	params: { collectionSlug },
}: {
	params: { collectionSlug: string };
}) {
	const collection = await getCollectionBySlug(collectionSlug);
	if (!collection) return notFound();

	return (
		<section>
			<Title>{collection.name}</Title>
			<ProductsList products={collection.products} hidePaginator />
		</section>
	);
}
