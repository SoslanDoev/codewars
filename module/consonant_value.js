const solve = (str) => {
  const mas = ["a", "e", "i", "o", "u",]
  // return "a".charCodeAt()-96

  // let newStr = "", newMas = []
  // s=s.toLowerCase();
  // let arr=s.slice().replace(/[aeiuo]/g,' ').replace(/\s+/g,' ');
  // arr=arr.split(' ').map(v=>v.split('').map(v=>v.charCodeAt()-96).reduce((a,b)=>a+b,0))
  // return Math.max(...arr);
  let newStr = "", count = 0
  const sum = (s) => {
    if (s) return s.split("").map((e) => e = e.charCodeAt() - 96).reduce((acc, e) => acc += e)  
    return ""
  }
  str.split("").forEach((e, i, m) => {
    if (!m[i + 1] && mas.indexOf(m[i + 1]) === -1) {
      count = Math.max(count, sum(newStr)) 
      newStr = ""
    } else if (mas.indexOf(e) === -1) {
      newStr += e
    } else {
      count = Math.max(count, sum(newStr)) 
      newStr = ""
    }
  })
  return count
  // return newMas
  // return prevCount
  // return alphabet.indexOf("r")
  // s - 18, t - 19, r -17
  // let sum = 0
  // str.split("").forEach((e) => {
    // if (mas.indexOf(e) === -1) sum += alphabet.indexOf(e) + 1
    // else 
  // })
  // s.split("").forEach((e) => {
    // if (mas.indexOf(e) === -1) {
      // sum += alphabet.indexOf(e) + 1
    // }
  // }); return sum
  // return sum
}

module.exports = {
  solve
}