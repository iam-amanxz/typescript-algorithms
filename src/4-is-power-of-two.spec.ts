import { isPowerOfTwo } from './4-is-power-of-two'

it('tests isPowerOfTwo function', () => {
  expect(isPowerOfTwo(1)).toEqual(true)
  expect(isPowerOfTwo(2)).toEqual(true)
  expect(isPowerOfTwo(4)).toEqual(true)
  expect(isPowerOfTwo(8)).toEqual(true)
  expect(isPowerOfTwo(2048)).toEqual(true)
  expect(isPowerOfTwo(3)).toEqual(false)
  expect(isPowerOfTwo(0)).toEqual(false)
  expect(isPowerOfTwo(6)).toEqual(false)
  expect(isPowerOfTwo(7)).toEqual(false)
  expect(isPowerOfTwo(250)).toEqual(false)
})
