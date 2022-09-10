import { factorial } from './2-factorial'

it('tests factorial function', () => {
  expect(factorial(7)).toEqual(5040)
  expect(factorial(10)).toEqual(3628800)
  expect(factorial(14)).toEqual(87178291200)
})
