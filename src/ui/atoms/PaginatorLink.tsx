import { twMerge } from "tailwind-merge";
import { ActiveLink, type ActiveLinkProps } from "./ActiveLink";

export const PaginatorLink = ({
	className,
	activeClassName,
	children,
	...additionalProps
}: ActiveLinkProps) => {
	const paginatorLinkClassName = twMerge("hover:text-amber-200", className);
	const activePaginatorLinkClassName = twMerge("text-amber-300 font-bold", activeClassName);

	return (
		<ActiveLink
			{...additionalProps}
			className={paginatorLinkClassName}
			activeClassName={activePaginatorLinkClassName}
		>
			<div className="rounded-full bg-slate-800 px-3 py-1">{children}</div>
		</ActiveLink>
	);
};
