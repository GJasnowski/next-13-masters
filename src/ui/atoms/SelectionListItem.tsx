import { type Route } from "next";
import Link from "next/link";

export const SelectionListItem = ({ href, name }: { href: Route; name: string }) => {
	return (
		<Link href={href}>
			<div className="flex justify-center rounded-xl bg-slate-800 p-4 hover:scale-105 hover:text-amber-200">
				<div>{name}</div>
			</div>
		</Link>
	);
};
