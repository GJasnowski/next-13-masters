"use client";

import { useState, useCallback, type ChangeEvent } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { type Route } from "next";
import { SearchInput } from "../atoms/SearchInput";
import { Button } from "../atoms/Button";

export const SearchBox = () => {
	const router = useRouter();
	const pathname = usePathname();
	const searchParams = useSearchParams();

	const [needle, setNeedle] = useState(
		pathname === "/search" ? searchParams.get("query") || "" : "",
	);

	const onChange = useCallback(
		(e: ChangeEvent<HTMLInputElement>) => {
			setNeedle(e.target.value);
		},
		[setNeedle],
	);

	const search = useCallback(() => {
		router.push(`/search?query=${needle}` as Route);
	}, [router, needle]);

	return (
		<div>
			<SearchInput needle={needle} onChange={onChange} />
			<Button onClick={search}>OK</Button>
		</div>
	);
};
