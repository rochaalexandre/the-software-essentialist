export const FIZZ = 'Fizz'
export const BUZZ = 'Buzz'
export const FIZZBUZZ = 'FizzBuzz'

export function fizzBuzz(param: number) {
    let result = ''
    if (param < 1 || param > 100) {
        return result;
    }

    if (isMutipleOf3(param)) {
        result += FIZZ
    }

    if (isMutipleOf5(param)) {
        result += BUZZ
    }

    if (!result){
        result = param.toString()
    }

    return result
}

const isMutipleOf3 = (param: number) => param % 3 === 0
const isMutipleOf5 = (param: number) => param % 5 === 0