"use client";

import { type Route } from "next";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { twMerge } from "tailwind-merge";

export type ActiveLinkProps = {
	activeClassName?: string;
	children: React.ReactNode;
	className?: string;
	exact?: boolean;
	href: Route;
};

export const ActiveLink = ({
	activeClassName,
	children,
	className,
	exact = false,
	href,
}: ActiveLinkProps) => {
	const pathname = usePathname();
	const active = exact ? href === pathname : pathname.startsWith(href);

	return (
		<Link
			href={href}
			className={twMerge(className, active && activeClassName)}
			aria-current={active ? "page" : undefined}
		>
			{children}
		</Link>
	);
};
