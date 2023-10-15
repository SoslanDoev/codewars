function Dictionary(words) {
  this.words = words;
}

Dictionary.prototype.findMostSimilar = function(term) {
  function levenshtein(s1, s2, costs) {
  var i, j, l1, l2, flip, ch, chl, ii, ii2, cost, cutHalf;
  l1 = s1.length;
  l2 = s2.length;
  costs = costs || {};
  var cr = costs.replace || 1;
  var cri = costs.replaceCase || costs.replace || 1;
  var ci = costs.insert || 1;
  var cd = costs.remove || 1;
  cutHalf = flip = Math.max(l1, l2);
  var minCost = Math.min(cd, ci, cr);
  var minD = Math.max(minCost, (l1 - l2) * cd);
  var minI = Math.max(minCost, (l2 - l1) * ci);
  var buf = new Array((cutHalf * 2) - 1);
  for (i = 0; i <= l2; ++i) {
    buf[i] = i * minD;
  }
  for (i = 0; i < l1; ++i, flip = cutHalf - flip) {
    ch = s1[i];
    chl = ch.toLowerCase();
    buf[flip] = (i + 1) * minI;
    ii = flip;
    ii2 = cutHalf - flip;
    for (j = 0; j < l2; ++j, ++ii, ++ii2) {
      cost = (ch === s2[j] ? 0 : (chl === s2[j].toLowerCase()) ? cri : cr);
      buf[ii + 1] = Math.min(buf[ii2 + 1] + cd, buf[ii] + ci, buf[ii2] + cost);
    }
  }
  return buf[l2 + cutHalf - flip];
  }
  let object = {}
  this.words.forEach((e) => {
    let res = levenshtein(e, term)
    object[e] = res
  })
  return Object.entries(object).sort((a, b) => a[1] - b[1])[0][0]
}

fruits = new Dictionary(['cherry', 'pineapple', 'melon', 'strawberry', 'raspberry']); // this.words
let test = fruits.findMostSimilar('strawbery'); // must return "strawberry" // term
// let test = fruits.findMostSimilar('berry'); // must return "cherry"

// let things = new Dictionary(['stars', 'mars', 'wars', 'codec', 'codewars']);
// let test = things.findMostSimilar('coddwars'); // must return "codewars"

// let languages = new Dictionary(['javascript', 'java', 'ruby', 'php', 'python', 'coffeescript']);
// let test = languages.findMostSimilar('heaven'); // must return "java"

console.log(test)