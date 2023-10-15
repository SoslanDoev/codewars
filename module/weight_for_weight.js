const sum = (number) => number.split("").map(Number).reduce((acc, e) => acc += e)
const orderWeight = (str) => str.split(" ").sort((a, b) => sum(a) - sum(b) || a > b || -(a < b)).join(" ")

module.exports = {
  orderWeight,
}