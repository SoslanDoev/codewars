// red 1 yellow 2 black 3 white 4

const words_to_object = (str) => {
  let res = str.split(" ").reduce((acc, e, i, mas) => {
    if (i % 2 === 0) {
      acc.push({name: e, id: mas[i + 1]})
    }
    return acc
  }, [])
  return JSON.stringify(res)
}

module.exports = {
  words_to_object,
}








// expected [ { name: 'red', id: '1' },
// { name: 'yellow', id: '2' },
// { name: 'black', id: '3' },
// { name: 'white', id: '4' } ]


// to equal 
// '[{name : \'red\', id : \'1\'}, 
// {name : \'yellow\', id : \'2\'}, 
// {name : \'black\', id : \'3\'}, 
// {name : \'white\', id : \'4\'}]'
