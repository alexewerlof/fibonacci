module.exports = function fib(nth) {
    if (nth < 3) {
        return 1n
    }
    let a = b = 1n, c
    for (let i = 3; i <= nth; i++) {
        c = a + b
        a = b, b = c
    }
    return c
}
