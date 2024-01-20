"use client";

import { type ChangeEventHandler } from "react";

export const SearchInput = ({
	needle,
	onChange,
}: {
	needle: string;
	onChange: ChangeEventHandler;
}) => {
	return (
		<input
			type="search"
			placeholder="search"
			className="rounded bg-slate-100 px-2 py-0.5 text-slate-900 outline-none"
			value={needle}
			onChange={onChange}
		/>
	);
};
