import {isPalindrome} from "./index";

describe('palindrome checker', () => {
    it('should return a boolean', () => {
        expect(typeof isPalindrome('word')).toBe('boolean')
    })

    it('should return true for "mom"', async () => {
        expect(isPalindrome('mom')).toBeTruthy()
    });

    it('should return false for "Momx"', async () => {
        expect(isPalindrome('Momx')).toBeFalsy()
    });


})


