export interface Result {
    success: boolean,
    errors: Error[]
}

export interface Error {
    message: string
}

export class PasswordValidator {
    public static validate(password: string): Result {
        if (password.length < 5 ) {
            return { success: false, errors: [
                {message: 'Your password must contain at least 5 characters'}
            ]}
        }
        if (password.length > 15 ) {
            return { success: false, errors: [
                {message: 'Your password must contain at least 5 characters'}
            ]}
        }
        if (!/\d/.test(password)) {
            return { success: false, errors: [
                {message: 'Your password must contain at least 5 characters'}
            ]}
        }
        return { success: !!password, errors: [] }
    }
}