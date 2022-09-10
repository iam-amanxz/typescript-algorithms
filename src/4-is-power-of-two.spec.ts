import { isPowerOfTwo, isPowerOfTwoBitwise } from './4-is-power-of-two'

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

it('tests isPowerOfTwoBitwise function', () => {
  expect(isPowerOfTwoBitwise(1)).toEqual(true)
  expect(isPowerOfTwoBitwise(2)).toEqual(true)
  expect(isPowerOfTwoBitwise(4)).toEqual(true)
  expect(isPowerOfTwoBitwise(8)).toEqual(true)
  expect(isPowerOfTwoBitwise(2048)).toEqual(true)
  expect(isPowerOfTwoBitwise(3)).toEqual(false)
  expect(isPowerOfTwoBitwise(0)).toEqual(false)
  expect(isPowerOfTwoBitwise(6)).toEqual(false)
  expect(isPowerOfTwoBitwise(7)).toEqual(false)
  expect(isPowerOfTwoBitwise(250)).toEqual(false)
})
