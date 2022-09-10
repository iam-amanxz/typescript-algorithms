// Given a integer 'n', find the factorial of that integer

export function factorial(n: number) {
  let product = 1
  for (let i = 1; i <= n; i++) {
    product *= i // x(n-1) => ~n => O(n) Linear
  }
  return product
}
// export function factorial(n: number) {
//   const array = [...Array(n + 1).keys()]
//   array.shift()
//   return array.reduce((prev, curr) => {
//     return prev * curr
//   })
// }
