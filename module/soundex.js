const soundex = (str) => {
  // Проблема в том что при нескольких одинаковых буквах должно быть одно значение 
  // Если буквы две ти А и А то берется одна если букв А А А будет два значения
  console.log(str)
  const alphabet = {
    b: 1, f: 1, p: 1, v: 1,
    c: 2, g: 2, j: 2, k: 2, q: 2, s: 2, x: 2, z: 2,
    d: 3, t: 3,
    l: 4,
    m: 5, n: 5,
    r: 6,
    a: -1, e: -1, i: -1, o: -1, u: -1, y: -1, h: -1, w: -1
  }
  let newStr = "" // Строка которую возвращаем
  str.split(" ").forEach((e, i, str) => {
    let
      localStr = e[0].toUpperCase() // Отдельное слово
      count = 0, // Подсчет сколько всего букв и цифр в слове
      prevWord = "", // Предыдущая буква,
      prevCount = 0, // Предыдущее число
      prevWordCount = 0 // Сколько раз встречалась предыдущая буква
    for (let i = 0; i < e.length; i++) {
      // if (alphabet[prevWord] === alphabet[e[i]]) {
      //   // Если предыдущая цифра равна текущей и она повторялась больше 1 раза
      //   if (prevWordCount > 2) {
      //     localStr += alphabet[e[i]]
      //     prevWordCount = 0
      //   }
      //   prevWordCount++
      // }
      if (prevCount === alphabet[e[i]] && prevWord !== e[i]) {
        // Если предыдущее число совпадает с текущем и буквы разные 
        localStr += alphabet[e[i]]
      }
      else if (alphabet[e[i]] && alphabet[e[i]] !== -1 && alphabet[e[i]] !== alphabet[prevWord]) {
        localStr += alphabet[e[i]]
        count++
        prevWord = e[i]
        prevCount = alphabet[e[i]]
      }
    }
    if (count < 3) localStr += "0".repeat(3 - count)
    if (localStr.length > 4) localStr = localStr.split("").splice(0, 4).join("")
    newStr += localStr
    if (str[i + 1]) newStr += " "
  })
  // str.split(" ").forEach((e, i, str) => {
  //   let count = 0
  //   let prev = ""
  //   let localStr = ""
  //   let prevCount = -1
  //   let countLength = 1
  //   localStr += e[0]
  //   let res = e.split("")
  //   for (let i = 0; i < res.length ; i++) {
  //     if (res[i] === res[i + 1] || alphabet[res[i]] === alphabet[res[i + 1]] || alphabet[res[i]] === -1) continue
  //     else if (alphabet[res[i]] && alphabet[res[i]] !== prevCount && res[i] !== prev) {
  //       localStr += alphabet[res[i]]
  //       count++
  //       prev = res[i]
  //       prevCount = alphabet[res[i]]
  //       countLength++
  //     }
  //   }
  //   if (count < 3) localStr += "0".repeat(3 - count)
  //   if (countLength > 4) localStr = localStr.split("").splice(0, 4).join("")
  //   if (str[i + 1]) localStr += " "
  //   newStr += localStr
  // })

  return newStr.toUpperCase()
}







  
  
  
  
  
  
  
  
  
  
  


  
  
  
  
  
  
  
  
  
  
  // var a = s.toLowerCase().split(''),
  // f = a.shift(),
  // r = '',
  // codes = { a: '', e: '', i: '', o: '', u: '', b: 1, f: 1, p: 1, v: 1, c: 2, g: 2, j: 2, k: 2, q: 2, s: 2, x: 2, z: 2, d: 3, t: 3, l: 4, m: 5, n: 5, r: 6 };
// 
// r = f +
  // a
  // .map(function(v, i, a) {
      // return codes[v]
  // })
  // .filter(function(v, i, a) {
      // return ((i === 0) ? v !== codes[f] : v !== a[i - 1]);
  // })
  // .join('');
// 
// return (r + '000').slice(0, 4).toUpperCase();
  // let newStr = str[0][0], count = 0, fl = false, prevN = ""
  // str.split("").forEach((e, i, str) => {
    // if (e === " " && str[i + 1]) { // Новое слово
      // if (count < 3) {
        // newStr += "0".repeat(3 - count)
        // fl = false
      // }
      // newStr += ` ${str[i + 1]}`
    // } else if (!str[i + 1]) {
      // if (count < 3) {
        // newStr += "0".repeat(3 - count)
        // fl = false
      // }
    // }
    // else if (prevN !== e && prevN !== str[i + 1] && alphabet[e]) { // 
      // newStr += alphabet[e]
      // prevN = e
      // count++
    // }
  // })
  // return newStr 








  
  // let newStr = "", count = 0, prevCount, prevElem
  // str.split(" ").forEach((e, i, str) => {
  //   newStr += e[0]
  //   e.split("").forEach((n) => {
  //     if (alphabet[n] > -1) {
  //       if (prevCount !== n && prevElem !== alphabet[n]) {
  //         newStr += alphabet[n]
  //         prevCount = n
  //         prevElem = alphabet[n]
  //         count++
  //       }
  //     }
  //   })
  //   if (count < 3) newStr += "0".repeat(3 - count)
  //   else if (count > 3) newStr = newStr.slice(0, 3 + (-count))
  //   if (str[i + 1]) {
  //     count = 0
  //     newStr += " "
  //   }
  // })
  // return newStr
  
  // let count = 0, newStr = str[0], prevIndex
  // for (let i = 0; i < str.length; i++) {
  //   if (str[i] === " " && str[i + 1]) {
  //     if (count < 3) newStr += "0".repeat(3 - count)
  //     newStr += ` ${str[i + 1]}`
  //   } else if (str[i + 1] === undefined) {
  //     if (alphabet[str]) newStr += String(alphabet[str[i]])
  //     if (count < 3) newStr += "0".repeat(3 - count)
  //   } else if (str[i] === str[prevIndex]) {
  //     if (alphabet[str[i]]) newStr += String(alphabet[str[i]])
  //     str[i] = ""
  //   } else if (alphabet[str[i]] > 1) {
  //     prevIndex = i
  //     newStr += String(alphabet[str[i]])
  //     count++
  //   }
  // };
  // return newStr
// }

module.exports = {
  soundex,
}