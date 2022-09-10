function isPowerOfTwo(n: number) {
  // 0 or negative numbers will return false
  if (n < 1) return false

  while (n > 1) {
    // if the reminder of n is not 0 when divided by 2, it will return false
    if (n % 2 !== 0) return false // => O(log n)
    // divide n by 2 and assign to n
    n /= 2
  }

  // if loop exits, n must be 1, 1 should return true
  return true
}

function isPowerOfTwoBitwise(n: number) {
  if (n < 1) return false

  return (n & (n - 1)) === 0 // => O(n)
}

export { isPowerOfTwo, isPowerOfTwoBitwise }
