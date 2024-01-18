import { type Route } from "next";
import { NavbarLink } from "../atoms/NavbarLink";

export const Navbar = () => {
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
			</ul>
		</nav>
	);
};
