/* eslint-disable */
import type { DocumentTypeDecoration } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type Category = {
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  products: Array<Product>;
  slug: Scalars['String']['output'];
};

export type Collection = {
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  products: Array<Product>;
  slug: Scalars['String']['output'];
};

export type Product = {
  description: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  image: Scalars['String']['output'];
  name: Scalars['String']['output'];
  price: Scalars['Int']['output'];
  slug: Scalars['String']['output'];
  variants: Array<ProductVariant>;
};

export type ProductVariant = {
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
};

export type Query = {
  categories: Array<Category>;
  collections: Array<Collection>;
  product?: Maybe<Product>;
  products: Array<Product>;
  productsCount: Scalars['Int']['output'];
};


export type QueryCategoriesArgs = {
  slug?: InputMaybe<Scalars['String']['input']>;
};


export type QueryCollectionsArgs = {
  slug?: InputMaybe<Scalars['String']['input']>;
};


export type QueryProductArgs = {
  id: Scalars['ID']['input'];
};


export type QueryProductsArgs = {
  categorySlug?: InputMaybe<Scalars['String']['input']>;
  needle?: InputMaybe<Scalars['String']['input']>;
  notId?: InputMaybe<Scalars['ID']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryProductsCountArgs = {
  categorySlug?: InputMaybe<Scalars['String']['input']>;
  needle?: InputMaybe<Scalars['String']['input']>;
};

export type CategoryDetailedFragment = { id: string, slug: string, name: string };

export type CategoryListItemFragment = { id: string, slug: string, name: string };

export type CollectionDetailedFragment = { id: string, name: string, slug: string, products: Array<{ id: string, name: string, image: string, price: number }> };

export type CollectionListItemFragment = { id: string, name: string, slug: string };

export type ProductDetailedFragment = { id: string, name: string, description: string, price: number, image: string, variants: Array<{ id: string, name: string }> };

export type ProductListItemFragment = { id: string, name: string, image: string, price: number };

export type CategoriesGetListQueryVariables = Exact<{ [key: string]: never; }>;


export type CategoriesGetListQuery = { categories: Array<{ id: string, slug: string, name: string }> };

export type CategoryGetBySlugQueryVariables = Exact<{
  slug: Scalars['String']['input'];
}>;


export type CategoryGetBySlugQuery = { categories: Array<{ id: string, slug: string, name: string }> };

export type CollectionGetBySlugQueryVariables = Exact<{
  slug: Scalars['String']['input'];
}>;


export type CollectionGetBySlugQuery = { collections: Array<{ id: string, name: string, slug: string, products: Array<{ id: string, name: string, image: string, price: number }> }> };

export type CollectionsGetListQueryVariables = Exact<{ [key: string]: never; }>;


export type CollectionsGetListQuery = { collections: Array<{ id: string, name: string, slug: string }> };

export type ProductGetByIdQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type ProductGetByIdQuery = { product?: { id: string, name: string, description: string, price: number, image: string, variants: Array<{ id: string, name: string }> } | null };

export type ProductsGetCountQueryVariables = Exact<{ [key: string]: never; }>;


export type ProductsGetCountQuery = { productsCount: number };

export type ProductsGetCountByCategorySlugQueryVariables = Exact<{
  categorySlug?: InputMaybe<Scalars['String']['input']>;
}>;


export type ProductsGetCountByCategorySlugQuery = { productsCount: number };

export type ProductsGetListQueryVariables = Exact<{
  count: Scalars['Int']['input'];
  skip?: InputMaybe<Scalars['Int']['input']>;
  needle?: InputMaybe<Scalars['String']['input']>;
}>;


export type ProductsGetListQuery = { productsCount: number, products: Array<{ id: string, name: string, image: string, price: number }> };

export type ProductsGetListByCategorySlugQueryVariables = Exact<{
  count: Scalars['Int']['input'];
  skip?: InputMaybe<Scalars['Int']['input']>;
  categorySlug: Scalars['String']['input'];
}>;


export type ProductsGetListByCategorySlugQuery = { products: Array<{ id: string, name: string, image: string, price: number }> };

export type ProductsRelatedGetListByIdQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type ProductsRelatedGetListByIdQuery = { products: Array<{ id: string, name: string, image: string, price: number }> };

export class TypedDocumentString<TResult, TVariables>
  extends String
  implements DocumentTypeDecoration<TResult, TVariables>
{
  __apiType?: DocumentTypeDecoration<TResult, TVariables>['__apiType'];

  constructor(private value: string, public __meta__?: Record<string, any>) {
    super(value);
  }

  toString(): string & DocumentTypeDecoration<TResult, TVariables> {
    return this.value;
  }
}
export const CategoryDetailedFragmentDoc = new TypedDocumentString(`
    fragment CategoryDetailed on Category {
  id
  slug
  name
}
    `, {"fragmentName":"CategoryDetailed"}) as unknown as TypedDocumentString<CategoryDetailedFragment, unknown>;
export const CategoryListItemFragmentDoc = new TypedDocumentString(`
    fragment CategoryListItem on Category {
  id
  slug
  name
}
    `, {"fragmentName":"CategoryListItem"}) as unknown as TypedDocumentString<CategoryListItemFragment, unknown>;
export const ProductListItemFragmentDoc = new TypedDocumentString(`
    fragment ProductListItem on Product {
  id
  name
  image
  price
}
    `, {"fragmentName":"ProductListItem"}) as unknown as TypedDocumentString<ProductListItemFragment, unknown>;
export const CollectionDetailedFragmentDoc = new TypedDocumentString(`
    fragment CollectionDetailed on Collection {
  id
  name
  slug
  products {
    ...ProductListItem
  }
}
    fragment ProductListItem on Product {
  id
  name
  image
  price
}`, {"fragmentName":"CollectionDetailed"}) as unknown as TypedDocumentString<CollectionDetailedFragment, unknown>;
export const CollectionListItemFragmentDoc = new TypedDocumentString(`
    fragment CollectionListItem on Collection {
  id
  name
  slug
}
    `, {"fragmentName":"CollectionListItem"}) as unknown as TypedDocumentString<CollectionListItemFragment, unknown>;
export const ProductDetailedFragmentDoc = new TypedDocumentString(`
    fragment ProductDetailed on Product {
  id
  name
  description
  price
  image
  variants {
    id
    name
  }
}
    `, {"fragmentName":"ProductDetailed"}) as unknown as TypedDocumentString<ProductDetailedFragment, unknown>;
export const CategoriesGetListDocument = new TypedDocumentString(`
    query CategoriesGetList {
  categories {
    ...CategoryListItem
  }
}
    fragment CategoryListItem on Category {
  id
  slug
  name
}`) as unknown as TypedDocumentString<CategoriesGetListQuery, CategoriesGetListQueryVariables>;
export const CategoryGetBySlugDocument = new TypedDocumentString(`
    query CategoryGetBySlug($slug: String!) {
  categories(slug: $slug) {
    ...CategoryDetailed
  }
}
    fragment CategoryDetailed on Category {
  id
  slug
  name
}`) as unknown as TypedDocumentString<CategoryGetBySlugQuery, CategoryGetBySlugQueryVariables>;
export const CollectionGetBySlugDocument = new TypedDocumentString(`
    query CollectionGetBySlug($slug: String!) {
  collections(slug: $slug) {
    ...CollectionDetailed
  }
}
    fragment CollectionDetailed on Collection {
  id
  name
  slug
  products {
    ...ProductListItem
  }
}
fragment ProductListItem on Product {
  id
  name
  image
  price
}`) as unknown as TypedDocumentString<CollectionGetBySlugQuery, CollectionGetBySlugQueryVariables>;
export const CollectionsGetListDocument = new TypedDocumentString(`
    query CollectionsGetList {
  collections {
    ...CollectionListItem
  }
}
    fragment CollectionListItem on Collection {
  id
  name
  slug
}`) as unknown as TypedDocumentString<CollectionsGetListQuery, CollectionsGetListQueryVariables>;
export const ProductGetByIdDocument = new TypedDocumentString(`
    query ProductGetById($id: ID!) {
  product(id: $id) {
    ...ProductDetailed
  }
}
    fragment ProductDetailed on Product {
  id
  name
  description
  price
  image
  variants {
    id
    name
  }
}`) as unknown as TypedDocumentString<ProductGetByIdQuery, ProductGetByIdQueryVariables>;
export const ProductsGetCountDocument = new TypedDocumentString(`
    query ProductsGetCount {
  productsCount
}
    `) as unknown as TypedDocumentString<ProductsGetCountQuery, ProductsGetCountQueryVariables>;
export const ProductsGetCountByCategorySlugDocument = new TypedDocumentString(`
    query ProductsGetCountByCategorySlug($categorySlug: String) {
  productsCount(categorySlug: $categorySlug)
}
    `) as unknown as TypedDocumentString<ProductsGetCountByCategorySlugQuery, ProductsGetCountByCategorySlugQueryVariables>;
export const ProductsGetListDocument = new TypedDocumentString(`
    query ProductsGetList($count: Int!, $skip: Int = 0, $needle: String = "") {
  products(take: $count, skip: $skip, needle: $needle) {
    ...ProductListItem
  }
  productsCount(needle: $needle)
}
    fragment ProductListItem on Product {
  id
  name
  image
  price
}`) as unknown as TypedDocumentString<ProductsGetListQuery, ProductsGetListQueryVariables>;
export const ProductsGetListByCategorySlugDocument = new TypedDocumentString(`
    query ProductsGetListByCategorySlug($count: Int!, $skip: Int = 0, $categorySlug: String!) {
  products(take: $count, skip: $skip, categorySlug: $categorySlug) {
    ...ProductListItem
  }
}
    fragment ProductListItem on Product {
  id
  name
  image
  price
}`) as unknown as TypedDocumentString<ProductsGetListByCategorySlugQuery, ProductsGetListByCategorySlugQueryVariables>;
export const ProductsRelatedGetListByIdDocument = new TypedDocumentString(`
    query ProductsRelatedGetListById($id: ID!) {
  products(take: 4, notId: $id) {
    ...ProductListItem
  }
}
    fragment ProductListItem on Product {
  id
  name
  image
  price
}`) as unknown as TypedDocumentString<ProductsRelatedGetListByIdQuery, ProductsRelatedGetListByIdQueryVariables>;