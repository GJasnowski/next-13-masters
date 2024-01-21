import { SearchBox } from "../molecules/SearchBox";
import { NavbarLinks } from "../molecules/NavbarLinks";

export const Navbar = async () => {
	return (
		<nav className="flex w-full justify-center bg-slate-900">
			<div className="justify- flex w-full max-w-7xl items-center justify-between">
				<NavbarLinks />
				<SearchBox />
			</div>
		</nav>
	);
};
