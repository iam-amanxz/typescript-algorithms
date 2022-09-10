import { isPrime } from './3-prime'

it('tests isPrime function', () => {
  expect(isPrime(7)).toEqual(true)
  expect(isPrime(10)).toEqual(false)
  expect(isPrime(14)).toEqual(false)
  expect(isPrime(23)).toEqual(true)
  expect(isPrime(0)).toEqual(false)
  expect(isPrime(1)).toEqual(false)
  expect(isPrime(-3)).toEqual(false)
})
