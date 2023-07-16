import { PasswordValidator, Result } from "./index";

describe('password validator', () => {

  test('Should get a return object that has sucess equal true', () => {
    const result = new Result()
    expect(result.isSuccess()).toBeTruthy()
  })

  test('Should get a return object that contains an error list with one element', () => {
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

  test('Should multiple errors for the value "mom"', ()=> {
    const result = PasswordValidator.validate("mom")
    expect(result.isSuccess()).toBeFalsy()
    expect(result.getErrors()).toHaveLength(3)
  })

  test.each([
    {value: '123A', reason: 'length is less than 5'},
    {value: 'thePhysical1234567', reason: 'length is bigger than 15'},
    {value: 'maxwellTheBe', reason: 'does not contains any digit'},
    {value: 'maxwell1_c', reason: 'does not contains any Upper Case Char'},
    {value: 'maxwell1_c', reason: 'does not contains any Upper Case Char'},
    ])('Should return an error when the password is $value - $reason', ({value}) => {
      const result = PasswordValidator.validate(value)
      expect(result.isSuccess()).toBeFalsy()
      expect(result.getErrors()).toHaveLength(1)
    });
})