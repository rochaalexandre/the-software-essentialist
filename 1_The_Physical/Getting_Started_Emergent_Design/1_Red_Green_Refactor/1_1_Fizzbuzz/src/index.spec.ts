import {fizzBuzz} from "./fizzbuzz";

describe("fizzbuzz", () => {
    it('should return a value type of string',() => {
        expect(typeof fizzBuzz(2)).toBe('string')
    })

    it('should return Fizz when the value is 3',() =>{
        expect(fizzBuzz(3)).toBe('Fizz')
    })
});
