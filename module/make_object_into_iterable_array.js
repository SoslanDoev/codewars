// const timesObject = {
  // monday   : [{ open: '07:00', close: '17:00' }],
  // tuesday  : [{ open: '07:00', close: '17:00' }],
  // wednesday: [{ open: '07:00', close: '17:00' }],
  // thursday : [{ open: '07:00', close: '17:00' }],
  // friday   : [{ open: '07:00', close: '17:00' }],
  // saturday : [],
  // sunday   : [],
// }

console.clear()
const shapeTimesObjectIntoIterableArray = (object) => {
  console.clear()
  let mas = [], open = "", close = ""
  for (let key_1 in object) {
    let masWeek = []
    if (object[key_1].length) {
      open = object[key_1][0].open
      close = object[key_1][0].close
      for (let key_2 in object) {
        if (object[key_2].length && !masWeek.includes(key_2) && open === object[key_2][0].open && close === object[key_2][0].close) {
          masWeek.push(key_2)
        }
      }
      // mas.push({
        // open: open,
        // close: close,
        // days: masWeek
      // })
    }
  }
  return mas 
}
module.exports = {
  shapeTimesObjectIntoIterableArray,
}