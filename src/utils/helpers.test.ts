import { formatValidatorKey, hexToRGB, isJSON } from './helpers';

describe('helpers', () => {
	it('should return a rgb color', () => {
		expect(hexToRGB('#ff0000')).toBe('rgb(255, 0, 0)');
		expect(hexToRGB('#ff0000', 0.5)).toBe('rgba(255, 0, 0, 0.5)');
	});

	it('should return true if string is JSON praseable', () => {
		expect(isJSON('{}')).toBe(true);
		expect(isJSON('{ "key": "value" }')).toBe(true);
		expect(isJSON('{ "key": "value", "key2": "value2" }')).toBe(true);
		expect(isJSON('{ "key": "value", "key2": "value2", "key3": "value3" }')).toBe(true);
	});

	it('should return false if string is not JSON praseable', () => {
		expect(isJSON('Your token is empty')).toBe(false);
	});

	it('should return a readable text from Camel case', () => {
		expect(formatValidatorKey('validatorKey')).toBe('Validator key');
		expect(formatValidatorKey('ValidatorKey')).toBe('Validator key');
	});
});
