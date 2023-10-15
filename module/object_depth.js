console.clear()
const depth = (obj) => {
  console.log(obj)
  let res = Object.keys(obj), masMax = [1]
  if (!obj || !res.length || Array.isArray(obj) === true) return 0
  const innerDepth = (data, sum) => {
    for (let item in data) {
      if (typeof data[item] === "object") {
        sum += innerDepth(data[item], sum++)
      }
    }; return sum
  }
  res.forEach((e) => {
    if (typeof obj[e] === "object") {
      masMax.push(innerDepth(obj[e], 1) + 1)    
    }
  })
  return masMax




  return false


  // let max = 0
  // Object.keys(obj).forEach((e) => {
  //   const depthInner = (data) => {
  //     if (typeof data[item] === "object") {
        
  //     }      
  //   }
  //   if (obj[e] === "object") depthInner(obj[e])
  // })
  // return max
  // const depthInner = (data) => {
  //   for (let item in data) {
  //     console.log(data[item])
  //     if (typeof data[item] === "object") {
  //       globalSize++
  //       depthInner(data[item])
  //     }
  //   }
  // }; depthInner(obj)
  // return max
  // for (let item in obj) {
    // if (typeof obj[item] === "object") globalSize++
  // }
  
  
  // if (!obj || !Object.keys(obj).length || Array.isArray(obj) === true) return 0
  // let globalSize = 0
  // const getSize = (object) => {
  //   globalSize++
  //   Object.keys(object || {}).forEach((e) => {
  //     if (typeof object[e] === "object" && object[e] !== null) {
  //       getSize(object[e])
  //     }
  //   })
  // }; getSize(obj)
  // return globalSize 
}
module.exports = {
  depth,
}