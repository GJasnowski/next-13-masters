import { twMerge } from "tailwind-merge";
import { ActiveLink, type ActiveLinkProps } from "./ActiveLink";

export const NavbarLink = ({ className, activeClassName, ...additionalProps }: ActiveLinkProps) => {
	const navbarLinkClassName = twMerge("hover:text-amber-200", className);
	const activeNavbarLinkClassName = twMerge(
		"text-amber-300 border-b border-amber-300",
		activeClassName,
	);

	return (
		<div className="px-4">
			<ActiveLink
				{...additionalProps}
				className={navbarLinkClassName}
				activeClassName={activeNavbarLinkClassName}
			/>
		</div>
	);
};
