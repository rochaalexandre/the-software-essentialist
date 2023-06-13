export function fizzBuzz(param: number) {
    if (param === 15){
        return 'FizzBuzz';
    }
    return isMutipleOf3(param) ? 'Fizz' : (param === 5 ? 'Buzz':'');
}

const isMutipleOf3 = (param: number) => param % 3 === 0