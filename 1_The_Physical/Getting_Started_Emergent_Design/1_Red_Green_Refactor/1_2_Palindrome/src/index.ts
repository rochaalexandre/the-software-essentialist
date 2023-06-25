function reverseWord(word: string) {
    return word.split("").reverse().join("");
}
function toLowerCaseWithNoWhiteSpace(word: string) {
    return word.replace(/\s+/g, '').toLowerCase();
}
export function isPalindrome(value: string) {
    const valueNormalized = toLowerCaseWithNoWhiteSpace(value)
    const reversed =  toLowerCaseWithNoWhiteSpace(reverseWord(value))
    return reversed === valueNormalized
}