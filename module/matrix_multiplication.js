const matrixMultiplication = (a, b) => {
  let rowsA = a.length, rowsB = b.length
  let mas = []
  if (a[0].length !== b[0].length) return false
  for (let i = 0; i < rowsA; i++) mas[i] = []
  for (let k = 0; k < b[0].length; k++) {
    for (let i = 0; i < rowsA; i++) {
      let res = 0
      for (let j = 0; j < rowsB; j++) {
        res += a[i][j] * b[j][k]
        mas[i][k] = res
      }
    }
  }
  return mas
}
module.exports = {
  matrixMultiplication,
}