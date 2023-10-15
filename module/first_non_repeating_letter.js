// Решение 1
// const firstNonRepeatingLetter = (str) => {
//   if (!str.length) return ""
//   let newStr = str.toLowerCase().split("")
//   str = str.split("")
//   let res = "", index = 0
//   for (let i = 0; i < newStr.length; i++) {
//     res = newStr[i]
//     index = i
//     let fl = false
//     for (let j = 0; j < newStr.length; j++) {
//       if (newStr[i] === newStr[j] && i !== j) {
//         fl = true; break
//       } 
//     }
//     if (!fl) return (newStr[index] === str[index]) ? res : res.toUpperCase()
//   }
//   return ""
// }

// Решение 2
function firstNonRepeatingLetter(s) {
  var t=s.toLowerCase();
  for (var x=0;x<t.length;x++)
    if(t.indexOf(t[x]) === t.lastIndexOf(t[x]))
      return s[x];
  return "";
}

module.exports = {
  firstNonRepeatingLetter,
}