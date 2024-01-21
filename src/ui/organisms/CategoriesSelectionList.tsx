import { type Route } from "next";
import { SelectionListItem } from "../atoms/SelectionListItem";
import { type CategoryListItemFragment } from "@/gql/graphql";

export const CategoriesSelectionList = ({
	categories,
}: {
	categories: CategoryListItemFragment[];
}) => {
	return (
		<div className="grid grid-cols-3 gap-6">
			{categories.map((category) => (
				<SelectionListItem
					key={category.id}
					href={`/categories/${category.slug}/1` as Route}
					name={category.name}
				/>
			))}
		</div>
	);
};
