export const FIZZ = 'Fizz'
export const BUZZ = 'Buzz'
export const FIZZBUZZ = 'FizzBuzz'

export function fizzBuzz(param: number) {
    let result = ''
    if (param < 1 || param > 100) {
        return result;
    }

    if (isMultipleOf3(param)) {
        result += FIZZ
    }

    if (isMultipleOf5(param)) {
        result += BUZZ
    }

    if (!result){
        result = param.toString()
    }

    return result
}

const isMultipleOf3 = (param: number) => param % 3 === 0
const isMultipleOf5 = (param: number) => param % 5 === 0