import { type ReadonlyURLSearchParams } from "next/navigation";

export const stringToNumber = (string: string): number => {
	const parsed = parseInt(string, 10);
	return isNaN(parsed) ? 1 : parsed;
};

export const isBetween = (value: number, min: number, max: number): boolean => {
	return value >= min && value <= max;
};

export const getUpdatedSearchParams = (
	currentParams: ReadonlyURLSearchParams,
	updates: { [key: string]: string },
): string => {
	const updatedParams = new URLSearchParams(Array.from(currentParams.entries()));
	Object.entries(updates).forEach(([key, value]) => {
		updatedParams.set(key, value);
	});
	return updatedParams.toString();
};
