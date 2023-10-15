const compare = (a, b) => {
  console.log(a, b)
  const alphabet = {
    "#": 0, "div": 1, ".": 2, "": 2 
  }
  let res_1 = a.split(/\.| /)
  let res_2 = b.split(/\.| /)
  if (alphabet[a[0] < alphabet[b[0]]]) return a
  else if (alphabet[a[0]] >= alphabet[b[0]]) return b
  if (alphabet[res_1[0]] < alphabet[res_2[0]]) return a
  else if (alphabet[res_1[0]] >= alphabet[res_2[0]]) return b
  if (alphabet[res_1[0][0]] || 2< alphabet[res_2[0][0]] || 2) return a  
  else if (alphabet[res_1[0][0]] || 2 >= alphabet[res_2][0][0] || 2) return b
  
  // '1?2&3'.split(/\?|&/);
  // let res_1 = a.split(" "), res_2 = b.split(" ")
  // console.log(alphabet[res_1[0][0]], alphabet[res_2[0][0]])
  // if (alphabet[res_1[0][0]] > alphabet[res_2[0][0]]) return a
  // else if (alphabet[res_1[0][0]] <= alphabet[res_2[0][0]]) return b
  // res_1 = a.split("div")
  // return false
  // console.log(a, b)
  // if (a[0] === "." && b[0] === ".") return b
  // a = a.split(".")
  // return a
  return false
}

module.exports = {
  compare,
}

// simple_css_selector_comparison.js