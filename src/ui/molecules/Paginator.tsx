import { type Route } from "next";
import { PaginatorLink } from "../atoms/PaginatorLink";
import { isBetween } from "@/utils/general";

type PaginatorProps = {
	currentPage: number;
	totalPages: number;
	hrefBase: string;
};

const getHref = (hrefBase: string, targetPage: number): Route => {
	return `${hrefBase}/${targetPage}` as Route;
};

export const Paginator = ({ currentPage, hrefBase, totalPages }: PaginatorProps) => {
	return (
		<div className="flex">
			{[
				{ page: currentPage - 1, shouldRender: isBetween(2, totalPages, currentPage) },
				{ page: currentPage, shouldRender: isBetween(1, totalPages, currentPage) },
				{ page: currentPage + 1, shouldRender: isBetween(1, totalPages - 1, currentPage) },
			].map(({ page, shouldRender }) =>
				shouldRender ? (
					<div key={page} className="px-1">
						<PaginatorLink exact href={getHref(hrefBase, page)}>
							{page}
						</PaginatorLink>
					</div>
				) : (
					<></>
				),
			)}
		</div>
	);
};
