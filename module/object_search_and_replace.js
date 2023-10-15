const object_search_and_replace = (data, replace) => {
  // Решение 1
  if (typeof data === "object") {
    for (let item in data) data[item] = object_search_and_replace(data[item], replace)
  } else if (data === "dynamic") return replace
  return data;
  
  // Решение 2
  // if (!data || !replace) return data
  // let replaceGlobal = replace
  // const depth = (data) => {
    // Object.keys(data).forEach((e) => {
      // if (data[e] === "dynamic") data[e] = replaceGlobal
      // else if (typeof data[e] === "object") depth(data[e])
    // })
  // }
  // Object.keys(data).forEach((e) => {
    // if (data[e] === "dynamic") data[e] = replaceGlobal
    // else if (typeof data[e] === "object") depth(data[e])
  // })
  // return data
}

module.exports = {
  object_search_and_replace
}