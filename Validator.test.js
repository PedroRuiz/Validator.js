import Validator from "./Validator"

describe('Testing validator', () => {
  
  test('testing type()', () => {
    expect(Validator({}).type()).toEqual('object')
  })

  test('tesint isString()', () => {
    expect(Validator('string').isString()).toEqual(true)
  })

  test('testing isNumber()', () => {
    expect(Validator(3.14).isNumber()).toEqual(true)
  })

  test('testing isObject()', () => {
    expect(Validator({}).isObject()).toEqual(true)
  })

  test('testing isBoolean', () => {
    expect(Validator(false).isBoolean()).toEqual(true)
  })

  test('testing \'eu\' isDate()', () => {
    expect(Validator('15/12/2019').isDate('eu')).toEqual(true)
  })

  test('testing \'us\' isDate()', () => {
    expect(Validator('12/15/2019').isDate('us')).toEqual(true)
  })

  test('testing isEmail()', () => {
    expect(Validator('e@ma.il').isEmail('eu')).toEqual(true)
  })

  test('testing length()', () => {
    expect(Validator('abc').length()).toEqual(3)
  })

  test('testing lengthMoreThan()', () => {
    expect(Validator('abc').lengthMoreThan(2)).toEqual(true)
  })

  test('testing lengthLessThan()', () => {
    expect(Validator('abc').lengthLessThan(5)).toEqual(true)
  })

  test('testing lengthEqualTo()', () => {
    expect(Validator('abc').lengthEqualTo(5)).toEqual(false)
  })
  
  test('testing passwordMatch()', () => {
    expect(Validator('abc').passwordMatch('qaz')).toEqual(false)
  })

  test('testing regExp()', () => {
    expect(Validator('HelloWorld').regExp(/^[a-z0-9]+$/i)).toEqual(true)
  })

});