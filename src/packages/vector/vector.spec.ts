import { Vector } from './vector';

describe('[CLASS]: Vector', () => {
	test.each([
		{ x: 0, y: 0 },
		{ x: 1, y: 1 },
		{ x: -1, y: -1 },
		{ x: -1, y: 1 },
		{ x: 1, y: -1 },
		{ x: -Infinity, y: Infinity },
		{ x: Math.PI, y: Math.PI }
	])('should correctly assign params in the constructor to x and y respectively when %o', testCase => {
		const v = new Vector(testCase.x, testCase.y);

		expect(v.x).toBe(testCase.x);
		expect(v.y).toBe(testCase.y);
	});

	test.each([
		{ x: 0, y: 0 },
		{ x: 1, y: 1 },
		{ x: -1, y: -1 },
		{ x: -1, y: 1 },
		{ x: 1, y: -1 },
		{ x: -Infinity, y: Infinity },
		{ x: Math.PI, y: Math.PI }
	])('should correctly assign params in the constructor to x and y respectively when an object is passed %o', testCase => {
		const v = new Vector(testCase);

		expect(v.x).toBe(testCase.x);
		expect(v.y).toBe(testCase.y);
	});

	describe('[METHOD]: add', () => {
		it('should return a new instance of a Vector', () => {
			const v = new Vector(1, 1);
			const v2 = new Vector(1, 1);

			expect(v.add(v2)).toBeInstanceOf(Vector);
		});

		test.each([])('should add the x and y values of the passed Vector to the current Vector %o', testCase => {
			const v = new Vector(testCase.x1, testCase.y1);
			const v2 = new Vector(testCase.x2, testCase.y2);

			expect(v.add(v2)).toEqual(new Vector(testCase.x1 + testCase.x2, testCase.y1 + testCase.y2));
		});
	});
});
