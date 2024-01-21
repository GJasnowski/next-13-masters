import { type Route } from "next";
import { NavbarLink } from "../atoms/NavbarLink";
import { getCollections } from "@/api/collections";
import { getCategories } from "@/api/categories";

export const NavbarLinks = async () => {
	const collections = await getCollections();
	const categories = await getCategories();

	return (
		<ul className="flex p-4">
			<li>
				<NavbarLink href="/" exact>
					Home
				</NavbarLink>
			</li>
			<li>
				<NavbarLink href={"/products/1" as Route}>All</NavbarLink>
			</li>
			{collections.map((collection) => (
				<li key={collection.id}>
					<NavbarLink href={`/collections/${collection.slug}` as Route}>
						{collection.name}
					</NavbarLink>
				</li>
			))}
			{categories.map((category) => (
				<li key={category.id}>
					<NavbarLink href={`/categories/${category.slug}/1` as Route}>{category.name}</NavbarLink>
				</li>
			))}
		</ul>
	);
};
