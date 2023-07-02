import {BooleanCalculator} from "./index";

describe('boolean calculator', () => {
    it('knows how to calculate boolean expression', () => {
        expect(BooleanCalculator.evaluate("")).toBeTruthy()
    })

    it('Should evalutate "TRUE" as truthy',() => {
        expect(BooleanCalculator.evaluate("TRUE")).toBeTruthy()
    })
})
