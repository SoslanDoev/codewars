const nbDig = (n, d) => {
  let count = (d === 0) ? 1 : 0
  for (let i = 0; i <= n; i++) {
    let res = Math.pow(i, 2)
    let m = Math.ceil(Math.log10(res + 1))
    for (let j = 0; j < m; j++) {
      if ((res % 10) === d) count++
      res = Math.floor(res / 10)
    }
  }
  return count
}

module.exports = {
  nbDig,
}