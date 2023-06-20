export interface Error {
    message: string
}

export class Result {
    private success: boolean
    private readonly errors: Error[]

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

    public getErrors(): Error[] {
        return this.errors
    }

    public isSuccess(): boolean {
        return this.success
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

        if (this.isMissingUpperCaseChar(password)) {
            result.addError('Your password must contain at less 1 Upper Case letter')
        }

        return result
    }

    private static isMissingDigit(value: string) {
        return !/\d/.test(value)
    }

    private static isMissingUpperCaseChar(value: string) {
        return !/[A-Z]/.test(value)
    }

    private static isBiggerThan15Chars(value: string){
        return value.length > 15
    }
    private static isSmallThan5Chars(value: string){
        return value.length < 5
    }
}

