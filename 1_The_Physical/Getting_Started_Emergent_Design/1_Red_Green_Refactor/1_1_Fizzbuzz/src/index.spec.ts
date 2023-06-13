import { BUZZ, FIZZ, FIZZBUZZ, fizzBuzz } from "./fizzbuzz";

describe("fizzbuzz", () => {
    it('should return a value type of string',() => {
        expect(typeof fizzBuzz(2)).toBe('string')
    })

    test.each([
        {value: 3, expected: FIZZ},
        {value: 9, expected: FIZZ},
        {value: 42, expected: FIZZ},
        {value: 5, expected: BUZZ},
        {value: 15, expected: FIZZBUZZ},
        {value: 45, expected: FIZZBUZZ},
    ])('should return $expected when the value is $value', ({value, expected}) => {
        expect(fizzBuzz(value)).toBe(expected)
    });

});
