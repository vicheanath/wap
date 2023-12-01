// 1. Define a function max() that takes two numbers as arguments and returns the largest of them.
// Use the if-thenelse construct available in Javascript.
function max(a, b) {
  if (a > b) {
    return a;
  } else {
    return b;
  }
}
// Test cases
console.assert(max(1, 2) === 2, "max(1,2) should return 2");

// 2. Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
function maxOfThree(a, b, c) {
  if (a > b && a > c) {
    return a;
  } else if (b > c) {
    return b;
  } else {
    return c;
  }
}
// Test cases
console.assert(maxOfThree(1, 2, 3) === 3, "maxOfThree(1,2,3) should return 3");

//3. Write a function isVowel() that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false
// otherwise.
function isVowel(char) {
  let vowels = ["a", "e", "i", "o", "u"];
  if (vowels.includes(char)) {
    return true;
  } else {
    return false;
  }
}
// Test cases
console.assert(isVowel("a") === true, "isVowel('a') should return true");
console.assert(isVowel("b") === false, "isVowel('b') should return false");
console.assert(isVowel("c") === false, "isVowel('c') should return false");
console.assert(isVowel("d") === false, "isVowel('d') should return false");
console.assert(isVowel("e") === true, "isVowel('e') should return true");
console.assert(isVowel("f") === false, "isVowel('f') should return false");

//4. Define a function sum() and a function multiply() that sums and multiplies (respectively) all the numbers in the
// given array of numbers. For example, sum([1,2,3,4]) should return 10, and multiply([1,2,3,4]) should return 24.
// Note/Hint: Do these using Imperative programming approach (i.e. for…loop or while…loop)
function sum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += parseInt(arr[i]);
  }
  return sum;
}
// Test cases
console.assert(sum([1, 2, 3, 4]) == 10, "sum([1,2,3,4]) should return 10");

function multiply(arr) {
  let product = 1;
  for (let i = 0; i < arr.length; i++) {
    product *= parseInt(arr[i]);
  }
  return product;
}
// Test cases
console.assert(
  multiply([1, 2, 3, 4]) === 24,
  "sum([1,2,3,4]) should return 10"
);

//5. Define a function reverse(str) that computes the reversal of a string. For example, reverse("jag testar") should
// return the string "ratset gaj".
function reverse(str) {
  let reversed = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
}
// Test cases
console.assert(
  reverse("jag testar") === "ratset gaj",
  "reverse('jag testar') should return 'ratset gaj'"
);

//6. Write a function findLongestWordLength() that takes an array of words and returns the length of the longest
// one.
function findLongestWordLength(arr) {
  let longest = arr[0].length;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i].length > longest) {
      longest = arr[i].length;
    }
  }
  return longest;
}
// Test cases
console.assert(
  findLongestWordLength(["a", "ab", "abc", "abcd"]) === 4,
  "findLongestWordLength(['a','ab','abc','abcd']) should return 4"
);
console.assert(
  findLongestWordLength(["a", "ab", "abc", "abcd", "abcde"]) === 5,
  "findLongestWordLength(['a','ab','abc','abcd','abcde']) should return 5"
);

//7. Write a function filterLongWords() that takes an array of words and an integer i and returns a new array
// containing only those words that were longer than i characters.
function filterLongWords(arr, j) {
  let filtered = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length > j) {
      filtered.push(arr[i]);
    }
  }
  return filtered;
}
// Test cases
console.assert(
  filterLongWords(["a", "ab", "abc", "abcd"], 2).length === 2,
  "filterLongWords(['a','ab','abc','abcd'],2) should return ['abc','abcd']"
);
console.assert(
  filterLongWords(["a", "ab", "abc", "abcd", "abcde"], 2).length === 3,
  "filterLongWords(['a','ab','abc','abcd','abcde'],2) should return ['abc','abcd','abcde']"
);

// 8. Write a function named, computeSumOfSquares, that takes as input, an array of numbers and calculates and
// returns the sum of the squares of each number in the input array. E.g. computeSumOfSquares([1,2,3]) should be
// computed as 12 + 22 +32 = 14. Note: Write your Javascript code without using Imperative programming. i.e. Do
// NOT use any explicit looping construct; instead use functional programming style/approach.

function computeSumOfSquares(arr) {
  return arr.reduce((acc, curr) => acc + curr * curr, 0);
}

//9. Write a function named, printOddNumbersOnly, that takes as input, an array of numbers and it finds and prints
// only the numbers which are odd.

function printOddNumbersOnly(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (!arr[i] % 2 == 0) {
      console.log(arr[i]);
    }
  }
}

//10. Write a function named, computeSumOfSquaresOfEvensOnly, that takes as input, an array of integral numbers
// and calculates and returns the sum of the squares of only the even numbers in the input array. E.g.
// computeSumOfSquaresOfEvensOnly ([1,2,3,4,5]) should be computed as 2^2 +4^2 = 20.
function computeSumOfSquaresOfEvensOnly(arr) {
  let sum = 0;
  let even = arr.map((x) => a % 2 == 0);
  even.forEach((x) => (sum += x * x));
  return sum;
}

//11. Using the Array.reduce(…) function, re-implement your functions, sum(…) and multiply(…) (defined in Problem 4
// above) without using Imperative programming. i.e. Do NOT use any explicit looping construct; instead use
// functional programming style/approach. 

function newSum(arr){
  return arr.reduce((acc, curr) => acc + curr, 0);
}

function newMultiply(arr){
  return arr.reduce((acc, curr) => acc * curr, 1);
}

// 12. Write a function named printFibo, that takes as input, a given length, n, and any two starting numbers a and b,
// and it prints-out the Fibonacci sequence, e.g. (0, 1, 1, 2, 3, 5, 8, 13, 21, 34,…) of the given length, beginning with
// a and b. (e.g. printFibo(n=1, a=0, b=1), prints-out: "0", as output; printFibo(n=2, a=0, b=1), prints-out: "0, 1", as
// output; printFibo(n=3, a=0, b=1), prints-out: "0, 1, 1", as output; printFibo(n=6, a=0, b=1), prints-out: "0, 1, 1, 2,
// 3, 5", as output; and printFibo(n=10, a=0, b=1), prints-out: "0, 1, 1, 2, 3, 5, 8, 13, 21, 34", as output).

