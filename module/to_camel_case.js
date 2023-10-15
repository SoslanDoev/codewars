module.exports = toCamelCase = (str) => {
    if (!str) return ""
    let newStr = str[0]
    for (let i = 1; i < str.length; i++) {
      if (str[i] === "-" || str[i] === "_") {
        if (str[i + 1]) newStr += str[i + 1].toUpperCase(); i += 1
        continue
      } else newStr += str[i]
    }; return newStr
  }