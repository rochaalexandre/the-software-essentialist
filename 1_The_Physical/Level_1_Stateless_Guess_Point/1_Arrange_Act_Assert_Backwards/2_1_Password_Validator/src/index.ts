export interface Result {
    sucess: boolean,
    errors: Error[]
}

export interface Error {
    message: string
}

export class PasswordValidator {
    public static validate(password: string): Result {
        return { sucess: !!password, errors: [] }
    }
}