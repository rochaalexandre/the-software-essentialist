import { PasswordValidator, Result } from "./index";

describe('password validator', () => {

  test('Return object has sucess equal true', () => {
    const result = new Result()
    expect(result.isSuccess()).toBeTruthy()
  })

  test('Return object contains error list with one element', () => {
    const result= new Result()
    result.addError('Your password should contain at least 1 digit')

    expect(result.isSuccess()).toBeFalsy()
    expect(result.getErrors()).toHaveLength(1)
    expect(result.getErrors()[0].message).toBeDefined()
  })

  test('Should return true when a password is valid', ()=> {
    const result = PasswordValidator.validate("uaK7qeqDUBJddir")
    expect(result.isSuccess()).toBeTruthy()
  })

  test('Should return an error when the password length is less than 5', () => {
    const result = PasswordValidator.validate("123A")
    expect(result.isSuccess()).toBeFalsy()
    expect(result.getErrors()).toHaveLength(1)
  })

  test('Should return an error when the password length is bigger than 15', () => {
    const result = PasswordValidator.validate("uaK7qeqDUBJddir1233")
    expect(result.isSuccess()).toBeFalsy()
    expect(result.getErrors()).toHaveLength(1)
  })

  test('Should return an error when the password does not contains any digit', () => {
    const result = PasswordValidator.validate("uaKKqeqDUBJddir")
    expect(result.isSuccess()).toBeFalsy()
    expect(result.getErrors()).toHaveLength(1)
  })

  test('Should return an error when the password does not contains any Upper Case Char', () => {
    const result = PasswordValidator.validate("uak7qeqdubjddir")
    expect(result.isSuccess()).toBeFalsy()
    expect(result.getErrors()).toHaveLength(1)
  })

})