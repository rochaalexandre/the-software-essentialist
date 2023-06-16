import {isPalindrome} from "./index";

describe('palindrome checker', () => {
    it('should return a boolean', () => {
        expect(typeof isPalindrome('word')).toBe('boolean')
    })

    it('should return true for "mom"', async () => {
        expect(isPalindrome('mom')).toBeTruthy()
    });

    it('should return true for "Mom"', async () => {
        expect(isPalindrome('Mom')).toBeTruthy()
    });

    it('should return true for "MoM"', async () => {
        expect(isPalindrome('Mom')).toBeTruthy()
    });

    it('should return false for "Momx"', async () => {
        expect(isPalindrome('Momx')).toBeFalsy()
    });

    it('should return true for "xMomx"', async () => {
        expect(isPalindrome('xMomx')).toBeTruthy()
    });

    it('should return true for "Was It A Rat I Saw"', async () => {
        expect(isPalindrome('Was It A Rat I Saw')).toBeTruthy()
    });


})


