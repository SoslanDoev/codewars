const cakes = (recipe, available) => {
  console.log("рецепт: ")
  console.log(recipe)
  console.log("ингредиент: ")
  console.log(available)
  for (let i in recipe) {
    let fl = false
    for (let j in available) {
      if (i === j) fl = true
    }
    if (!fl) return 0
  }
  let count = 0, fl = true
  while (fl) {
    console.log(available)
    for (let item in available) {
      if (available[item] < recipe[item]) fl = false
      else available[item] -= recipe[item]
    }
    count++
  }
  return count - 1
}

module.exports = {
  cakes,
}