// Given a integer 'n', find the factorial of that integer

export function isPrime(n: number): boolean {
  // Zero, one, and numbers less than one are not considered as prime numbers.
  if (n <= 1) return false
  // should only be divisible by itself and 1
  for (let i = 2; i < n; i++) {
    if (n % i === 0) return false
  }
  return true
}
