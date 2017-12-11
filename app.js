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
  let replaced = str.replace(/[a-z]/gi, function(l) {
    if (l === 'z' || l === 'Z') {
      return 'a';
    } else {
      return String.fromCharCode(l.charCodeAt() + 1);
    }
  });
  let uppercased = replaced.replace(/a|e|i|o|u/gi, function(l) {
    return l.toUpperCase();
  });
  return uppercased;
}

// Using the JavaScript language, have the function SimpleAdding(num) add up all the numbers from 1 to num. For example: if the input is 4 then your program should return 10 because 1 + 2 + 3 + 4 = 10. For the test cases, the parameter num will be any number from 1 to 1000.
algo.SimpleAdding = function(num) {
  let sum = 0;
  for (let i = 0; i <= num; i++) {
    sum += i
  }
  return sum;
}

module.exports = algo;
