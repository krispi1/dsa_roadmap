"use strict";

const randomIntegers = [];

// add elements at the back
console.log("\n add elements at the back");
console.log("size:", randomIntegers.length);
randomIntegers.push(9);
randomIntegers.push(4);
console.log(randomIntegers);
console.log("size:", randomIntegers.length);
randomIntegers.push(...[1, 7]);
console.log("size:", randomIntegers.length);

// add elements at the front
console.log("\n add elements at the front");
randomIntegers.unshift(12);
randomIntegers.unshift(23);
console.log(randomIntegers);
console.log("size:", randomIntegers.length);
randomIntegers.unshift(...[65, 8]);
console.log("size:", randomIntegers.length);
console.log(randomIntegers);

// delete element at a specific index
console.log("\n delete one element at index 2");
randomIntegers.splice(2, 1);
console.log("size:", randomIntegers.length);
console.log(randomIntegers);

// traverse entire array
// for loop
for (let i = 0; i < randomIntegers.length; ++i) {
  console.log(`[for loop] - current int: ${randomIntegers[i]}`);
}

// map
randomIntegers.map((int) => console.log(`[map] - current int: ${int}`));

// forEach
randomIntegers.forEach((int) => console.log(`[forEach] - current int: ${int}`));

console.log(randomIntegers);
randomIntegers.reverse();
console.log(randomIntegers);
