const obj = {
  person: {
    name: 'joe',
    history: {
      hometown: 'bratislava',
      bio: {
        funFact: 'I like fishing.'
      }
    }
  }
};

Object.prototype.hash = function(string) {
  string = string.split(".")
  let fl = false, data
  string.forEach((e) => {
    if (this[e]) {
      console.log(this[e])
    }
  })
  if (!fl) return false
  return true
}

let da = obj.hash('person.history.bio'); // 'joe'
console.log(da)

module.exports = {
  obj
}