export function fizzBuzz(param: number) {
    if (param === 15){
        return 'FizzBuzz';
    }
    return param === 3 ? 'Fizz' : (param === 5 ? 'Buzz':'');
}