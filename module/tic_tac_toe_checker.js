const ticTacToeChecker = (mas) => {
  const check = (x, y) => (x === 3) ? 1 : y === 3 ? 2 : -1
  let x = 0, y = 0, res
  mas.forEach((e) => {
    e.forEach((n) => {
      if (n === 1) x++
      else if (n === 2) y++  
    })
  })
  if (x >= 4 || y >= 4) return 0
  x = y = 0
  for (let i = 0; i < mas.length; i++) {
    let x = 0, y = 0
    for (let j = 0; j < mas.length; j++) {
      if (mas[i][j] === 1) x++
      else if (mas[i][j] === 2) y++
    }
    res = check(x, y)
    if (res) return res
  }
  for (let i = 0; i < mas.length; i++) {
    if (mas[i][i] === 1) x++
    else if (mas[i][i] === 2) y++
  }
  res = check(x, y)
  if (res) return res
  x = 0; y = 0
  for (let i = mas.length - 1; i >= 0; i--) {
    if (mas[i][i] === 1) x++
    else if (mas[i][i] === 2) y++
  }
  res = check(x, y)
  if (res) return res
  return -1
}

module.exports = {
  ticTacToeChecker
}