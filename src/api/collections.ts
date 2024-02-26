import { executeGraphql } from "@/utils/api";
import {
	CollectionsGetListDocument,
	type CollectionListItemFragment,
	type CollectionDetailedFragment,
	CollectionGetBySlugDocument,
} from "@/gql/graphql";

export const getCollectionBySlug = async (
	slug: string,
): Promise<CollectionDetailedFragment | undefined> => {
	const { collections } = await executeGraphql(CollectionGetBySlugDocument, {
		slug,
	});
	return collections[0] ?? undefined;
};

export const getCollections = async (): Promise<CollectionListItemFragment[]> => {
	const { collections } = await executeGraphql(CollectionsGetListDocument);
	return collections;
};
