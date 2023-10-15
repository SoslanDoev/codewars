const isPalindrome = (number) => {
  let temp = number;
  let reverse = 0;
  while (temp > 0) {
    reverse = reverse * 10 + (temp % 10);
    temp = Math.floor(temp / 10);
  }
  return number === reverse;
};

const findReverseNumber = (n) => {
  console.log(n)
  let max = 0
  let index = 0;
  let count = 0
  while (true) {
    if (index >= n && count >= n) break
    if (isPalindrome(index)) {
      count++
      max = index
    }
    index++;
  }
  return max
};

module.exports = {
  findReverseNumber,
}