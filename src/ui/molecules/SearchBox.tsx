"use client";

import { useEffect, useState, useCallback, type ChangeEvent } from "react";
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

	const [searchAllowed, setSearchAllowed] = useState(false);
	useEffect(() => {
		setSearchAllowed(false);
	}, [pathname]);

	const search = useCallback(
		(_needle: string) => {
			router.push(`/search?query=${_needle}` as Route);
		},
		[router],
	);

	useEffect(() => {
		if (!searchAllowed) return;

		const timeoutId = setTimeout(() => {
			search(needle);
		}, 500);
		return () => {
			clearTimeout(timeoutId);
		};
	}, [searchAllowed, needle, search]);

	const onChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
		setSearchAllowed(true);
		setNeedle(e.target.value);
	}, []);

	return (
		<div>
			<SearchInput needle={needle} onChange={onChange} />
			<Button
				onClick={() => {
					search(needle);
				}}
			>
				OK
			</Button>
		</div>
	);
};
