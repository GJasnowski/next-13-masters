import { ActiveLink } from "../atoms/ActiveLink";

export const Navbar = () => {
	return (
		<nav className="flex w-full justify-center bg-slate-900 p-4">
			<ul className="flex w-96 justify-around">
				<li>
					<ActiveLink
						href="/"
						className="text-slate-100 hover:text-amber-200"
						activeClassName="text-amber-300"
						exact
					>
						Home
					</ActiveLink>
				</li>
				<li>
					<ActiveLink
						href="/products"
						className="hover:text-amber-200"
						activeClassName="text-amber-300"
					>
						All
					</ActiveLink>
				</li>
			</ul>
		</nav>
	);
};
