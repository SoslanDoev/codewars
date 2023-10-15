console.clear()

// const extractNestedObjectReference = require("./module/extract_nested_object_reference")

// Вращение массива против часовой и по часовой 
// const { rotate: rotate } = require("./module/rotate_matrix")
// const mas = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
// console.log(rotate(mas, "clockwise"))
// let str = ["test", "new", "hello", "world"]
// console.log(str.splice(1))
// const { soundex: Soundex } = require("./module/soundex")
// console.log(Soundex("Sarah Connor"), "=", "S600 C560");
// console.log(Soundex("Sara Conar"), "=", "S600 C560");
// console.log(Soundex("Serah Coner"), "=", "S600 C560");
// console.log(Soundex("Sarh Connor"), "=", "S600 C560");
// console.log(Soundex("Sayra Cunnarr"), "=", "S600 C560");
// console.log(Soundex("Ashcraft"))
// console.log(Soundex("Tymczak"), "=", "T522")

// const { UrlShortener: UrlShortener } = require("./module/url_shortener")
// let url = new UrlShortener()
// let ts = url.shorten("https://www.codewars.com/kata/5ef9ca8b76be6d001d5e1c3e")
// console.log(ts)
// console.log(url.redirect(ts))
// let url_1 = new UrlShortener('da')
// console.log(url_1("da"))
// console.log(new UrlShortener.shorten("dadad"))

// require("./module/calculating_with_objects")

// require("happy_new_year_2018")

// const { spliceFunc: spliceFunc } = require("./module/array.prototype.splice(from, count, insertItems...) _advanced")

// Array.prototype.splice = function (from, count, ...insertItems) {
  // let mas = []
  // if (from === undefined) return mas
  // else if (from === 0 && !count && !insertItems) return this
  // else return "da"
// }
// 
// let test = ["1", "2"]
// console.log(test.splice(0))

// const months = ['Jan', 'March', 'April', 'June'];
// console.log(months.splice(1, 0, 'Feb'));
// Expected output: Array ["Jan", "Feb", "March", "April", "June"]
// [ 'angel', 'drum', 'guitar', 'mandarin', 'sturgeon' ]
// const { spaghettiCode: spaghettiCode } = require("./module/spaghetti_code_#1_easy")
// const mas_1 = [
//   ['A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', '_', '_', '_', '_'],
//   ['_', '_', '_', '_', '_', '_', '_', '_', '_', '_', '_', '_'],
//   ['B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', '_'],
//   ['_', '_', '_', '_', '_', '_', '_', '_', '_', '_', '_', '_'],
//   ['C', 'C', 'C', 'C', 'C', 'C', '_', '_', '_', '_', '_', '_']
// ]
// const mas_2 = [
//   ['A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', ' ', ' ', ' ', ' ', ' ', ' '],
//   ['_', '_', '_', '_', '_', '_', '_', '_', 'A', '_', '_', 'C', 'C', 'C', '_'],
//   [' ', 'B', ' ', ' ', ' ', 'C', ' ', ' ', 'A', ' ', ' ', ' ', ' ', 'C', ' '],
//   ['_', 'B', '_', '_', '_', 'C', '_', '_', 'A', '_', '_', '_', '_', 'C', '_'],
//   [' ', 'B', ' ', ' ', ' ', 'C', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'C', ' '],
//   ['_', 'B', '_', '_', '_', 'C', 'C', 'C', 'C', 'C', 'C', 'C', 'C', 'C', '_']
// ]
// const mas_3 = [
//   ['_', '_', '_', '_', '_', '_', '_', '_', '_', '_'],
//   ['_', '_', '_', '_', 'S', '_', '_', '_', '_', '_'],
//   ['_', '_', '_', '_', '_', '_', '_', '_', '_', '_'],
//   ['_', '_', '_', '_', '_', '_', '_', '_', '_', '_'],
//   ['_', '_', '_', '_', '_', '_', '_', '_', '_', '_']
// ]
// const mas_4 = [
//   ['0', '9', '{', '}', '[', '[', '/', '/', '2', '+'],
//   ['|', '|', '-', '=', 'A', '*', '*', '*', 'C', '@'],
//   ['_', '+', '_', '+', '-', '*', '*', '(', 'C', '@'],
//   ['-', '-', '-', '#', '#', '#', ')', ')', 'C', '@'],
//   ['!', '!', 'D', 'D', 'D', 'D', ':', '-', ')', '@']
// ]
// console.log(spaghettiCode(mas_4))


// const { pickPeaks: pickPeaks } = require("./module/pick_peaks")
// const mas_1 = [0, 1, 2, 5, 1, 0]
// const mas_2 = [1,2,3,6,4,1,2,3,2,1] //), {pos:[3,7], peaks:[6,3]});
// const mas_3 = [3,2,3,6,4,1,2,3,2,1,2,3] // ), {pos:[3,7], peaks:[6,3]});
// const mas_4 = [3,2,3,6,4,1,2,3,2,1,2,2,2,1] // ), {pos:[3,7,10], peaks:[6,3,2]});
// console.log(pickPeaks(mas_3))

// const { revrot: revrot } = require("./module/reverse_or_rotate")
// const str_1 = "123456987654"
// const str_1Count = 6
// console.log(revrot(str_1, str_1Count))

// const { findReverseNumber: findReverseNumber } = require("./module/find_the_nth_reverse_number_(extreme)")
// const number = 100000000000
// console.log(findReverseNumber(number))

// const combinePathsUri = (...mas) => {
//   if (!mas.length) return "/"
//   let newStr = ""
//   mas.forEach((e) => {
//     newStr += "/"
//     e.trim().toLowerCase().split("").forEach((n) => {
//       if (n !== "\\" && n !== "/" && n !== " " && n !== "") newStr += n
//     })
//   })
//   return newStr
// }
// console.log(combinePathsUri("   /testing", "", "", "  \\  empty", "\\parts/", " and ", "", "with/different\\slashes    "))
// console.log(combinePathsUri("google", "search", "test"))

// const upArray = (mas) => {
//   if (!mas.length) return null
//   let newMas = [], fl = false
//   const func = (res) => {
//     if (res === 10) { fl = true; newMas.push(0) }
//     else { fl = false; newMas.push(res) }
//   }
//   for (let i = mas.length - 1; i >= 0; i--) {
//     if (mas[i] < 0 || mas[i] >= 10) return null
//     else if (i === mas.length - 1) func(mas[i] + 1)
//     else if (fl) func(mas[i] + 1)
//     else newMas.push(mas[i])
//   }
//   if (fl) newMas.push(1)
//   return newMas.reverse()
// }
// const mas = [4, 3, 2, 5]
// const mas_1 = [2, 3, 9, 9]
// const mas_2 = [9, 9]
// const mas_3 = [0, 9]
// const mas_4 = [0, 7]
// console.log(upArray(mas))
// console.log(upArray(mas_1))
// console.log(upArray(mas_2))
// console.log(upArray(mas_3))
// console.log(upArray(mas_4))

// const removeParentheses = (str) => {
//   let newStr = "", count = 0
//   for (let i = 0; i < str.length; i++) {
//     if (str[i] === "(") count++
//     else if (str[i] === ")") count-- 
//     else if (count <= 0) {
//       newStr += str[i]
//     }
//   }
//   return newStr
// }
// const str = "example(unwanted thing)example"
// const str_1 = "example (unwanted thing) example"
// const str_2 = "a (bc d)e"
// const str_3 = "a(b(c))"
// const str_4 = "hello example (words(more words) here) something"
// const str_5 = "(first group) (second group) (third group)"
// console.log(removeParentheses(str))
// console.log(removeParentheses(str_1))
// console.log(removeParentheses(str_2))
// console.log(removeParentheses(str_3))
// console.log(removeParentheses(str_4))
// console.log(removeParentheses(str_5))

// const removeParentheses = (str) => {
//   console.log(str)
//   return str.replace(/\(.*\)/g, "");
// }

//==============================================
// Функция для преобразования строки the_stealth_warrior в theStealthWarrior
/*
const toCamelCase = require("./module/to_camel_case")
const str_1 = "the_stealth_warrior"
console.log("str_1", toCamelCase(str_1))
const str_2 = "The-Stealth-Warrior"
console.log("str_2", toCamelCase(str_2))
*/
//==============================================
// Нахождение большей строки
/* 
const { solve: Solve } = require("./module/consonant_value")
const str_1 = "az"
const str_2 = "strength"
console.log(Solve(str_1))
*/
//==============================================
// Поиск пропавшей буквы
/*
const { findMissingLetter: findMissingLetter } = require("./module/find_the_missing_letter")
const mas_1 = ['a','b','c','d','f'] // -> 'e'
const mas_2 = ['O','Q','R','S'] // -> "P"
console.log(findMissingLetter(mas_2))
*/
//==============================================
// Поиск не совпадающей прогрессии в массиве 
/*
const { getLengthOfMissingArray: getLengthOfMissingArray } = require("./module/length_of_missing_array")
const mas_1 = [[1, 2], [4, 5, 1, 1], [1], [5, 6, 7, 8, 9]] // 3
const mas_2 = [[ 5, 2, 9 ], [ 4, 5, 1, 1 ], [ 1 ], [ 5, 6, 7, 8, 9 ]] // 2
const mas_3 = [[ null ], [ null, null, null ]] // 2
const mas_4 = [[ 'a', 'a', 'a' ], [ 'a', 'a' ], [ 'a', 'a', 'a', 'a' ], [ 'a' ], [ 'a', 'a', 'a', 'a', 'a', 'a' ]] // 5
const mas_5 = [] // 0
const mas_6 = [ [], [ 1, 2, 2 ] ] // 0
const mas_7 = [ [ 1, 2, 2 ], null ]
const mas_8 = [[], [1, 4, 3, 1, 4], [1, 0, 1, 3, 0, 0, 3, 2], [2, 2, 3, 2, 2, 0, 0], [4, 3, 4, 4, 3, 0], [0], [1, 1], [3, 2, 0]]
console.log(getLengthOfMissingArray(mas_1))
console.log(getLengthOfMissingArray(mas_2))
console.log(getLengthOfMissingArray(mas_6))
console.log(getLengthOfMissingArray(mas_8))
*/
//==============================================
// Сортировка строки по сумме цифр
/*
const { orderWeight: orderWeight } = require("./module/weight_for_weight")
const str_1 = "103 123 4444 99 2000"
const str_2 = "2000 10003 1234000 44444444 9999 11 11 22 123"
console.log(orderWeight(str_2))
*/
//==============================================
// Пройти по графу и проверить есть ли дорога от одного места к другому
/*
const { checkTrip: checkTrip } = require("./module/trip_checker")
const start = "ADL"
const target = "BRI"
const links = {"ADL" : ["MEL"], "MEL" : ["ADL", "SYD"],  "SYD" : ["BRI"]}
console.log(checkTrip(start, target, links))
*/
//==============================================
// Пропущенное число в неупорядоченной арифметической прогрессии
/*
const {find: Find} = require("./module/missing_number_in_unordered_arithmetic_progression")
mas_1 = [3, 9, 1, 11, 13, 5] //, 7)
mas_2 = [5, -1, 0, 3, 4, -3, 2, -2] //), 1)
mas_3 = [2, -2, 8, -8, 4, -4, 6, -6] // ), 0)
console.log(Find(mas_1))
*/
//==============================================
// Создание класса для подсчета каких-то действий
/*
const { Vector: Vector } = require("./module/vector_class")
var a = new Vector([1, 2, 3]);
console.log(a)
var b = new Vector([3, 4, 5]);
console.log(b)
var c = new Vector([5, 6, 7, 8]);
console.log(a.add(b))
var c = new Vector([5, 6, 7, 8]);
// console.log(a.add(b));      // should return a new Vector([4, 6, 8])
// a.subtract(b); // should return a new Vector([-2, -2, -2])
// a.dot(b);      // should return 1*3 + 2*4 + 3*5 = 26
// a.norm();      // should return sqrt(1^2 + 2^2 + 3^2) = sqrt(14)
// a.add(c);      // throws an error
*/
//==============================================
// Нахождение уникальной буквы в строке
/*
const { firstNonRepeatingLetter: firstNonRepeatingLetter } = require("./module/first_non_repeating_letter")
const s_1 = "stress"
const s_2 = "moonmen"
const s_3 = "sTreSS"
console.log(firstNonRepeatingLetter(s_3))
*/
//==============================================
//  Подсчет цифр
/*
const { nbDig: nbDig } = require("./module/count_the_digit")
console.log(nbDig(5750, 0))
console.log(nbDig(25, 1))
*/
//==============================================
// Рецепт торта. Проверка ингредиентов
/*
const { cakes: cakesFunc } = require("./module/pete_the_baker")
const recipe = {flour: 500, sugar: 200, eggs: 1};
const available = {flour: 1200, sugar: 1200, eggs: 5, milk: 200};
console.log(cakesFunc(recipe, available))
*/
//==============================================
// Левенштейн
/*
  require("./module/did_you_mean")
*/
//==============================================
// Получение минут из секунд 
/*
  const { humanReadable: humanReadable } = require("./module/human_teadable_time")
  console.log(humanReadable(0), '00:00:00', 'humanReadable(0)');
  console.log(humanReadable(59), '00:00:59', 'humanReadable(59)');
  console.log(humanReadable(90), '00:01:30', 'humanReadable(90)');
  console.log(humanReadable(3599), '00:59:59', 'humanReadable(3599)');
  console.log(humanReadable(86400), '24:00:00', 'humanReadable(86400)');
  console.log(humanReadable(359999), '99:59:59', 'humanReadable(359999)');
*/
//==============================================
// Крестики нолики
/*
// const { ticTacToeChecker: ticTacToeChecker } = require("./module/tic_tac_toe_checker")
// console.log(ticTacToeChecker([ [ 0, 0, 1 ], [ 0, 1, 2 ], [ 2, 1, 0 ] ])) 
// console.log(ticTacToeChecker([ [ 2, 0, 0 ], [ 0, 2, 0 ], [ 0, 0, 2 ] ]), 2) 
// console.log(ticTacToeChecker([[2,1,2],[2,1,1],[1,2,1]])) 
*/
//==============================================
// Заменить в объекте все значения "dynamic" на переданный аргумент
/*
const { object_search_and_replace: objectSearchAndReplace } = require("./module/object_search_and_replace")
const object = { foo: 'dynamic', bar: { baz: [ 'dynamic' ] }, dynamic: true }
const replace = "static"
console.log(objectSearchAndReplace(object, replace))
*/
//==============================================
// Передвинуть первую букву в конец и добавить "ay"
/*
  const {  pigIt: pigIt } = require("./module/ simple_pig_latin") 
  console.log(pigIt("O tempora o mores !"))
*/
//==============================================
// Текст волной (Hello hEllo heLllo helLo hellO)
/*
// const { wave: waveFunc } = require("./module/mexican_wave")
let res = waveFunc("Hello")
console.log(res)
*/
//==============================================
// Умножение двух матриц
/*
const { matrixMultiplication: matrixMultiplication } = require("./module/matrix_multiplication")
let res = matrixMultiplication([[1, 2], [3, 2]], [[3, 2], [1, 1]])
console.log(res)
*/
//==============================================
// Преобразование строк из верхнего в с чертой
/*
const { words_to_object: wordsToObject } = require("./module/create_object_in_string")
console.log(wordsToObject("red 3 yellow 5 black 7 white 9"))
*/
//==============================================
// Развернуть объект
/*
const { mirror: mirror } = require("./module/mirror-mirror")
console.log(mirror({"abc?": "-", xyz: "-"}))
*/
//==============================================
// Соединить несколько объектов в один
/*
const { object_extend: objectExtend } = require("./module/object_extend")
console.log(objectExtend( {a: 1, b: 2}, {c: 3} )) // should === {a: 1, b: 2, c: 3}
*/
//==============================================
// Нахождение простого числа
/* 
const { isPrime: isPrime } = require("./module/is_a_number_prime")
console.log(isPrime(75))
*/