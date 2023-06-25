import {StatsCaculator} from "./index";

describe('stats calculator', () => {
    it(' knows the minimum value in a sequence of integers', () => {
        const numbers = [2, 4, 21, -8, 53, 40];
        expect(StatsCaculator.min(numbers)).toBe(-8);
    })

})