/**
 * @author Pedro Ruiz Hidalgo <ruizhidalgopedro@gmail.com>
 * @pedroruizhidalg
 *
 * coding the world since 1983
 *
 * date 2019-12-05
 *
  *
 * Name: Validator.js
 *
 * Purpose: Simple and very effective validator for JavaScript 
 *
 */


const Validator = (field, type='string') => {
  return {
    type : () => {
      return typeof field
    },
    isString : () => {
      return typeof field === 'string'
    },
    isAlphaNumeric() {
      if(typeof field === 'string')
      {
        return ! /^[a-z0-9]+$/i.test(field)
      }
      return false;      
    },
    isNumber : () => {
      return typeof field === 'number'
    },
    isObject : () => {
      return typeof field === 'object'
    },
    isBoolean : () => {
      return typeof field === 'boolean'
    },
    isDate : (type) => {
      if(type === 'eu') {
        const f = field.split('/')

        const date = new Date(f[1]+'/'+f[0]+'/'+f[2])
        return date instanceof Date && !isNaN(date);
      }
      if(type === 'us') {            
        const date = new Date(field)
        return date instanceof Date && !isNaN(date);
      }
      return false
    },
    isEmail : () => {
      var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(String(field).toLowerCase());
    },
    length : (long) => {
      return field.length === long
    },
    lengthMoreThan : (long) => {
      return field.length > long
    },
    lengthLessThan : (long) => {
      return field.length < long
    },
    lengthEqualTo : (long) => {
      return field.length === long
    },
    passwordMatch : (repeatPassword) => {
      return field === repeatPassword
    },
    regExp : (regExp) => {
      const expression = new RegExp(regExp)
      return expression.test(field)
    }
  }
}

export default Validator;
