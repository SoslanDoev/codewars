const spaghettiCode = (plate) => {
  console.log(plate)
  let max = { count: -1, name: "", }
  plate.forEach((e) => {
    let name = "", count = 0, uniqName = ""
    for (let i = 0; i < e.length - 1; i++) {
      if (e[i] === "_" || e[i] === " " || e[i] === "") continue
      else uniqName = e[i]
      if (e[i] === e[i + 1]) {
        name = e[i]
        count++
      } else if (e[i] !== e[i + 1]) {
        if (max.name === "" && count === 0) {
          max.name = uniqName
        } else if (max.count < count || max.count === count) {
          max.count = count
          max.name = name
        }
        count = 0
      }
    }
  })
  return max
}

module.exports = {
  spaghettiCode,
}