const pickPeaks = (mas) => {
  let newObject = {pos: [], peaks: []}
  if (!mas.length) newObject 
  let peak, pos
  for (let i = 1; i < mas.length; i++) {
    if (mas[i] > mas[i - 1]) {
      peak = mas[i]
      pos = i
    } else if (mas[i] < mas[i - 1]) {
      if (pos > 0) {
        newObject.pos.push(pos)
        newObject.peaks.push(peak)
        pos = 0
      }
    }
  }
  return newObject 
}

module.exports = {
  pickPeaks,
}