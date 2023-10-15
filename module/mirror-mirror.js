const mirror = (obj) => {
  let newObject = {}
  Object.keys(obj).forEach((e) => {
    let res = e.toString().split("").reverse().join("")
    newObject[e] = res    
  }); return newObject
}
module.exports = {
  mirror
}