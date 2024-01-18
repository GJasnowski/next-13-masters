export const stringToNumber = (string: string): number => {
	const parsed = parseInt(string, 10);
	return isNaN(parsed) ? 1 : parsed;
};

export const isBetween = (value: number, min: number, max: number): boolean => {
	return value >= min && value <= max;
};
