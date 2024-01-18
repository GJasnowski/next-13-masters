import { executeGraphql } from "@/utils/api";
import {
	CollectionsGetListDocument,
	type CollectionListItemFragment,
	type CollectionDetailedFragment,
	CollectionGetBySlugDocument,
} from "@/gql/graphql";

export const getCollectionBySlug = async (slug: string): Promise<CollectionDetailedFragment> => {
	const {
		collections: [result],
	} = await executeGraphql(CollectionGetBySlugDocument, {
		slug,
	});
	return result;
};

export const getCollections = async (): Promise<CollectionListItemFragment[]> => {
	const { collections } = await executeGraphql(CollectionsGetListDocument, {});
	return collections;
};
