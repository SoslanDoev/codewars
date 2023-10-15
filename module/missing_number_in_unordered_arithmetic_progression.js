const find = (mas) => {
  if (!Array.isArray(mas) || !mas.length) return 0
  let min = mas[0], max = min
  for (let i = 0; i < mas.length; i++) {
    if (mas[i] < min) min = mas[i]
    else if (mas[i] > max) max = mas[i]
  }
  let set = new Set(mas)
  let res = (max - min) / mas.length
  for (let i = min + res; i < max; i += res) {
    if (!set.has(i)) return i
  }; return -1
}

module.exports = {
  find,
}