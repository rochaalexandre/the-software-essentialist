export interface Result {
    sucess: boolean,
    errors: Error[]
}

export interface Error {
    message: string
}