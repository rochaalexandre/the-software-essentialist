export interface Error {
    message: string
}

export class Result {
    success: boolean
    errors: Error[]

    constructor (success?: boolean) {
        this.success = success || true
        this.errors = []
    }

    public addError(message: string) {
        if (this.success){
            this.success = false
        }
        this.errors.push({message})
    }
}

export class PasswordValidator {
    public static validate(password: string): Result {
        const result = new Result()

        if (this.isSmallThan5Chars(password) ) {
            result.addError('Your password must contain at least 5 characters')
        }

        if (this.isBiggerThan15Chars(password)) {
            result.addError('Your password must contain at less than 15 characters')
        }

        if (this.isMissingDigit(password)) {
            result.addError('Your password must contain at less 1 Digit')
        }

        return result
    }

    private static isMissingDigit(value: string) {
        return !/\d/.test(value)
    }

    private static isBiggerThan15Chars(value: string){
        return value.length > 15
    }
    private static isSmallThan5Chars(value: string){
        return value.length < 5
    }
}

