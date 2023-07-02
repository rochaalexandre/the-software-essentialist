import {BooleanCalculator} from "./index";

describe('boolean calculator', () => {
    it('knows how to calculate boolean expression', () => {
        expect(BooleanCalculator.evaluate()).toBeFalsy()
    })
})
