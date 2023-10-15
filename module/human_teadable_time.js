const humanReadable = (seconds) => {
  let hh = Math.floor(seconds / (60 * 60))
  let mm = Math.floor(seconds / 60 % 60)
  let ss = Math.floor(seconds % 60)
  return `${(hh < 10) ? "0" + hh : hh}:${(mm < 10) ? "0" + mm : mm}:${(ss < 10) ? "0" + ss : ss}`
}

module.exports = {
  humanReadable, 
}