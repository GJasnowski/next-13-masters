export const stringToNumber = (string: string): number => {
	const parsed = parseInt(string, 10);
	return isNaN(parsed) ? 1 : parsed;
};

export const isBetween = (min: number, max: number, value: number): boolean => {
	return value >= min && value <= max;
};
