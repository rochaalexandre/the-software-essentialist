import { PasswordValidator, Result } from "./index";

describe('password validator', () => {

  test('Return object has sucess equal true', () => {
    const result: Result = {
      sucess: true,
      errors: []
    }
    expect(result.sucess).toBeTruthy()
  })

  test('Return object contains error list with one element', () => {
    const result: Result = {
      sucess: false,
      errors: [{
        message: "Your password should contain at least 1 digit"
      }]
    }
    expect(result.sucess).toBeFalsy()
    expect(result.errors).toHaveLength(1)
    expect(result.errors[0].message).toBeDefined()
  })

  test('Should return true when a password is valid', ()=> {
    const result = PasswordValidator.validate("uaK7qeqDUBJddir")
    expect(result.sucess).toBeTruthy()
  })
})