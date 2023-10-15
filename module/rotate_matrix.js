const rotate = (mas, direction) => {
  console.log("До")
  let a = mas[0].length
  mas.forEach((e) => {
    console.log(e)
  })
  // ockwise'), [[7,4,1],[8,5,2],[9,6,3]] );
  console.log("После: ")
  if (direction === "clockwise") {
    for (let i = 0; i < a; i++) {
      for (let j = a - 1; j >= 0; j--) {
        console.log(mas[i][j])
        // let temp = mas[i][j]
        // mas[i][j] = mas[j][i]
        // mas[j][i] = temp
      }
    }    
  } else if (direction === "counter-clockwise") {
    return false
  }
  mas.forEach((e) => {
    console.log(e)
  })
  return mas
}

module.exports = {
  rotate, 
}