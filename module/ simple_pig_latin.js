const pigIt = (str) => {
  let newStr = "", mas = ["!", "?"]
  str.split(" ").forEach((e) => {
    newStr += (e.length > 0 && !mas.includes(e)) ? e.slice(1) + e[0] + "ay " : e + " "
  })
  return newStr.trim("")
}

module.exports = {
  pigIt,
}