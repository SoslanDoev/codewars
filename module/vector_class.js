var Vector = function (components) {
  this.components = components;

  this.add = function( mas ) {
    if ( this.components.length !== mas.components.length ) {
      throw Error( "The length of the vectors must be the same" )
    }
    let sums = []
    for (let i = 0; i < this.components.length; i++) {
      sums.push( this.components[i] + mas.components[i] )
    }; return new Vector(sums)
  }

  this.subtract = function( b ) {
    if ( this.components.length !== b.components.length ) {
      throw Error( "The length of the vectors must be the same" )
    }
    let differences = [];
    for (let i = 0; i < this.components.length; i++) {
      differences.push( this.components[i] - b.components[i] )
    }; return new Vector(differences)
  }

  this.dot = function (mas) {
    if (mas.components.length !== this.components.length) {
      throw Error( "The length of the vectors must be the same" )
    }
    let sum = 0
    for (let i = 0; i < mas.components.length; i++) {
      sum += mas.components[i] * this.components[i]
    }; return sum
  }

  this.norm = function () {
    return Math.sqrt(this.components.reduce((acc, e) => {
      acc += Math.pow(e, 2)
      return acc
    }, 0))
  }

  this.equals = function (mas) {
    if (this.components.length !== mas.components.length) {
      return false
    }
    for (let i = 0; i < this.components.length; i++) {
      if (this.components[i] !== mas.components[i]) return false
    }; return true
  }

  this.toString = function () {
    return `(${this.components.join(",")})`
  }
};

module.exports = {
  Vector,
}