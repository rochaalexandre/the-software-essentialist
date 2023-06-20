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
        if (password.length < 5 ) {
            result.addError('Your password must contain at least 5 characters')
        }
        if (password.length > 15 ) {
            result.addError('Your password must contain at less than 15 characters')
        }
        if (!/\d/.test(password)) {
            result.addError('Your password must contain at less 1 Digit')
        }

        return result
    }
}

