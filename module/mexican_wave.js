const wave = (str) => {
  return  
  if (!str.length || typeof(str) !== "string") return []
  str = str.toLowerCase()
  let mas = []
  for (let i = 0; i < str.length; i++) {
    let res = str.split("")
    if (res[i] === " ") continue
    res[i] = res[i].toUpperCase()
    mas.push(res.join(""))
  }
  return mas
}
module.exports = {
  wave,
}








const func = (a, b, ...args) => {
  console.log(a, b, args)
  return false
}
console.log(func(1, 2, 3, 4, true, false, {}, [], "string", 5, 6, 7, 8, 9, 10))

