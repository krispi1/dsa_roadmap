DSA_Roadmap_day_02

### Array or List Data Structure

<u>Objectives:</u>
1. Explore Array or List data structure in your favorite programming language.
2. Reverse array in place i.e. in O(1) or constant space complexity.

Example:
INPUT ->> [3, 5, 9, 4, 2]
OUTPUT ->> [2, 4, 9, 5, 3]

3. Insert an item between other elements in an array.
<br>

<u>Solutions:</u>

1. **Basics of Array or List**
* An array (or list in some pogramming languages e.g. Python) is a linear data structure.
* An array or list is commonly used to store similar items.
* An array or list may, however, be used to store items of different types.
* An array keeps track of the memory address of its first element.
* Array elements are stored in contiguous (i.e. subsequent or adjacent) memory locations.
* An array or list uses indexes to provide access to its elements.
* Indexing in an array or list starts at 0.
* An array or list may be either **fixed** or **dynamic** in terms of its size.
* The size of a static or fixed array is determined upon its creation and/or allocation of its values. 

**Note:** Explore the array or list data structure in your programming language to understand their nuances.

<u>Some common operations on an array or list are demonstrated below:</u>

I'll be using JavaScript here btw.

Assuming we declare an empty dynamic array called randomIntegers like so:
``` JavaScript
  const randomIntegers = [];
```

* Check the size.
``` JavaScript
  randomIntegers.length;
```

* Insert an element or elements into the back.
``` JavaScript
  randomIntegers.push(9);
  randomIntegers.push(4)
  randomIntegers.push(...[1, 7])
```

* Insert an element or elements into the front.
``` JavaScript
  randomIntegers.unshift(12);
  randomIntegers.unshift(23);
  randomIntegers.unshift(...[65, 8])
```

* Delete an element from the back.
``` JavaScript
  randomIntegers.pop()
```

* Delete an element from the front.
``` JavaScript
  randomIntegers.shift();
```

* Delete an element from a specific index.
Array's splice method is also a perfect fit for this use case. It mutates or modifies the original array.
``` JavaScript
  // Signature: Array.splice(position,num)
  // position -> index of first item to delete
  // num -> number of elements to delete

  // remove a single element at index 2
  randomIntegers.splice(2, 1); 
```

* Traverse all elements; and perhaps print each of them. 
``` JavaScript
  // time: O(n), space: O(1)

  for (let i = 0; i < randomIntegers.length; ++i) {
    console.log(`[for loop] - current int: ${randomIntegers[i]}`);
  }

  randomIntegers.map((int) => console.log(`[map] - current int: ${int}`));
  randomIntegers.forEach((int) => console.log(`[forEach] - current int: ${int}`));
```

There are a lot more array methods to explore and we won't cover them all here so please do more research; for the dev spirit 😜😎.
<br>

2. **Reverse array in place**

Reversing an array mutates or modifies the original array.
``` JavaScript
  randomIntegers.reverse(); // time: O(n) space: O(1)
```
Check the article "How to reverse an array in JavaScript" [# 2. in Resources 👇] for more ways to do it.
<br>

3. **Insert an item between other elements in an array.**
The splice array method in JavaScript is best suited for this use case. 
```JavaScript
  // Signature: Array.splice(position, 0, new_elem1, new_elem2, ...)
  // position -> index from which to start insertion of elements.
  // 0 -> instruct splice method to not delete anything.
  // new_elem1, new_elem2, etc are new elements to be inserted.
  
  // starting at index 3, insert 99, then 113
  randomIntegers.splice(3, 0, 99, 113);
```
<br>

##### Resources
1. [DSA Roadmap pdf file by Ashish Gupta](https://bit.ly/3CNM9a9)
2. [How to reverse an array in JavaScript](https://bit.ly/3q711ZL) - LearnersBucket
3. [JavaScript Array splice: Delete, Insert and Replace](https://bit.ly/3TIDVG7) - JavaScript Tutorial
4. [Array on MDN](https://mzl.la/3RfLCC8) - MDN

##### Quick Links
1. [GitHub repo](https://bit.ly/3RfUrMf)
2. [Slack channel](https://bit.ly/3AJMuIm)
3. [Geoffrey Siele](https://bit.ly/3wPwrrm)
4. [Ashish Gupta](https://bit.ly/3TEDjBt)
