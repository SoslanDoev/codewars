const os = require("os")
console.log(os.platform(), os.release())
const userName = "Alice"
const sayHi = () => {
  return "Function"
}
module.exports = {
  userName,
  sayHi
}