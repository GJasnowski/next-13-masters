"use client";

import { useEffect, useState, useCallback, type ChangeEvent, useMemo } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { type Route } from "next";
import { SearchInput } from "../atoms/SearchInput";
import { Button } from "../atoms/Button";

export const SearchBox = () => {
	const router = useRouter();
	const pathname = usePathname();
	const searchParams = useSearchParams();

	const initialNeedle = useMemo(
		() => (pathname === "/search" ? searchParams.get("query") || "" : ""),
		[pathname, searchParams],
	);
	const [needle, setNeedle] = useState(initialNeedle);

	const search = useCallback(
		(_needle: string) => {
			router.push(`/search?query=${_needle}` as Route);
		},
		[router],
	);

	useEffect(() => {
		if (needle === initialNeedle) return;

		const timeoutId = setTimeout(() => {
			search(needle);
		}, 500);
		return () => {
			clearTimeout(timeoutId);
		};
	}, [initialNeedle, needle, search]);

	const onChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
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
