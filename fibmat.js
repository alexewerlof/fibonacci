// from http://raganwald.com/2015/12/20/an-es6-program-to-compute-fibonacci.html

function matrixMult(...matrices) {
    return matrices.reduce(
    ([a, b, c], [d, e, f]) => [
        (a * d) + (b * e),
        (a * e) + (b * f),
        (b * e) + (c * f)
      ]
    ,
    [1n, 0n, 1n]);
}

function matrixPow(matrix, n) {
    if (n === 1) return matrix;

    let halves = matrixPow(matrix, Math.floor(n / 2));

    return n % 2 === 0
        ? matrixMult(halves, halves)
        : matrixMult(halves, halves, matrix);
}

module.exports = function fibmat(n) {
    return n < 2 ? n : matrixPow([1n, 1n, 0n], n - 1)[0];
}