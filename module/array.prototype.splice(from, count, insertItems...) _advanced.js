const spliceFunc = (mas) => {
  Array.prototype.splice = () => {
    return this
  }
  return mas.splice()
}

// Array.prototype.splice = ()

module.exports = {
  spliceFunc,
}