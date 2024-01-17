"use client";

import { type Route } from "next";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { twMerge } from "tailwind-merge";

type ActiveLinkProps = {
	href: Route;
	exact?: boolean;
	className?: string;
	activeClassName?: string;
	children: React.ReactNode;
};

export const ActiveLink = ({
	href,
	children,
	className,
	activeClassName,
	exact = false,
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
