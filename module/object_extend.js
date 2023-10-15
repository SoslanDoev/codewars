const object_extend = (...args) => {
  let newObject = {}
  if (!args.length) return newObject
  args.forEach((e) => {
    if (typeof e === "object") {
      Object.keys(e).forEach((n) => {
        if (!newObject.hasOwnProperty(n)) {
          newObject[n] = e[n]
        }
      })
    }
  })
  return newObject
}

module.exports = {
  object_extend
}