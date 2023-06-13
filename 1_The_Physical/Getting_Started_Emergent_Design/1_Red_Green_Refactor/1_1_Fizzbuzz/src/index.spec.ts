import {fizzBuzz} from "./fizzbuzz";

describe("fizzbuzz", () => {
    it('should return a value type of string',() => {
        expect(typeof fizzBuzz(2)).toBe('string')
    })

    it('should return Fizz when the value is 3',() =>{
        expect(fizzBuzz(3)).toBe('Fizz')
    })

    it('should return Buzz when the value is 5',() =>{
        expect(fizzBuzz(5)).toBe('Buzz')
    })


    it('should return FizzBuzz when the value is 15',() =>{
        expect(fizzBuzz(15)).toBe('FizzBuzz')
    })
});
