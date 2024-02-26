/* eslint-disable */
import * as types from './graphql';



/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "fragment CategoryDetailed on Category {\n  id\n  slug\n  name\n}": types.CategoryDetailedFragmentDoc,
    "fragment CategoryListItem on Category {\n  id\n  slug\n  name\n}": types.CategoryListItemFragmentDoc,
    "fragment CollectionDetailed on Collection {\n  id\n  name\n  slug\n  products {\n    ...ProductListItem\n  }\n}": types.CollectionDetailedFragmentDoc,
    "fragment CollectionListItem on Collection {\n  id\n  name\n  slug\n}": types.CollectionListItemFragmentDoc,
    "fragment ProductDetailed on Product {\n  id\n  name\n  description\n  price\n  image\n  variants {\n    id\n    name\n  }\n}": types.ProductDetailedFragmentDoc,
    "fragment ProductListItem on Product {\n  id\n  name\n  image\n  price\n}": types.ProductListItemFragmentDoc,
    "query CategoriesGetList {\n  categories {\n    ...CategoryListItem\n  }\n}": types.CategoriesGetListDocument,
    "query CategoryGetBySlug($slug: String!) {\n  categories(slug: $slug) {\n    ...CategoryDetailed\n  }\n}": types.CategoryGetBySlugDocument,
    "query CollectionGetBySlug($slug: String!) {\n  collections(slug: $slug) {\n    ...CollectionDetailed\n  }\n}": types.CollectionGetBySlugDocument,
    "query CollectionsGetList {\n  collections {\n    ...CollectionListItem\n  }\n}": types.CollectionsGetListDocument,
    "query ProductGetById($id: ID!) {\n  product(id: $id) {\n    ...ProductDetailed\n  }\n}": types.ProductGetByIdDocument,
    "query ProductsGetCount {\n  productsCount\n}": types.ProductsGetCountDocument,
    "query ProductsGetCountByCategorySlug($categorySlug: String) {\n  productsCount(categorySlug: $categorySlug)\n}": types.ProductsGetCountByCategorySlugDocument,
    "query ProductsGetList($count: Int!, $skip: Int = 0, $needle: String = \"\") {\n  products(take: $count, skip: $skip, needle: $needle) {\n    ...ProductListItem\n  }\n  productsCount(needle: $needle)\n}": types.ProductsGetListDocument,
    "query ProductsGetListByCategorySlug($count: Int!, $skip: Int = 0, $categorySlug: String!) {\n  products(take: $count, skip: $skip, categorySlug: $categorySlug) {\n    ...ProductListItem\n  }\n}": types.ProductsGetListByCategorySlugDocument,
    "query ProductsRelatedGetListById($id: ID!) {\n  products(take: 4, notId: $id) {\n    ...ProductListItem\n  }\n}": types.ProductsRelatedGetListByIdDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment CategoryDetailed on Category {\n  id\n  slug\n  name\n}"): typeof import('./graphql').CategoryDetailedFragmentDoc;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment CategoryListItem on Category {\n  id\n  slug\n  name\n}"): typeof import('./graphql').CategoryListItemFragmentDoc;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment CollectionDetailed on Collection {\n  id\n  name\n  slug\n  products {\n    ...ProductListItem\n  }\n}"): typeof import('./graphql').CollectionDetailedFragmentDoc;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment CollectionListItem on Collection {\n  id\n  name\n  slug\n}"): typeof import('./graphql').CollectionListItemFragmentDoc;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment ProductDetailed on Product {\n  id\n  name\n  description\n  price\n  image\n  variants {\n    id\n    name\n  }\n}"): typeof import('./graphql').ProductDetailedFragmentDoc;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment ProductListItem on Product {\n  id\n  name\n  image\n  price\n}"): typeof import('./graphql').ProductListItemFragmentDoc;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query CategoriesGetList {\n  categories {\n    ...CategoryListItem\n  }\n}"): typeof import('./graphql').CategoriesGetListDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query CategoryGetBySlug($slug: String!) {\n  categories(slug: $slug) {\n    ...CategoryDetailed\n  }\n}"): typeof import('./graphql').CategoryGetBySlugDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query CollectionGetBySlug($slug: String!) {\n  collections(slug: $slug) {\n    ...CollectionDetailed\n  }\n}"): typeof import('./graphql').CollectionGetBySlugDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query CollectionsGetList {\n  collections {\n    ...CollectionListItem\n  }\n}"): typeof import('./graphql').CollectionsGetListDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductGetById($id: ID!) {\n  product(id: $id) {\n    ...ProductDetailed\n  }\n}"): typeof import('./graphql').ProductGetByIdDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductsGetCount {\n  productsCount\n}"): typeof import('./graphql').ProductsGetCountDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductsGetCountByCategorySlug($categorySlug: String) {\n  productsCount(categorySlug: $categorySlug)\n}"): typeof import('./graphql').ProductsGetCountByCategorySlugDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductsGetList($count: Int!, $skip: Int = 0, $needle: String = \"\") {\n  products(take: $count, skip: $skip, needle: $needle) {\n    ...ProductListItem\n  }\n  productsCount(needle: $needle)\n}"): typeof import('./graphql').ProductsGetListDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductsGetListByCategorySlug($count: Int!, $skip: Int = 0, $categorySlug: String!) {\n  products(take: $count, skip: $skip, categorySlug: $categorySlug) {\n    ...ProductListItem\n  }\n}"): typeof import('./graphql').ProductsGetListByCategorySlugDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductsRelatedGetListById($id: ID!) {\n  products(take: 4, notId: $id) {\n    ...ProductListItem\n  }\n}"): typeof import('./graphql').ProductsRelatedGetListByIdDocument;


export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}
