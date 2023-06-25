import { isPalindrome } from "./index";

describe("palindrome checker", () => {
  describe("recognize simple words palindromes ignoring case", () => {
    it.each(["mom", "Mom", "MoM", "xMomX"])(
      'it knows that "%s" is a palindrome',
      (value) => {
        expect(isPalindrome(value)).toBeTruthy();
      }
    );

    it('knows that "Momx" is not a palindrome', async () => {
      expect(isPalindrome("Momx")).toBeFalsy();
    });
  });

  describe("recognize phrases palindromes ignoring case", () => {
    it.each(["Was It A Rat I Saw", "Never Odd or Even", "1Never Odd or Even1"])(
      'it knows "%s" is a palindrome',
      (value) => {
        expect(isPalindrome(value)).toBeTruthy();
      }
    );

    it('knows that "Never Odd or Even1" is not a palindrome', async () => {
      expect(isPalindrome("Never Odd or Even1")).toBeFalsy();
    });
  });
});
