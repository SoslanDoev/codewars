const checkTrip = (start, target, stationLinks) => {
  let 
    stack = [start],
    visited = new Set()
  while (stack.length > 0) {
    let currentStation = stack.pop()
    if (currentStation === target) return "Possible"
    else if (!visited.has(currentStation)) {
      visited.add(currentStation)
      let linkedStations = stationLinks[currentStation]
      if (linkedStations) {
        for (let i = 0; i < linkedStations.length; i++) {
          stack.push(linkedStations[i])
        }
      }
    }
  }
  return "Impossible"
}

  // Второй способ написан через рекурсию (не работает для больших входных данных stationLinks)
  // let res = stationLinks[start]
  // if (!res.length) return "Impossible"
  // let set = new Set()
  // set.add(stationLinks[start])
  // const rec = (mas) => {
    // if (!mas || !mas.length) return false
    // for (let i = 0; i < mas.length; i++) {
      // if (mas[i] === target) return true
      // else if (stationLinks[mas[i]] && mas[i] !== start) {
        // let result = rec(stationLinks[mas[i]])
        // if (result === true) return true
      // }
    // }
  // }
  // if (rec(res) === true || set.has(target)) return "Possible"
  // return "Impossible"
// }

module.exports = {
  checkTrip,
}