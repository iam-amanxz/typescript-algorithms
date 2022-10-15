import { fibonacci, fibonacciRecursive } from './1-fibonacci'

it('tests fibonacci function', () => {
  expect(fibonacci(5)).toEqual([0, 1, 1, 2, 3, 5])
  expect(fibonacci(10)).toEqual([0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55])
})

it('tests fibonacci recursive function', () => {
  expect(fibonacciRecursive(0)).toEqual(0)
  expect(fibonacciRecursive(1)).toEqual(1)
  expect(fibonacciRecursive(6)).toEqual(8)
})
