let algo = {};

// Using the JavaScript language, have the function LongestWord(sen) take the sen parameter being passed and return the largest word in the string. If there are two or more words that are the same length, return the first word from the string with that length. Ignore punctuation and assume sen will not be empty.
algo.LongestWord = function(sen) {
  let longest = sen.match(/[\w]+/g).sort(function(a, b) {
    return b.length - a.length
  }).shift();
  return longest;
}

// Using the JavaScript language, have the function FirstFactorial(num) take the num parameter being passed and return the factorial of it (e.g. if num = 4, return (4 * 3 * 2 * 1)). For the test cases, the range will be between 1 and 18 and the input will always be an integer.
algo.FirstFactorial = function(num) {
  let fact = 1;
  for (let i = 1; i <= num; i++) {
    fact *= i
  }
  return fact;
}

//Using the JavaScript language, have the function FirstReverse(str) take the str parameter being passed and return the string in reversed order. For example: if the input string is "Hello World and Coders" then your program should return the string sredoC dna dlroW olleH.
algo.FirstReverse = function(str) {
  return str.split('').reverse().join('');
}

//Using the JavaScript language, have the function LetterChanges(str) take the str parameter being passed and modify it using the following algorithm. Replace every letter in the string with the letter following it in the alphabet (ie. c becomes d, z becomes a). Then capitalize every vowel in this new string (a, e, i, o, u) and finally return this modified string.
algo.LetterChanges = function(str) {
  let arr = str.split('');
  for(let i = 0; i < arr.length; i++) {
    if(arr[i].match(/^[A-Za-z]+$/)) {
      arr[i].replace((l) => {
        console.log('in replace')

        let modified = '';
        let alphabet = [a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z];
        for (let j = 0; j < alphabet.length; j++) {
          if (l === alphabet[j]) {
            modified = alphabet[j+1]
          }
        }
        if(modified === 'a' || modified === 'e' || modified === 'i' || modified === 'o' || modified === 'u') {
          modified.uppercase()
        }
        return modified;
      })
    }
  }
  return arr.join('');
}

module.exports = algo;
