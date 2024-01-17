"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { twMerge } from "tailwind-merge";

export const ActiveLink = ({
	href,
	children,
	className,
	activeClassName,
}: {
	href: string;
	children: React.ReactNode;
	className: string;
	activeClassName: string;
}) => {
	const pathname = usePathname();
	const active = href === pathname;

	return (
		<Link
			href={href}
			className={twMerge(className, active && activeClassName)}
			aria-current={active}
		>
			{children}
		</Link>
	);
};
