export const hexToRGB = (hex: string, alpha?: number) => {
	const r = parseInt(hex.slice(1, 3), 16);
	const g = parseInt(hex.slice(3, 5), 16);
	const b = parseInt(hex.slice(5, 7), 16);

	return alpha !== undefined ? `rgba(${r}, ${g}, ${b}, ${alpha})` : `rgb(${r}, ${g}, ${b})`;
};

export const isNullProperties = (obj: Record<string, unknown>): boolean => {
	for (const key in obj) {
		if (obj[key] !== null && obj[key] !== '') return false;
	}
	return true;
};

export const formatReadable = (value: string): string => value.replace(/([A-Z])/g, ' $1');

export const formatValidatorKey = (value: string): string => {
	const val = formatReadable(value);
	return val.charAt(0).toUpperCase() + val.slice(1).toLowerCase();
};
