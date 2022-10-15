// Given a number 'n' find the first 'n' elements of the fibonacci sequence

// function takes argument n
export function fibonacci(n: number): number[] {
  // first 2 number is 0,1
  const fib = [0, 1]
  // rest of the numbers are a sum of previous 2 numbers
  for (let i = 2; i <= n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2] // x(n-2) => ~n => O(n) Linear
  }
  return fib
}

export function fibonacciRecursive(n: number): number {
  if (n < 2) {
    return n
  }
  return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2)
}