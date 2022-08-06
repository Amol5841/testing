// 111 *** Sum of Digits in Number Start *** //
function sumDigit(num) {
  let number = num.toString().split("");
  let sum = number.reduce((out, ele) => {
    return parseInt(out) + parseInt(ele);
  }, 0);
  return sum;
}
console.log(sumDigit(123));
// *** Sum of Digits in Number End *** //

// 222 *** Count occurances of array elements Start*** //
const arr = [5, 5, 5, 2, 2, 2, 2, 2, 9, 4];
const counts = {};
for (const num of arr) {
  counts[num] = counts[num] ? counts[num] + 1 : 1;
}
let out = 0;
let res;
for (let item in counts) {
  if (out < counts[item]) {
    out = counts[item];
    res = `${item}:${counts[item]}`;
  }
}
console.log(out);
console.log(res);
// console.log(counts[5], counts[2], counts[9], counts[4]);
// console.log(counts);
// *** Count occurances of array elements End*** //

// 333 *** Cout occurances of objects by key in Array Start *** //
let array = `[  {    country: "india",    location: 1,  },  {    country: "india",    location: 2,  },  {    country: "us",    location: 3,  },  {    country: "france",   location: 4,  },  {    country: "austria",    location: 5,  },  {    country: "france",    location: 6,  },  {    location: 6,  },  {    location: 6,  },  {    location: 6,  },]`;
let output = {};
for (let item of array) {
  output[item.country] = output[item.country] ? output[item.country] + 1 : 1;
}
console.log(output);
// *** Cout occurances of objects key in Array Start *** //

// 444 *** Count vowels in the sring Start *** //
function countVowel(string) {
  return string.match(/[aeiou]/gi).length;
}
console.log(countVowel("Awesomeeeeeee!"));
// *** Count vowels in the sring End *** //

// 555 *** Rearrange Array [smallest, largest, 2ndsmallest, 2ndlargest...]  Start *** //
let array = [34, 89, 7, 12, -50, -90, -40, 50, -120];

// array = array.sort((a, b) => a - b);

for (let i = 0; i < array.length; i++) {
  for (let j = 0; j < array.length - 1 - i; j++) {
    if (array[j] < array[j + 1]) {
      [array[j], array[j + 1]] = [array[j + 1], array[j]];
    }
  }
}

let large = array.length - 1;
let small = 0,
  flag = true,
  out = [];

for (let i = 0; i < array.length; i++) {
  if (flag) {
    out[i] = array[large--];
  } else {
    out[i] = array[small++];
  }
  flag = !flag;
}
console.log(out);
// *** Rearrange Array [smallest, largest, 2ndsmallest, 2ndlargest...]  End *** //

// 666 *** Move zeroes to left/right Start *** //
function moveZeroes() {
  let array = [34, 89, 0, 0, 7, 12, -50, 0, 0, -90, -40, 0, 50, -120];

  // Solution 1
  let a = [],
    b = [];
  for (let item of array) {
    item === 0 ? a.push(item) : b.push(item);
  }
  console.log(a.concat(b));

  // Solution 2
  let out = [];
  for (let item of array) {
    if (item !== 0) {
      out.push(item);
    } else {
      out.unshift(item);
    }
  }
  console.log(out);
}
moveZeroes();
// *** Move zeroes to left/right End *** //

// *** 777 String is palindrom or not *** //
function isPalindrom(string) {
  string = string.split("");
  let start = 0;
  let flag = true;
  let end = string.length - 1;
  for (let i = 0; i < string.length / 2; i++) {
    console.log(string[i]);
    if (string[start] != string[end]) {
      flag = false;
      break;
    }
    start++;
    end--;
  }
  if (flag) {
    return "YES";
  } else {
    return "NO";
  }
}
console.log(isPalindrom("nitin"));
// *** 777 String is palindrom or not *** //

// ######### IMP Function Start ########## //
Boolean(); // The boolean() function is used to convert any data type to a boolean value.

parseInt(), parseFloat(); // The parseInt() and parseFloat() functions are used to convert to number, if it fails to convert into a number then it returns NaN.

Array.isArray(arr); // The Array.isArray() method determines whether the passed value is an Array.

// ######### IMP Function End ########## //

// Array Destructuring
let fruits = ["Apple", "Banana"];
let [a, b] = fruits;
console.log(a, b);

// Object Destructuring
let person = { name1: "Peter", age: 28 };
let { name1, age } = person;
console.log(name1, age);

// *** convert inernal array to the array element *** //
let array9 = [
  45,
  89,
  23,
  -67,
  78,
  10,
  55,
  -100,
  89,
  ["jfh", 765, 54546, 98988],
  [{ name: "nitin", lName: "Khairnar" }],
];
console.log(array9.flat(1));
// *** convert inernal array to the array element *** //

let str = "10 + 50+5";
let str1 = new String("20 + 10");
str += 10;
console.log(str);
// console.log(str1);
console.log(str.valueOf());
console.log(eval(str));
console.log(eval(str1.valueOf()));
