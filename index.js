const fib = require('./fib.js')
const fibmat = require('./fibmat.js')

const N = 1000000
let result

console.time('fib()')
result = fib(N)
console.timeEnd('fib()')
console.log(`Fibonacci #${N} = ${result}\n${result.toString().length} digits`)

console.time('fibmat()')
result = fibmat(N)
console.timeEnd('fibmat()')
console.log(`Fibonacci #${N} = ${result}\n${result.toString().length} digits`)