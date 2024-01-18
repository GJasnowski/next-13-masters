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
    "fragment CategoryDetailed on Category {\n  id\n  slug\n  name\n  description\n}": types.CategoryDetailedFragmentDoc,
    "fragment CategoryListItem on Category {\n  id\n  slug\n  name\n}": types.CategoryListItemFragmentDoc,
    "fragment ProductDetailed on Product {\n  id\n  name\n  description\n  categories(first: 4) {\n    name\n  }\n  images(first: 4) {\n    url\n  }\n  price\n}": types.ProductDetailedFragmentDoc,
    "fragment ProductListItem on Product {\n  id\n  name\n  categories(first: 1) {\n    name\n  }\n  images(first: 1) {\n    url\n  }\n  price\n}": types.ProductListItemFragmentDoc,
    "query CategoriesGetList {\n  categories {\n    ...CategoryListItem\n  }\n}": types.CategoriesGetListDocument,
    "query CategoryGetBySlug($slug: String!) {\n  categories(where: {slug: $slug}) {\n    ...CategoryDetailed\n  }\n}": types.CategoryGetBySlugDocument,
    "query ProductGetById($id: ID!) {\n  products(where: {id: $id}) {\n    ...ProductDetailed\n  }\n}": types.ProductGetByIdDocument,
    "query ProductsGetCount {\n  productsConnection {\n    aggregate {\n      count\n    }\n  }\n}": types.ProductsGetCountDocument,
    "query ProductsGetCountByCategorySlug($categorySlug: String) {\n  productsConnection(where: {categories_some: {slug: $categorySlug}}) {\n    aggregate {\n      count\n    }\n  }\n}": types.ProductsGetCountByCategorySlugDocument,
    "query ProductsGetList($count: Int!, $skip: Int = 0) {\n  products(first: $count, skip: $skip) {\n    ...ProductListItem\n  }\n}": types.ProductsGetListDocument,
    "query ProductsGetListByCategorySlug($count: Int!, $skip: Int = 0, $categorySlug: String!) {\n  products(\n    first: $count\n    skip: $skip\n    where: {categories_some: {slug: $categorySlug}}\n  ) {\n    ...ProductListItem\n  }\n}": types.ProductsGetListByCategorySlugDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment CategoryDetailed on Category {\n  id\n  slug\n  name\n  description\n}"): typeof import('./graphql').CategoryDetailedFragmentDoc;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment CategoryListItem on Category {\n  id\n  slug\n  name\n}"): typeof import('./graphql').CategoryListItemFragmentDoc;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment ProductDetailed on Product {\n  id\n  name\n  description\n  categories(first: 4) {\n    name\n  }\n  images(first: 4) {\n    url\n  }\n  price\n}"): typeof import('./graphql').ProductDetailedFragmentDoc;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment ProductListItem on Product {\n  id\n  name\n  categories(first: 1) {\n    name\n  }\n  images(first: 1) {\n    url\n  }\n  price\n}"): typeof import('./graphql').ProductListItemFragmentDoc;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query CategoriesGetList {\n  categories {\n    ...CategoryListItem\n  }\n}"): typeof import('./graphql').CategoriesGetListDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query CategoryGetBySlug($slug: String!) {\n  categories(where: {slug: $slug}) {\n    ...CategoryDetailed\n  }\n}"): typeof import('./graphql').CategoryGetBySlugDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductGetById($id: ID!) {\n  products(where: {id: $id}) {\n    ...ProductDetailed\n  }\n}"): typeof import('./graphql').ProductGetByIdDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductsGetCount {\n  productsConnection {\n    aggregate {\n      count\n    }\n  }\n}"): typeof import('./graphql').ProductsGetCountDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductsGetCountByCategorySlug($categorySlug: String) {\n  productsConnection(where: {categories_some: {slug: $categorySlug}}) {\n    aggregate {\n      count\n    }\n  }\n}"): typeof import('./graphql').ProductsGetCountByCategorySlugDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductsGetList($count: Int!, $skip: Int = 0) {\n  products(first: $count, skip: $skip) {\n    ...ProductListItem\n  }\n}"): typeof import('./graphql').ProductsGetListDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductsGetListByCategorySlug($count: Int!, $skip: Int = 0, $categorySlug: String!) {\n  products(\n    first: $count\n    skip: $skip\n    where: {categories_some: {slug: $categorySlug}}\n  ) {\n    ...ProductListItem\n  }\n}"): typeof import('./graphql').ProductsGetListByCategorySlugDocument;


export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}