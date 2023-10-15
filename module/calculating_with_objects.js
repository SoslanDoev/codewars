class Num {
  constructor(num){
    this.num=num;
  }
  toString() {
    return "The number is " + this.num;
  }
  valueOf() {
    return {num: this.num};
  }
}

Num.prototype.toString = function() {
  return "The number is " + String(this.num);
};

console.log([Symbol.toPrimitive])

// Num.prototype[Symbol.toPrimitive]=function(hint) {
  // return hint==='string'?this.toString():this.valueOf().num;
// }s

// Num.prototype.valueOf = function() {
  // return this.num
// };



console.log(new Num(123) + new Num(123), 246);
// console.log(new Num(15) + new Num(15) + 5, 35);
// console.log(new Num(1) * new Num(0) + 5, 5);
// console.log(new Num(1) - new Num(10), -9);
// console.log(new Num(0) + new Num(0) + 0, 0);
// console.log(Math.floor(new Num(5.5)), Math.floor(5.5), "should work with Math");
// console.log(typeof new Num(150), "object","typeof new Num should be object")
// console.log(new Num(100).toString(), "The number is 100", "toString should not be modified")
// console.log(1, new Num(150))
// console.log(2, new Num(150).valueOf())
console.log(4, typeof new Num(150).valueOf().num, "number")

