const getLengthOfMissingArray = (mas) => {
  if (!mas || !Array.isArray(mas) || !mas.length) return 0
  for (let i = 0; i < mas.length; i++) {
    if (!Array.isArray(mas[i]) || mas[i].length === 0) return 0
  }
  mas = mas.sort((a, b) => a.length - b.length)
  for (let i = 1; i < mas.length; i++) {
    if (!mas[i] || !mas[i - 1]) return 0 
    let res = Math.abs(mas[i].length - mas[i - 1].length)
    if (res === 1) {
      continue
    } else if (mas[i].length - mas[i - 1].length > 2) {
      return 0
    }
    else {
      return Math.abs(mas[i - 1].length + 1)
    }
  }
  return 0
}

module.exports = {
  getLengthOfMissingArray
}