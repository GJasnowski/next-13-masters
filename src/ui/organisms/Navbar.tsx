import { type Route } from "next";
import { NavbarLink } from "../atoms/NavbarLink";
import { getCollections } from "@/api/collections";

export const Navbar = async () => {
	const collections = await getCollections();

	return (
		<nav className="flex w-full justify-center bg-slate-900">
			<ul className="flex w-full max-w-7xl justify-start p-4">
				<li>
					<NavbarLink href="/" exact>
						Home
					</NavbarLink>
				</li>
				<li>
					<NavbarLink href={"/products/1" as Route}>All</NavbarLink>
				</li>
				<li>
					<NavbarLink href={"/categories" as Route}>Categories</NavbarLink>
				</li>
				{collections.map((collection) => (
					<li key={collection.id}>
						<NavbarLink href={`/collections/${collection.slug}` as Route}>
							{collection.name}
						</NavbarLink>
					</li>
				))}
			</ul>
		</nav>
	);
};
