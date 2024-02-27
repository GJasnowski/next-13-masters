"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { type Route } from "next";
import { type ProductDetailedFragment } from "@/gql/graphql";
import { getUpdatedSearchParams } from "@/utils/general";

export const ProductVariantSelector = ({
	product: { variants },
}: {
	product: ProductDetailedFragment;
}) => {
	const router = useRouter();
	const pathname = usePathname();
	const searchParams = useSearchParams();

	if (!variants) return null;

	return (
		<select
			name="variant"
			id="variant"
			className="rounded bg-slate-100 p-0.5 text-slate-900 outline-none"
			value={searchParams.get("variant") || variants[0]?.id}
			onChange={(e) => {
				const newSearchParams = getUpdatedSearchParams(searchParams, { variant: e.target.value });
				router.push(`${pathname}?${newSearchParams}` as Route);
			}}
		>
			{variants.map((variant) => (
				<option key={variant.id} value={variant.id}>
					{variant.name}
				</option>
			))}
		</select>
	);
};
