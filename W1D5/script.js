console.log("Hello World!");

const x = 5;

console.log(!x);
console.log(x);
console.log(!!x);

function findMax() {
  let i;
  let max = -Infinity;
  console.log(arguments);
  for (i = 0; i < arguments.length; i++) {
    if (arguments[i] > max) {
      max = arguments[i];
    }
  }
  return max;
}
let max1 = findMax(1, 123, 500, 115, 66, 88);
let max2 = findMax(3, 6, 8);
console.log(max1, max2);
