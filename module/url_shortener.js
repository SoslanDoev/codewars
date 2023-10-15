let obj = {}

class UrlShortener {
  shorten (longURL) {
    let str = "short.ly/"
    let newStr = ""
    for (let i = longURL.length - 1; i > 0; i--) {
      if (longURL[i] !== "/") newStr += longURL[i]
      else break
    }
    for (let i = 0; i < 5; i++) {
      let rand = Math.floor(Math.random() * (newStr.length - 0) + 0);
      str += newStr[rand]
    }
    obj[str] = longURL
    return str
  }
  redirect (shortURL) {
    return obj[shortURL]
  }
}

module.exports = {
  UrlShortener,
}

// clck.ru/35DiF8
