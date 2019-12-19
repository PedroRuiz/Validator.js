import Validator from "./Validator"

describe('Testing validator', () => {
  
  test('should object', () => {
    expect(Validator({}).type()).toEqual('object')
  })

  test('should string', () => {
    expect(Validator('string').isString()).toEqual(true)
  })

  test('should number', () => {
    expect(Validator(3.14).isNumber()).toEqual(true)
  })

  test('should object', () => {
    expect(Validator({}).isObject()).toEqual(true)
  })

  test('should isBoolean', () => {
    expect(Validator(false).isBoolean()).toEqual(true)
  })

  test('should eu date', () => {
    expect(Validator('15/12/2019').isDate('eu')).toEqual(true)
  })

  test('should us date', () => {
    expect(Validator('12/15/2019').isDate('us')).toEqual(true)
  })

  test('should is email', () => {
    expect(Validator('e@ma.il').isEmail('eu')).toEqual(true)
  })

  test('should length', () => {
    expect(Validator('abc').length()).toEqual(3)
  })

  test('should lengthMoreThan', () => {
    expect(Validator('abc').lengthMoreThan(2)).toEqual(true)
  })

  test('should lengthLessThan', () => {
    expect(Validator('abc').lengthLessThan(5)).toEqual(true)
  })

  test('should lengthEqualTo', () => {
    expect(Validator('abc').lengthEqualTo(5)).toEqual(false)
  })
  
  test('should passwordMatch', () => {
    expect(Validator('abc').passwordMatch('qaz')).toEqual(false)
  })

  test('should regExp', () => {
    expect(Validator('HelloWorld').regExp(/^[a-z0-9]+$/i)).toEqual(true)
  })

});