"use client";

import { type Route } from "next";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { twMerge } from "tailwind-merge";

export type ActiveLinkProps = {
	activeClassName?: string;
	ariaLabel?: string;
	children: React.ReactNode;
	className?: string;
	exact?: boolean;
	href: Route;
};

export const ActiveLink = ({
	activeClassName,
	ariaLabel,
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
			aria-label={ariaLabel}
		>
			{children}
		</Link>
	);
};
